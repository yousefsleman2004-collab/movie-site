import "./AddMovieForm.css";

function AddMovieForm() {
  return (
    <section className="add-movie">
      <h2 className="add-movie__title">הוספת סרט</h2>

      <form className="add-movie__form">
        <label className="add-movie__field add-movie__field--wide">
          <span className="add-movie__label">שם הסרט</span>
          <input className="add-movie__input" type="text" placeholder="למשל Up" />
        </label>

        <label className="add-movie__field">
          <span className="add-movie__label">שנה</span>
          <input className="add-movie__input" type="number" placeholder="2009" />
        </label>

        <label className="add-movie__field">
          <span className="add-movie__label">אורך (דקות)</span>
          <input className="add-movie__input" type="number" placeholder="96" />
        </label>

        <label className="add-movie__field">
          <span className="add-movie__label">ז׳אנר</span>
          <select className="add-movie__input">
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
          />
        </label>

        <label className="add-movie__check">
          <input type="checkbox" />
          זמין לצפייה
        </label>

        <div className="add-movie__actions">
          <button className="btn btn--active" type="submit">
            הוספה לקטלוג
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddMovieForm;
