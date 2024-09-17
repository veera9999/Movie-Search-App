import React from "react";
import { Movie } from "../../redux/slices/movieSlice";
import "./MovieCard.css";
interface MovieCardProps {
  movie: Movie;
}
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card-view">
      <img src={movie.image} alt="image" />
      <div className="card-body-wrapper">
        <p className="title">{movie.title}</p>
        <p className="year">{movie.year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
