import { useEffect, useState } from 'react';

/**
 * Track the section currently visible in the viewport and update the
 * browser URL so the sidebar can highlight the active link. The previous
 * implementation relied on manual scroll calculations which proved
 * unreliable, leaving the navigation stuck on the first section. This
 * version uses the built-in IntersectionObserver API for accurate
 * visibility detection.
 */
export const useScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('/');

  useEffect(() => {
    const sectionIds = ['experience', 'projects', 'contact'];
    const pathMap = {
      experience: '/',
      projects: '/projects',
      contact: '/contact'
    };

    const sections = sectionIds
      .map(id => ({ id, el: document.getElementById(id) }))
      .filter(s => s.el);

    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const newSection = pathMap[entry.target.id];
            setActiveSection(prev => {
              if (prev !== newSection) {
                window.history.replaceState({}, '', newSection);
                return newSection;
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ el }) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return { activeSection, setActiveSection };
};
