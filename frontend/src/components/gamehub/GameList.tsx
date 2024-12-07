import LoadingSkeleton from "../LoadingSkeleton";
import GameCard from "./GameCard";
import useGame from "./hooks/useGame";

interface Props {
  isDark: boolean;
}

function GameList({ isDark }: Props) {
  const { data, error, isLoading } = useGame();

  if (error) return <p>{error.message}</p>;
  if (isLoading)
    return (
      <ul className="grid md:grid-cols-2 space-x-3 lg:grid-cols-3">
        <li>
          <LoadingSkeleton />
        </li>
        <li>
          <LoadingSkeleton />
        </li>
        <li>
          <LoadingSkeleton />
        </li>
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
              } xl:text-xl`}
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
