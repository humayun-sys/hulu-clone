import Thumbnail from "./Thumbnail";

function Results({ results }) {
  console.log(results);
  return (
    <div>
      {results.map((result) => {
        <Thumbnail key={result.id} result={result} />
      })}
    </div>
  );
}

export default Results;
