import type { Movie } from "../../types/movies";
import css from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(event) => event.stopPropagation()}>
        <button className={css.closeButton} type="button" onClick={onClose}>
          ×
        </button>

        {posterUrl && (
          <img className={css.image} src={posterUrl} alt={movie.title} />
        )}

        <h2>{movie.title}</h2>

        <p>{movie.overview}</p>

        {movie.release_date && <p>Release date: {movie.release_date}</p>}
      </div>
    </div>
  );
}
