import React from 'react';
import FilterMenutyles from '../styles/FilterMenuStyles';

const FilterMenu = ({ categoryFilter }) => {
  const { menuActive, setMenuActive, selectedCategory, setSelectedItem, categoryList } =
    categoryFilter;
  const dropDownHandler = () => {
    setMenuActive(!menuActive);
  };

  const dropDownItemHandler = (elem) => {
    setSelectedItem(elem);
    setMenuActive(false);
  };

  return (
    <FilterMenutyles>
      <div className="dropdown-btn" onClick={dropDownHandler}>
        {selectedCategory}
      </div>
      {menuActive && (
        <div className="dropdown-content">
          {categoryList.map((elem, idx) => (
            <div key={idx} className="dropdown-item" onClick={dropDownItemHandler.bind(null, elem)}>
              {elem}
            </div>
          ))}
        </div>
      )}
    </FilterMenutyles>
  );
};

export default FilterMenu;
