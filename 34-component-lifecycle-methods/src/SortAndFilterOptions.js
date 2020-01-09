import React from "react";

class SortAndFilterOptions extends React.Component {
  render() {
    const {
      sortType,
      handleSearchChange,
      togglePopular,
      onlyPopular,
      handleSortTypeChange
    } = this.props;
    return (
      <div>
        <input onChange={handleSearchChange} placeholder="search titles" />
        <label>
          Default sort
          <input
            type="radio"
            value="DEFAULT"
            onChange={handleSortTypeChange}
            checked={sortType === "DEFAULT"}
          />
        </label>
        <label>
          Vote sort
          <input
            type="radio"
            value="VOTE"
            onChange={handleSortTypeChange}
            checked={sortType === "VOTE"}
          />
        </label>
        <label>
          alpha sort
          <input
            type="radio"
            value="ALPHA"
            onChange={handleSortTypeChange}
            checked={sortType === "ALPHA"}
          />
        </label>
        <button onClick={togglePopular}>
          {onlyPopular ? "Show all paintings" : "Show only popular"}
        </button>
      </div>
    );
  }
}

export default SortAndFilterOptions;
