import type { Movie } from "../../types/movie";
import css from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <div className={css.card}>
      {posterUrl ? (
        <img className={css.image} src={posterUrl} alt={movie.title} />
      ) : (
        <div className={css.placeholder}>No image</div>
      )}

      <h2 className={css.title}>{movie.title}</h2>
    </div>
  );
}
