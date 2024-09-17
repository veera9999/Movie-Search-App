import React from "react";
import { useState } from "react";
import { AppDispatch } from "../../redux/store/store";
import { fetchMovies } from "../../redux/slices/movieSlice";
import "./SearchBar.css";
import { useDispatch } from "react-redux";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="search-bar-wrapper">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button
        className="search-btn"
        onClick={() => dispatch(fetchMovies(inputValue))}>
        search
      </button>
    </div>
  );
};

export default SearchBar;
