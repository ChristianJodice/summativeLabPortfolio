# Portfolio Platform - Creative Agency

A modern, responsive React Single Page Application (SPA) designed to showcase creative agency projects. This platform provides a seamless user experience for displaying past projects and allows dynamic updates as new work is completed.

## Features

### Core Functionality
- **Project Display**: Beautiful grid layout showcasing projects with images, descriptions, and technology tags
- **Dynamic Project Addition**: Form interface for adding new projects to the portfolio
- **Search & Filter**: Real-time search functionality and category-based filtering
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices

### Technical Features
- **React Hooks**: Modern state management using useState and useReducer
- **Context API**: Global state management for projects and filtering
- **Component Architecture**: Modular, reusable components with clear separation of concerns
- **CSS Modules**: Scoped styling for maintainable and conflict-free CSS
- **Testing**: Comprehensive test suite using Jest and React Testing Library

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation and branding
│   ├── SearchAndFilter.jsx # Search and category filtering
│   ├── ProjectCard.jsx  # Individual project display
│   ├── ProjectGrid.jsx  # Grid layout for projects
│   ├── AddProjectForm.jsx # Form for adding new projects
│   └── __tests__/       # Component tests
├── contexts/            # React Context providers
│   └── ProjectContext.jsx # Global project state management
├── assets/              # Static assets
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── setupTests.js        # Test configuration
```

## Component Hierarchy

```
App
├── ProjectProvider (Context)
├── Header
├── Main Content
│   ├── Projects Section
│   │   ├── SearchAndFilter
│   │   ├── AddProjectForm
│   │   └── ProjectGrid
│   │       └── ProjectCard (multiple)
│   ├── About Section
│   └── Contact Section
```

## State Management

The application uses React Context API with useReducer for global state management:

- **Projects**: Array of project objects with metadata
- **Search Term**: Current search filter text
- **Selected Category**: Current category filter
- **Filtered Projects**: Computed filtered results

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint

## Usage

### Adding Projects
1. Click the "Add New Project" button
2. Fill in the required fields:
   - Project Title
   - Category
   - Description
   - Image URL
   - Year
   - Technologies (comma-separated)
3. Click "Add Project" to save

### Searching and Filtering
- Use the search bar to find projects by title, description, or technologies
- Use the category dropdown to filter by project type
- Search and filter work together for precise results

## Testing

The application includes comprehensive tests for all components:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Test Coverage
- Component rendering tests
- User interaction tests
- State management tests
- Form validation tests

## Styling

The application uses modern CSS with:
- CSS Grid and Flexbox for layouts
- CSS Custom Properties for theming
- Responsive design with mobile-first approach
- Smooth animations and transitions
- Modern color palette and typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Lazy loading for images
- Efficient re-rendering with React.memo
- Minimal dependencies

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact:
- Email: hello@creativeagency.com
- Phone: +1 (555) 123-4567

## Acknowledgments

- React team for the amazing framework
- Vite for fast development experience
- Unsplash for sample images
- Testing Library for excellent testing utilities
