import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  test('renders the header with logo and navigation', () => {
    render(<Header />);
    
    // Check if the logo is rendered
    expect(screen.getByText('Creative Agency')).toBeInTheDocument();
    expect(screen.getByText('Portfolio Platform')).toBeInTheDocument();
    
    // Check if navigation links are rendered
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    render(<Header />);
    
    const projectsLink = screen.getByText('Projects').closest('a');
    const aboutLink = screen.getByText('About').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');
    
    expect(projectsLink).toHaveAttribute('href', '#projects');
    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  test('header has correct structure', () => {
    render(<Header />);
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });
}); 