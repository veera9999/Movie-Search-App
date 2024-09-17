import React from "react";
import "./SearchResults.css";
import MovieCard from "../Movies/MovieCard";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { Movie } from "../../redux/slices/movieSlice";
import { RootState } from "../../redux/store/store";
const SearchResults: React.FC = () => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const { status } = useSelector((state: RootState) => state.movies);
  return (
    <div className="search-results-wrapper">
      <h2>Search Results: </h2>
      <div className="search-results-list">
        {status == "loading" && <Loader />}
        <ul>
          {movies.map((movie: Movie) => (
            <li key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
