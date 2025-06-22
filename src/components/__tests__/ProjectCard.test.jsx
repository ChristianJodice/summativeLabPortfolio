import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

const mockProject = {
  id: 1,
  title: "Test Project",
  description: "This is a test project description",
  image: "https://example.com/test-image.jpg",
  category: "Web Development",
  technologies: ["React", "Node.js", "MongoDB"],
  year: 2024
};

describe('ProjectCard Component', () => {
  test('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  test('renders all technology tags', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });

  test('displays project image with correct alt text', () => {
    render(<ProjectCard project={mockProject} />);
    
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg');
  });

  test('renders technologies section heading', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Technologies Used:')).toBeInTheDocument();
  });
}); 