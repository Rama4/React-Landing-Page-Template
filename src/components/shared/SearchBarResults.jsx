import "./SearchBarResults.css";
import SearchBarResult from "./SearchBarResult";
import { useEffect } from "react";

const SearchBarResults = ({ results }) => {
  useEffect(()=>{
    console.log(results);
  },[])
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchBarResult result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchBarResults;