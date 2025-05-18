import { useParams, useOutletContext } from "react-router-dom";

function MovieDetail() {
  const { directorId, movieId } = useParams();
  const [directors] = useOutletContext();

  const director = directors.find((d) => d.id.toString() === directorId);
  const movie = director?.movies.find((m) => m.id.toString() === movieId);

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Directed by {director?.name || "Unknown"}</p>
      <p>Genre: {movie.genre || "Not specified"}</p>
      <p>Year: {movie.year || "Unknown"}</p>
    </div>
  );
}

export default MovieDetail;
