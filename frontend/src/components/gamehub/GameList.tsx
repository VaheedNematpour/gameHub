import GameCard from "./GameCard";
import useGame from "./hooks/useGame";

interface Props {
  isDark: boolean;
}

function GameList({ isDark }: Props) {
  const { data, error } = useGame();

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h2
        className={`text-3xl ${
          isDark ? "text-gray-300" : "text-gray-800"
        } font-medium mb-3 xl:text-4xl`}
      >
        Games
      </h2>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3">
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
