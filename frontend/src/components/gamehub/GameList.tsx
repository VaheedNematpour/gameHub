import useGame from "./hooks/useGame";

function GameList() {
  const { data, error } = useGame();

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h2>Games</h2>

      <ul>{data && data.map((game) => <li key={game.id}>{game.title}</li>)}</ul>
    </>
  );
}

export default GameList;
