import { createContext, useContext, useReducer } from 'react';

const ProjectContext = createContext();

const initialState = {
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB"],
      year: 2024
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "TypeScript"],
      year: 2023
    },
    {
      id: 3,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time analytics dashboard with machine learning insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "Data Science",
      technologies: ["Python", "TensorFlow", "React"],
      year: 2024
    }
  ],
  searchTerm: "",
  selectedCategory: "All"
};

const projectReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: [...state.projects, { ...action.payload, id: Date.now() }]
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      };
    case 'SET_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload
      };
    default:
      return state;
  }
};

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  const addProject = (project) => {
    dispatch({ type: 'ADD_PROJECT', payload: project });
  };

  const setSearchTerm = (term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };

  const setSelectedCategory = (category) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
  };

  const filteredProjects = state.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(state.searchTerm.toLowerCase()));
    
    const matchesCategory = state.selectedCategory === "All" || project.category === state.selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ["All", ...new Set(state.projects.map(project => project.category))];

  const value = {
    projects: state.projects,
    filteredProjects,
    searchTerm: state.searchTerm,
    selectedCategory: state.selectedCategory,
    categories,
    addProject,
    setSearchTerm,
    setSelectedCategory
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}; 