import React from "react";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const history = useHistory();
  const handleSubmit = evt => {
    evt.preventDefault();
    const keyword = evt.target.searchInput.value;
    history.push(`/search/${keyword}`);
  };
  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="Search"
        name="searchInput"
      />
      <button className="input-group-text" id="btnGroupAddon">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
