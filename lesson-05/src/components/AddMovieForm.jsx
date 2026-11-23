import { useState } from "react";
import "./AddMovieForm.css";

const emptyForm = {
  title: "",
  year: "",
  duration: "",
  genre: "Action",
  rating: "",
  available: false,
};

function AddMovieForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.title.trim() === "") {
      setError("כתבו את שם הסרט");
      return;
    }

    onAdd({
      id: Date.now(),
      title: form.title.trim(),
      year: Number(form.year),
      duration: Number(form.duration),
      genre: form.genre,
      rating: Number(form.rating),
      poster: "/posters/placeholder.svg",
      available: form.available,
    });

    setForm(emptyForm);
    setError("");
  }

  return (
    <section className="add-movie">
      <h2 className="add-movie__title">הוספת סרט</h2>

      <form className="add-movie__form" onSubmit={handleSubmit}>
        <label className="add-movie__field add-movie__field--wide">
          <span className="add-movie__label">שם הסרט</span>
          <input
            className="add-movie__input"
            type="text"
            placeholder="למשל Up"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </label>

        <label className="add-movie__field">
          <span className="add-movie__label">שנה</span>
          <input
            className="add-movie__input"
            type="number"
            placeholder="2009"
            name="year"
            value={form.year}
            onChange={handleChange}
          />
        </label>

        <label className="add-movie__field">
          <span className="add-movie__label">אורך (דקות)</span>
          <input
            className="add-movie__input"
            type="number"
            placeholder="96"
            name="duration"
            value={form.duration}
            onChange={handleChange}
          />
        </label>

        <label className="add-movie__field">
          <span className="add-movie__label">ז׳אנר</span>
          <select
            className="add-movie__input"
            name="genre"
            value={form.genre}
            onChange={handleChange}
          >
            <option value="Action">Action</option>
            <option value="Animation">Animation</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
          </select>
        </label>

        <label className="add-movie__field">
          <span className="add-movie__label">דירוג</span>
          <input
            className="add-movie__input"
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="8.3"
            name="rating"
            value={form.rating}
            onChange={handleChange}
          />
        </label>

        <label className="add-movie__check">
          <input
            type="checkbox"
            name="available"
            checked={form.available}
            onChange={handleChange}
          />
          זמין לצפייה
        </label>

        <div className="add-movie__actions">
          <button className="btn btn--active" type="submit">
            הוספה לקטלוג
          </button>
          {error &&<p className="add-movie__error">{error}</p>}
        </div>
      </form>
    </section>
  );
}

export default AddMovieForm;