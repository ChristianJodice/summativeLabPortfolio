import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App Component', () => {
  test('renders the main application', () => {
    render(<App />);
    
    // Check if main sections are rendered
    expect(screen.getByText('Creative Agency')).toBeInTheDocument();
    expect(screen.getByText('Our Projects')).toBeInTheDocument();
    expect(screen.getByText('About Our Agency')).toBeInTheDocument();
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders add project button', () => {
    render(<App />);
    
    expect(screen.getByText('Add New Project')).toBeInTheDocument();
  });
}); 