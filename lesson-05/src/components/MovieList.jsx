import MovieCard from "./MovieCard.jsx";
import "./MovieList.css";

function MovieList({ title, movies }) {
  return (
    <section className="movie-list">
      <h2 className="movie-list__title">{title}</h2>
      <div className="movie-list__grid">
        {movies.map(movie => {
          <MovieCard
            title={movie.title}
            year={movie.year}
            duration={movie.duration}
            genre={movie.genre}
            rating={movie.rating}
            poster={movie.poster}
            available={movie.available}
          />
        })}
      </div>
    </section>
  );
}

export default MovieList;
