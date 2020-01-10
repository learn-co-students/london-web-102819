import React from "react";
import { SORT_TYPES } from "./config";

const SortAndFilterOptions = ({
  sortType,
  setSortType,
  showGreasedOnly,
  toggleShowGreasedOnly
}) => {
  return (
    <form className="ui form" onSubmit={e => e.preventDefault()}>
      <button
        onClick={toggleShowGreasedOnly}
        className={`ui ${showGreasedOnly ? "primary" : "secondary"} button`}
      >
        {showGreasedOnly ? "Show all" : "Show greased only"}
      </button>
      <div className="ui buttons">
        <button
          onClick={() => setSortType(SORT_TYPES.DEFAULT)}
          className={`ui button ${
            sortType === SORT_TYPES.DEFAULT ? "positive" : ""
          }`}
        >
          Default
        </button>
        <div className="or"></div>
        <button
          onClick={() => setSortType(SORT_TYPES.NAME)}
          className={`ui button ${
            sortType === SORT_TYPES.NAME ? "positive" : ""
          }`}
        >
          Name
        </button>
        <div className="or"></div>
        <button
          onClick={() => setSortType(SORT_TYPES.WEIGHT)}
          className={`ui button ${
            sortType === SORT_TYPES.WEIGHT ? "positive" : ""
          }`}
        >
          Weight
        </button>
      </div>
    </form>
  );
};

export default SortAndFilterOptions;
