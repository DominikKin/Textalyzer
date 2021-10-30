import React from "react";

function Search({ searchWord, setSearchWord, searchWordCount }) {
  function getSearch(input) {
    setSearchWord(input.target.value);
  }

  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="Search..."
        id="search-input"
        className="search-input"
        onChange={getSearch}
      />
      {searchWordCount ? (
        <h3 className="search-results">
          Found the word <span>{searchWord} </span>
          {`${searchWordCount} ${searchWordCount === 1 ? "time" : "times"}`}
        </h3>
      ) : (
        <h3 className="search-results">Let's search for some words</h3>
      )}
    </div>
  );
}

export default Search;
