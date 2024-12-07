import LoadingSkeleton from "../LoadingSkeleton";
import GameCard from "./GameCard";
import useGame from "./hooks/useGame";

interface Props {
  isDark: boolean;
}

function GameList({ isDark }: Props) {
  const { data, error, isLoading } = useGame();
  const numbers = [1, 2, 3, 4, 5, 6];

  if (error) return <p>{error.message}</p>;
  if (isLoading)
    return (
      <ul className="grid md:grid-cols-2 space-x-3 my-3 lg:grid-cols-3">
        {numbers.map((number) => (
          <li key={number} className="my-3 mx-3">
            <LoadingSkeleton />
          </li>
        ))}
      </ul>
    );

  return (
    <>
      <h2
        className={`text-3xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium mb-3 xl:text-4xl`}
      >
        Games
      </h2>

      <ul className="grid md:grid-cols-2 space-x-3 my-3 lg:grid-cols-3">
        {data &&
          data.map((game) => (
            <li
              className={`px-3 text-lg ${
                isDark ? "text-gray-300" : "text-gray-800"
              } my-3 xl:text-xl`}
              key={game.id}
            >
              <GameCard game={game} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default GameList;
