import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearchSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebouncedTerm] = useState(searchTerm);

  //debouncing
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedTerm(searchTerm), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  useEffect(() => {
    onSearchSubmit(debounceTerm);
  }, [debounceTerm]);

  return (
    <div>
      <label>Please Enter the Search Term</label>
      <br />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* <button onClick={() => onSearchSubmit(searchTerm)}>Search</button> */}
    </div>
  );
};

export default SearchBar;
