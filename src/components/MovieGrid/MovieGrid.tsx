import type { Movie } from "../../types/movies";
import MovieCard from "../MovieCard/MovieCard";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}
