import React from "react";

class CategoryFilters extends React.Component {
  render() {
    const { categories, selectedCategory, onSelectCategory } = this.props;

    return (
      <div className="categories">
        <h5>category filters</h5>
        {categories.map(category => {
          return (
            <button
              onClick={() => onSelectCategory(category)}
              className={selectedCategory === category ? "selected" : undefined}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
}

export default CategoryFilters;
