import React from "react";
import { FilterBoxProps } from "../../hooks/types/FilterBoxProps";

const FilterBox: React.FC<FilterBoxProps> = ({ pageableDTO, dto, handleChange }) => {
  return (
    <div>
      {/* Sort Value */}
      <label htmlFor="sortValue">Sort Value:</label>
      <select name="sortValue" value={pageableDTO.sortValue} onChange={handleChange}>
        {dto.sortValues.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Sort Direction */}
      <label htmlFor="sortDirection">Sort Direction:</label>
      <select name="sortDirection" value={pageableDTO.sortDirection} onChange={handleChange}>
        <option value="DESC">DESC</option>
        <option value="ASC">ASC</option>
      </select>
      <br />

      {/* Filter Option */}
      <label htmlFor="filterOption">Filter Option:</label>
      <select name="filterOption" value={pageableDTO.filterOption} onChange={handleChange}>
        <option value="">None</option>
        {dto.filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Filter Value */}
      <label htmlFor="filterValue">Filter Value:</label>
      <input
        type="text"
        name="filterValue"
        value={pageableDTO.filterValue}
        onChange={handleChange}
      />
      <br />

      {/* Date Option */}
      <label htmlFor="dateOption">Date Option:</label>
      <select name="dateOption" value={pageableDTO.dateOption} onChange={handleChange}>
        <option value="">None</option>
        {dto.dateOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Date Start */}
      <label htmlFor="dateStart">Date Start:</label>
      <input
        type="datetime-local"
        name="dateStart"
        value={pageableDTO.dateStart}
        onChange={handleChange}
      />

      {/* Date End */}
      <label htmlFor="dateEnd">Date End:</label>
      <input
        type="datetime-local"
        name="dateEnd"
        value={pageableDTO.dateEnd}
        onChange={handleChange}
      />
      <br />

      {/* Size */}
      <label htmlFor="size">Size:</label>
      <input type="number" name="size" value={pageableDTO.size} onChange={handleChange} />
    </div>
  );
};

export default FilterBox;
