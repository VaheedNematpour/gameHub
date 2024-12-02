import { Game } from "./hooks/useGame";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <section className="bg-gray-700 px-3 py-2 rounded shadow-md">
        <header>
          <h3>{game.title}</h3>
        </header>

        <hr className="w-1/3 mx-auto my-3" />

        <main>
          <ul>
            {game.platforms.map((platform) => (
              <li key={platform.id} className="inline-block px-1">
                <PlatformIcon platform={platform.title} />
              </li>
            ))}
          </ul>
        </main>
      </section>
    </>
  );
}

export default GameCard;
