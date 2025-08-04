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
        // Find the entry with the largest intersection ratio
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio and position to prioritize the most visible section
          const mostVisible = visibleEntries.sort((a, b) => {
            // Prioritize by intersection ratio first
            const ratioComparison = b.intersectionRatio - a.intersectionRatio;
            if (Math.abs(ratioComparison) > 0.1) return ratioComparison;
            
            // If ratios are similar, prioritize the one that's more centered in viewport
            const aCenter = a.boundingClientRect.top + a.boundingClientRect.height / 2;
            const bCenter = b.boundingClientRect.top + b.boundingClientRect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            
            return Math.abs(aCenter - viewportCenter) - Math.abs(bCenter - viewportCenter);
          })[0];
          
          const newSection = pathMap[mostVisible.target.id];
          setActiveSection(prev => {
            if (prev !== newSection) {
              window.history.replaceState({}, '', newSection);
              return newSection;
            }
            return prev;
          });
        }
      },
      { 
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sections.forEach(({ el }) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return { activeSection, setActiveSection };
};
