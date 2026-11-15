import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MovieList from "./components/MovieList.jsx";
import { movies } from "./data/movies.js";

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const topRated = movies.filter(movie => movie.rating >= 8.7);
  const shownMovies = onlyAvailable
    ? movies.filter(movie => movie.available)
    : movies;

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

        <div className="toolbar">
          <button
            className={onlyAvailable ? "btn btn--active" : "btn"}
            onClick={toggleAvailable}
          >
            רק זמינים לצפייה
          </button>
        </div>

        <MovieList title="כל הסרטים" movies={shownMovies} />
      </main>
      <Footer />
    </>
  );
}

export default App;