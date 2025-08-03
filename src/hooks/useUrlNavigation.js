import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useUrlNavigation = (setActiveSection) => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const scrollToSection = (sectionId) => {
      if (sectionId === 'experience') {
        // For experience section, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // For other sections, scroll to the element
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    switch (path) {
      case '/':
      case '/experience':
        scrollToSection('experience');
        setActiveSection('/');
        break;
      case '/projects':
        scrollToSection('projects');
        setActiveSection('/projects');
        break;
      case '/contact':
        scrollToSection('contact');
        setActiveSection('/contact');
        break;
      default:
        // For any unknown route, redirect to home
        window.history.replaceState({}, '', '/');
        scrollToSection('experience');
        setActiveSection('/');
        break;
    }
  }, [location.pathname, setActiveSection]);
};
