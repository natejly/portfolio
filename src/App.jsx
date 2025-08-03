import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Personal from './pages/Personal';

// Components
import Sidebar from './components/Sidebar';
import DarkModeToggle from './components/DarkModeToggle';

// Context
import { DarkModeProvider, useDarkMode } from './context/DarkModeContext';

// Hooks
import { useScrollNavigation } from './hooks/useScrollNavigation';
import { useUrlNavigation } from './hooks/useUrlNavigation';

function ScrollRouter() {
  const { isDarkMode } = useDarkMode();
  const { activeSection, setActiveSection } = useScrollNavigation();
  
  // Handle URL-based navigation
  useUrlNavigation(setActiveSection);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    window.history.replaceState({}, '', section);
  };

  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
    }`}>
      {/* Left Sidebar - Hidden on small screens */}
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={handleNavigation} 
      />

      {/* Right Content Area */}
      <div className="w-full min-h-screen lg:ml-[40vw] lg:w-[60vw] lg:mr-5 transition-colors duration-300 relative bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 py-6 sm:py-12">
          <DarkModeToggle />
          
          {/* Main Content Sections */}
          <Experience />
          <Projects />
          <Personal />

        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ScrollRouter />} />
          <Route path="/experience" element={<ScrollRouter />} />
          <Route path="/projects" element={<ScrollRouter />} />
          <Route path="/contact" element={<ScrollRouter />} />
          <Route path="*" element={<ScrollRouter />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;