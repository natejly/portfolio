import { useEffect, useState, useCallback } from 'react';

export const useScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('/');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const halfViewport = viewportHeight / 2;

    const experienceElement = document.getElementById('experience');
    const projectsElement = document.getElementById('projects');
    const contactElement = document.getElementById('contact');

    if (experienceElement && projectsElement && contactElement) {
      const experienceTop = experienceElement.offsetTop;
      const projectsTop = projectsElement.offsetTop;
      const contactTop = contactElement.offsetTop;

      let newSection = '/';

      // Check which section is most visible in the viewport
      if (scrollPosition + halfViewport >= contactTop) {
        newSection = '/contact';
      } else if (scrollPosition + halfViewport >= projectsTop) {
        newSection = '/projects';
      } else {
        // If we're above projects section, we're in experience
        newSection = '/';
      }

      setActiveSection(prevSection => {
        if (newSection !== prevSection) {
          window.history.replaceState({}, '', newSection);
          return newSection;
        }
        return prevSection;
      });
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add event listener with passive option for better performance
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [handleScroll]);

  return { activeSection, setActiveSection };
};
