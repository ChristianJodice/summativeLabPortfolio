import React, { useState } from 'react';
import { useProjects } from '../contexts/ProjectContext';
import './AddProjectForm.css';

const AddProjectForm = () => {
  const { addProject } = useProjects();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    technologies: '',
    year: new Date().getFullYear()
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert technologies string to array
    const technologiesArray = formData.technologies
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech.length > 0);

    const newProject = {
      ...formData,
      technologies: technologiesArray,
      year: parseInt(formData.year)
    };

    addProject(newProject);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      image: '',
      category: '',
      technologies: '',
      year: new Date().getFullYear()
    });
    
    setIsFormOpen(false);
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setFormData({
      title: '',
      description: '',
      image: '',
      category: '',
      technologies: '',
      year: new Date().getFullYear()
    });
  };

  if (!isFormOpen) {
    return (
      <div className="add-project-button-container">
        <button 
          className="add-project-button"
          onClick={() => setIsFormOpen(true)}
        >
          <svg className="add-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Project
        </button>
      </div>
    );
  }

  return (
    <div className="add-project-form-container">
      <form className="add-project-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Add New Project</h2>
          <button 
            type="button" 
            className="close-button"
            onClick={handleCancel}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Project Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Enter project title"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="">Select category</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Data Science">Data Science</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="DevOps">DevOps</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows="4"
            placeholder="Describe your project"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="image">Image URL *</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              required
              placeholder="https://example.com/image.jpg"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="year">Year *</label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleInputChange}
              required
              min="2000"
              max={new Date().getFullYear() + 1}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="technologies">Technologies (comma-separated) *</label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleInputChange}
            required
            placeholder="React, Node.js, MongoDB"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm; 