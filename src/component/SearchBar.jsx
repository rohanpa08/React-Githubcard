import React, { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  const handleClick = () => {
    if (query.trim()) {
      handleSearch(query);
      setQuery(""); // Clears input field after search
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter Github Users"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
