interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  return (
    <>
      {score < 60 && <span className="bg-red-600 px-2 rounded">{score}</span>}
      {score > 60 && score < 80 ? (
        <span className="bg-yellow-600 px-2 rounded">{score}</span>
      ) : undefined}
      {score > 80 && <span className="bg-green-600 px-2 rounded">{score}</span>}
    </>
  );
}

export default CriticScore;
