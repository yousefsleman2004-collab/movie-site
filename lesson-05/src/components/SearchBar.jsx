import "./SearchBar.css";

function SearchBar({
  query,
  onQueryChange,
  genre,
  onGenreChange,
  genres,
  sortBy,
  onSortChange,
  sortAsc,
  onToggleSortOrder,
}) {
  return (
    <div className="search-bar">
      <label className="search-bar__field search-bar__field--grow">
        <span className="search-bar__label">חיפוש</span>
        <input
          className={query ? "search-bar__input search-bar__input--active" : "search-bar__input"}
          type="text"
          placeholder="שם הסרט..."
          value={query}
          onChange={e => onQueryChange(e.target.value)}
        />
        {query && <button type="button" onClick={() => onQueryChange("")}>X</button>}
       
      </label>

      <label className="search-bar__field">
        <span className="search-bar__label">ז׳אנר</span>
        <select
          className={genre !== "all" ? "search-bar__input search-bar__input--active" : "search-bar__input"}
          value={genre}
          onChange={e => onGenreChange(e.target.value)}
        >
          <option value="all">כל הז׳אנרים</option>
          {genres.map((g)=>(

            <option key={g} value={g}>{g}</option>

          ))}
        </select>
      </label>

      <label className="search-bar__field">
        <span className="search-bar__label">מיון</span>
        <select
          className="search-bar__input"
          value={sortBy}
          onChange={e => onSortChange(e.target.value)}
        >
          <option value="rating">לפי דירוג</option>
          <option value="year">לפי שנה</option>
          <option value="title">לפי שם</option>
        </select>
         <button type="button" onClick={onToggleSortOrder} title="הפוך כיוון מיון">
          {sortAsc ? "up" : "down"}

         </button>

      </label>
    </div>
  );
}

export default SearchBar;