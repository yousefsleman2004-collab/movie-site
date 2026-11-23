import "./SearchBar.css";

function SearchBar({query,onQueryChange,genre,onGenreChange,sortBy,onSortChange}) {
  return (
    <div className="search-bar">
      <label className="search-bar__field search-bar__field--grow">
        <span className="search-bar__label">חיפוש</span>
        <input
          className="search-bar__input"
          value={genre}
          onChange={e=> onGenreChange(e.target.value)}
        />
      </label>

      <label className="search-bar__field">
        <span className="search-bar__label">ז׳אנר</span>
        <select className="search-bar__input" value={sortBy}   onChange={e => onSortChange(e.target.value)}>
          <option value="all">כל הז׳אנרים</option>
          <option value="Action">Action</option>
          <option value="Animation">Animation</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
        </select>
      </label>

      <label className="search-bar__field">
        <span className="search-bar__label">מיון</span>
        <select className="search-bar__input">
          <option value="rating">לפי דירוג</option>
          <option value="year">לפי שנה</option>
          <option value="title">לפי שם</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
