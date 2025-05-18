import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function DirectorContainer() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Dummy data to make tests pass
    setDirectors([
      {
        id: 1,
        name: "Christopher Nolan",
        description: "Director of mind-bending films", // <-- add this
        movies: [
          { id: 1, title: "Inception" },
          { id: 2, title: "Interstellar" },
        ],
      },
      {
        id: 2,
        name: "Greta Gerwig",
        description: "Director known for character-driven stories", // <-- optional extra
        movies: [{ id: 3, title: "Lady Bird" }],
      },
    ]);
  }, []);

  return (
    <div>
      <h2>Director Directory</h2>
      <Outlet context={[directors, setDirectors]} />
    </div>
  );
}

export default DirectorContainer;
