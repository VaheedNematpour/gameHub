import CriticScore from "../CriticScore";
import { Game } from "./hooks/useGame";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <section className="bg-gray-700 px-3 py-2 rounded shadow-md">
        <header></header>

        <main>
          <h3>{game.title}</h3>

          <hr className="w-1/3 mx-auto border-gray-300 my-3 rounded" />

          <ul className="px-3 flex items-center justify-between">
            <div>
              {game.platforms.map((platform) => (
                <li key={platform.id} className="inline-block px-1">
                  <PlatformIcon platform={platform.title} />
                </li>
              ))}
            </div>
            <li>
              <CriticScore score={game.score} />
            </li>
          </ul>
        </main>
      </section>
    </>
  );
}

export default GameCard;
