import { useState } from "react";

function MovieForm({ onAddMovie, directors }) {
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    directorId: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Prepare movie data with numeric directorId and year
    const newMovie = {
      title: formData.title.trim(),
      year: Number(formData.year),
      directorId: Number(formData.directorId),
    };

    onAddMovie(newMovie);

    setFormData({ title: "", year: "", directorId: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <input
        name="title"
        placeholder="Movie Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        name="year"
        placeholder="Release Year"
        type="number"
        value={formData.year}
        onChange={handleChange}
        required
      />
      <select
        name="directorId"
        value={formData.directorId}
        onChange={handleChange}
        required
      >
        <option value="">Select Director</option>
        {directors.map((director) => (
          <option key={director.id} value={director.id}>
            {director.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;
