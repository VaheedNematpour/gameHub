import { Game } from "./hooks/useGame";

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
        <main></main>
      </section>
    </>
  );
}

export default GameCard;
