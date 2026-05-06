import { useState } from "react";
import { searchMovies, getMovieDetail } from "./services/api";
import SearchBar from "./components/SearchBar";
import MovieList from "./movie-app/src/src/components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError("");
    setNoResults(false);

    try {
      const res = await searchMovies(query);

      if (res.data.Response === "False") {
        setNoResults(true);
        setMovies([]);
      } else {
        setMovies(res.data.Search);
      }
    } catch (err) {
      setError("Error al buscar películas");
    }

    setLoading(false);
  };

  const handleSelect = async (id) => {
    setLoading(true);

    try {
      const res = await getMovieDetail(id);
      setSelected(res.data);
    } catch {
      setError("Error al obtener detalle");
    }

    setLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {noResults && <p>No se encontraron resultados</p>}

      {!selected ? (
        <MovieList movies={movies} onSelect={handleSelect} />
      ) : (
        <MovieDetail movie={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App;

<MovieList movies={movies} onSelect={handleSelect} />

{loading && <Loader />}
{error && <ErrorMessage message={error} />}
{noResults && <p>No se encontraron resultados</p>}

{!selected ? (
  <MovieList movies={movies} onSelect={handleSelect} />
) : (
  <MovieDetail movie={selected} onBack={() => setSelected(null)} />
)}