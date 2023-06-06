import { useEffect } from "react";
import "./SearchBarResult.css";

const SearchBarResult = ({ result }) => {

    useEffect(()=>{
      console.log(result);
    },[result])

  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      <p>{result}</p>
    </div>
  );
};

export default SearchBarResult;