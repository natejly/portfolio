import { useEffect, useState, useCallback } from 'react';

export const useScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('/');

  const handleScroll = useCallback(() => {
    const experienceElement = document.getElementById('experience');
    const projectsElement = document.getElementById('projects');
    const contactElement = document.getElementById('contact');

    if (!experienceElement || !projectsElement || !contactElement) {
      console.warn('One or more section elements not found:', {
        experienceElement,
        projectsElement,
        contactElement
      });
      return;
    }

    const sections = [
      { name: '/', el: experienceElement },
      { name: '/projects', el: projectsElement },
      { name: '/contact', el: contactElement }
    ];

    const viewportHeight = window.innerHeight;
    let newSection = '/';
    let maxVisible = 0;

    // Use a threshold for visibility (e.g., at least 30% of section visible)
    const threshold = 0.3;
    sections.forEach(section => {
      const rect = section.el.getBoundingClientRect();
      const sectionHeight = rect.height || section.el.offsetHeight;
      const visible = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
      const visibleRatio = sectionHeight ? visible / sectionHeight : 0;
      if (visibleRatio > threshold && visible > maxVisible) {
        maxVisible = visible;
        newSection = section.name;
      }
    });

    // Debug logging for section visibility
    console.log('Section visibility:', sections.map(s => ({
      name: s.name,
      rect: s.el.getBoundingClientRect(),
      visible: Math.max(0, Math.min(s.el.getBoundingClientRect().bottom, viewportHeight) - Math.max(s.el.getBoundingClientRect().top, 0))
    })));
    console.log('Section changed to:', newSection);

    setActiveSection(prevSection => {
      if (newSection !== prevSection) {
        window.history.replaceState({}, '', newSection);
        return newSection;
      }
      return prevSection;
    });
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

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    // Initial check after DOM is ready
    setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [handleScroll]);

  return { activeSection, setActiveSection };
};
