import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default MovieList;