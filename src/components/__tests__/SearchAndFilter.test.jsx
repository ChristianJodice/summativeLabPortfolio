import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectProvider } from '../../contexts/ProjectContext';
import SearchAndFilter from '../SearchAndFilter';

const renderWithProvider = (component) => {
  return render(
    <ProjectProvider>
      {component}
    </ProjectProvider>
  );
};

describe('SearchAndFilter Component', () => {
  test('renders search input and category filter', () => {
    renderWithProvider(<SearchAndFilter />);
    
    expect(screen.getByPlaceholderText(/search projects/i)).toBeInTheDocument();
    expect(screen.getByText('Filter by Category:')).toBeInTheDocument();
    expect(screen.getByDisplayValue('All')).toBeInTheDocument();
  });

  test('search input updates when user types', () => {
    renderWithProvider(<SearchAndFilter />);
    
    const searchInput = screen.getByPlaceholderText(/search projects/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });
    
    expect(searchInput.value).toBe('React');
  });

  test('category filter updates when user selects different option', () => {
    renderWithProvider(<SearchAndFilter />);
    
    const categorySelect = screen.getByDisplayValue('All');
    fireEvent.change(categorySelect, { target: { value: 'Web Development' } });
    
    expect(categorySelect.value).toBe('Web Development');
  });

  test('renders all category options', () => {
    renderWithProvider(<SearchAndFilter />);
    
    const categorySelect = screen.getByDisplayValue('All');
    const options = categorySelect.querySelectorAll('option');
    
    expect(options).toHaveLength(4); // All + 3 categories from initial state
    expect(options[0]).toHaveValue('All');
    expect(options[1]).toHaveValue('Web Development');
    expect(options[2]).toHaveValue('Mobile Development');
    expect(options[3]).toHaveValue('Data Science');
  });
}); 