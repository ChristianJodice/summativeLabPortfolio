import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectProvider } from '../../contexts/ProjectContext';
import AddProjectForm from '../AddProjectForm';

const renderWithProvider = (component) => {
  return render(
    <ProjectProvider>
      {component}
    </ProjectProvider>
  );
};

describe('AddProjectForm Component', () => {
  test('renders add project button when form is closed', () => {
    renderWithProvider(<AddProjectForm />);
    
    expect(screen.getByText('Add New Project')).toBeInTheDocument();
    expect(screen.queryByText('Add New Project')).toBeInTheDocument();
  });

  test('opens form when add project button is clicked', () => {
    renderWithProvider(<AddProjectForm />);
    
    const addButton = screen.getByText('Add New Project');
    fireEvent.click(addButton);
    
    expect(screen.getByText('Add New Project')).toBeInTheDocument();
    expect(screen.getByLabelText('Project Title *')).toBeInTheDocument();
    expect(screen.getByLabelText('Category *')).toBeInTheDocument();
  });

  test('form fields update when user types', () => {
    renderWithProvider(<AddProjectForm />);
    
    const addButton = screen.getByText('Add New Project');
    fireEvent.click(addButton);
    
    const titleInput = screen.getByLabelText('Project Title *');
    const descriptionInput = screen.getByLabelText('Description *');
    
    fireEvent.change(titleInput, { target: { value: 'Test Project' } });
    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    
    expect(titleInput.value).toBe('Test Project');
    expect(descriptionInput.value).toBe('Test Description');
  });

  test('form can be cancelled', () => {
    renderWithProvider(<AddProjectForm />);
    
    const addButton = screen.getByText('Add New Project');
    fireEvent.click(addButton);
    
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    
    expect(screen.getByText('Add New Project')).toBeInTheDocument();
    expect(screen.queryByLabelText('Project Title *')).not.toBeInTheDocument();
  });

  test('form has all required fields', () => {
    renderWithProvider(<AddProjectForm />);
    
    const addButton = screen.getByText('Add New Project');
    fireEvent.click(addButton);
    
    expect(screen.getByLabelText('Project Title *')).toBeInTheDocument();
    expect(screen.getByLabelText('Category *')).toBeInTheDocument();
    expect(screen.getByLabelText('Description *')).toBeInTheDocument();
    expect(screen.getByLabelText('Image URL *')).toBeInTheDocument();
    expect(screen.getByLabelText('Year *')).toBeInTheDocument();
    expect(screen.getByLabelText('Technologies (comma-separated) *')).toBeInTheDocument();
  });
}); 