// src/components/MiniDirectorCard.jsx
import { Link } from "react-router-dom";

function MiniDirectorCard({ director }) {
  return (
    <div className="mini-director-card">
      <h3>
        <Link to={`/directors/${director.id}`}>{director.name}</Link>
      </h3>
      <p>{director.description}</p>
    </div>
  );
}

export default MiniDirectorCard;
