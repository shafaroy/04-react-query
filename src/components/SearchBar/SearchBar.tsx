import { useState } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (formData: FormData) => {
    const searchQuery = formData.get("query");

    if (typeof searchQuery !== "string" || !searchQuery.trim()) {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(searchQuery.trim());
    setQuery("");
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search movies..."
      />

      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
}
