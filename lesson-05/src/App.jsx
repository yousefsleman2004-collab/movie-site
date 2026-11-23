import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieList from "./components/MovieList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import AddMovieForm from "./components/AddMovieForm.jsx";
import { movies } from "./data/movies.js";
import { useState } from "react";

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [query,setquery]=useState("");
   const [genre, setGenre] = useState("all");
   const [sortBy, setSortBy] = useState("rating");

  const topRated = movies.filter(movie => movie.rating >= 8.7);
  const text = query.trim().toLowerCase();

  let shownMovies = movies;
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

  return (
    <>
      <Header />
      <main className="page container">
        <section className="page__intro">
          <h1>הקטלוג</h1>
          <p>סרטים שכדאי לראות — הישנים הטובים והחדשים.</p>
        </section>

        <MovieList title="הכי מדורגים" movies={topRated} />
        l

        <div className="toolbar">
          <SearchBar query={query} onQueryChange={setquery}  genre={genre} onGenreChange={setGenre} sortBy={sortBy} onSortChange={setSortBy}/>
          <button
            className={onlyAvailable ? "btn btn--active" : "btn"}
            onClick={toggleAvailable}
          >
            רק זמינים לצפייה
          </button>
        </div>

        <MovieList title="כל הסרטים" movies={shownMovies} />

        <AddMovieForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
