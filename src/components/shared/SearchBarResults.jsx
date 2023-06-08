import "./SearchBarResults.css";
import SearchBarResult from "./SearchBarResult";

const SearchBarResults = ({ results }) => {

  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchBarResult result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchBarResults;