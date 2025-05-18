import { useOutletContext } from "react-router-dom";
import MiniDirectorCard from "./MiniDirectorCard";

function DirectorList() {
  const [directors] = useOutletContext() || [[]]; // Safe fallback

  return (
    <div className="director-list">
      {directors.map((director) => (
        <MiniDirectorCard key={director.id} director={director} />
      ))}
    </div>
  );
}

export default DirectorList;
