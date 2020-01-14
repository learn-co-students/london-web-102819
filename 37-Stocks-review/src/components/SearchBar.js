import React from "react";

const SearchBar = ({
  updateFilter,
  sortType,
  updateSortType,
  updateSortOrder
}) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortType === "Alphabetically"}
          onChange={e => updateSortType(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortType === "Price"}
          onChange={e => updateSortType(e.target.value)}
        />
        Price
      </label>
      <label>
        <select onChange={e => updateSortOrder(e.target.value)}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={e => updateFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
