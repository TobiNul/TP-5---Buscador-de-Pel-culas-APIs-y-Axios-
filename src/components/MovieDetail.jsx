function MovieDetail({ movie, onBack }) {
  return (
    <div>
      <button onClick={onBack}>Volver</button>

      <h2>{movie.Title}</h2>

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200"}
        alt={movie.Title}
        width="200"
      />

      <p><strong>Año:</strong> {movie.Year}</p>
      <p><strong>Género:</strong> {movie.Genre !== "N/A" ? movie.Genre : "No disponible"}</p>
      <p><strong>Director:</strong> {movie.Director !== "N/A" ? movie.Director : "No disponible"}</p>
      <p><strong>Actores:</strong> {movie.Actors !== "N/A" ? movie.Actors : "No disponible"}</p>
      <p><strong>Sinopsis:</strong> {movie.Plot !== "N/A" ? movie.Plot : "No disponible"}</p>
      <p><strong>Duración:</strong> {movie.Runtime !== "N/A" ? movie.Runtime : "No disponible"}</p>
      <p><strong>Idioma:</strong> {movie.Language !== "N/A" ? movie.Language : "No disponible"}</p>
      <p><strong>País:</strong> {movie.Country !== "N/A" ? movie.Country : "No disponible"}</p>
      <p><strong>IMDb:</strong> {movie.imdbRating !== "N/A" ? movie.imdbRating : "No disponible"}</p>
    </div>
  );
}

export default MovieDetail;