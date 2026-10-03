import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Movie } from "../../types/movie";
import css from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  const modal = (
    <div
      className={css.backdrop}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={css.modal}>
        <button className={css.closeButton} type="button" onClick={onClose}>
          ×
        </button>

        {backdropUrl && (
          <img className={css.image} src={backdropUrl} alt={movie.title} />
        )}

        <h2>{movie.title}</h2>

        <p>{movie.overview}</p>

        <p>Release date: {movie.release_date}</p>

        <p>Rating: {movie.vote_average.toFixed(1)}</p>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
