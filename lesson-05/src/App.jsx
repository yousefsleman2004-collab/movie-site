import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieList from "./components/MovieList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import AddMovieForm from "./components/AddMovieForm.jsx";
import { movies } from "./data/movies.js";

function App() {
  const [movieList, setMovieList] = useState(movies);
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const topRated = movieList.filter(movie => movie.rating >= 8.7);

  const text = query.trim().toLowerCase();

  let shownMovies = movieList;
  if (onlyAvailable) {
    shownMovies = shownMovies.filter(movie => movie.available);
  }
  if (genre !== "all") {
    shownMovies = shownMovies.filter(movie => movie.genre === genre);
  }
  if (text !== "") {
    shownMovies = shownMovies.filter(movie =>
      movie.title.toLowerCase().includes(text)
    );
  }
  shownMovies = [...shownMovies].sort(compareMovies);

  const isFiltered = onlyAvailable || genre !== "all" || text !== "";

  function compareMovies(a, b) {
    if (sortBy === "year") {
      return b.year - a.year;
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return b.rating - a.rating;
  }

  function toggleAvailable() {
    setOnlyAvailable(!onlyAvailable);
  }

  function resetFilters() {
    setOnlyAvailable(false);
    setQuery("");
    setGenre("all");
  }

  function addMovie(movie) {
    setMovieList([...movieList, movie]);
  }

  return (
    <>
      <Header />
      <main className="page container">
        <section className="page__intro">
          <h1>הקטלוג</h1>
          <p>סרטים שכדאי לראות — הישנים הטובים והחדשים.</p>
        </section>

        <MovieList title="הכי מדורגים" movies={topRated} />

        <div className="toolbar">
          <SearchBar
            query={query}
            onQueryChange={setQuery}
            genre={genre}
            onGenreChange={setGenre}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          <button
            className={onlyAvailable ? "btn btn--active" : "btn"}
            onClick={toggleAvailable}
          >
            רק זמינים לצפייה
          </button>
          {isFiltered && (
            <button className="btn" onClick={resetFilters}>
              ניקוי
            </button>
          )}
        </div>

        <MovieList
          title={`כל הסרטים (${shownMovies.length})`}
          movies={shownMovies}
        />

        <AddMovieForm onAdd={addMovie} />
      </main>
      <Footer />
    </>
  );
}

export default App;