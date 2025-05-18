import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function DirectorForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); // <-- new
  const [directors, setDirectors] = useOutletContext();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newDirector = {
      id: Date.now(),
      name,
      description, // <-- include this
      movies: [],
    };
    setDirectors([...directors, newDirector]);
    navigate("/directors");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Director</h2>
      <input
        type="text"
        value={name}
        placeholder="Director Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        placeholder="Short Description"
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Director</button>
    </form>
  );
}

export default DirectorForm;
