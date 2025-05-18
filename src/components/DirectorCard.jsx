import { useParams, Outlet, useOutletContext } from "react-router-dom";

const DirectorCard = () => {
  const { id } = useParams();
  const outletContext = useOutletContext();

  const directors = Array.isArray(outletContext) ? outletContext[0] : [];
  const director = directors.find((d) => d.id === parseInt(id));

  if (!director) return <p>Director not found.</p>;

  return (
    <div className="director-card">
      <h3>{director.name}</h3>
      {director.description && <p>{director.description}</p>}
      {director.movies?.length > 0 ? (
        <ul>
          {director.movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
      <Outlet context={[director, directors]} />
    </div>
  );
};

export default DirectorCard;
