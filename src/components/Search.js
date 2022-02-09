import React, { useState } from "react";

function Search({ setSearch }) {

  const [searchbar, setSearchbar] = useState("")

  // On submit, set state declared in app
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchbar)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchbar}
        onChange={e => setSearchbar(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
