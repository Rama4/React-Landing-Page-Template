import { useState } from "react";
import "./SearchBar.css";
import MagnifyingGlassIcon from "./MagnifyingGlassIcon";
import { useNavigate } from "react-router-dom";

const mockSearchResults = [
  "Juliana MacDowell",
  "Jason Masi",
  "Linkin Park"
]

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const onSearchIconPress = () => {
    navigate('/search',  { state: { searchString: input }} );
  }
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearchIconPress();
    }
  }

  return (
    <div className="input-wrapper coloredBorder">
      <input
        className="searchInput"
        placeholder="Search for event types"
        value={input}
        // onChange={(e) => handleChange(e.target.value)}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div id="search-icon" onClick={onSearchIconPress}>
        <MagnifyingGlassIcon color="#DB408E" />
      </div>
    </div>
  );
};

export default SearchBar;