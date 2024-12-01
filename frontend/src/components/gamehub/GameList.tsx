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
        } font-medium xl:text-4xl`}
      >
        Games
      </h2>

      <ul>
        {data &&
          data.map((game) => (
            <li className="grid grid-cols-3" key={game.id}>
              <GameCard game={game} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default GameList;
