import React from 'react';
import { useProjects } from '../contexts/ProjectContext';
import './SearchAndFilter.css';

const SearchAndFilter = () => {
  const { searchTerm, selectedCategory, categories, setSearchTerm, setSelectedCategory } = useProjects();

  return (
    <div className="search-filter-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search projects by title, description, or technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      
      <div className="filter-container">
        <label htmlFor="category-filter" className="filter-label">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter; 