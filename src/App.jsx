import React from 'react';
import { ProjectProvider } from './contexts/ProjectContext';
import Header from './components/Header';
import SearchAndFilter from './components/SearchAndFilter';
import AddProjectForm from './components/AddProjectForm';
import ProjectGrid from './components/ProjectGrid';
import './App.css';

function App() {
  return (
    <ProjectProvider>
      <div className="App">
        <Header />
        <main className="main-content">
          <section id="projects" className="projects-section">
            <div className="section-header">
              <h2>Our Projects</h2>
              <p>Explore our latest work and creative solutions</p>
            </div>
            
            <SearchAndFilter />
            <AddProjectForm />
            <ProjectGrid />
          </section>
          
          <section id="about" className="about-section">
            <div className="about-container">
              <h2>About Our Agency</h2>
              <p>
                We are a passionate team of developers, designers, and innovators 
                dedicated to creating exceptional digital experiences. Our portfolio 
                showcases our commitment to quality, innovation, and client success.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
            </div>
          </section>
          
          <section id="contact" className="contact-section">
            <div className="contact-container">
              <h2>Get In Touch</h2>
              <p>Ready to start your next project? Let's discuss how we can help bring your vision to life.</p>
              <div className="contact-info">
                <div className="contact-item">
                  <h4>Email</h4>
                  <p>hello@creativeagency.com</p>
                </div>
                <div className="contact-item">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </ProjectProvider>
  );
}

export default App;
