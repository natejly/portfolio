import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useDarkMode } from '../context/DarkModeContext';

const Sidebar = ({ activeSection, onNavigate }) => {
  const { isDarkMode } = useDarkMode();
  
  const socialIconSize = { height: 36, width: 36 };

  const navigationItems = [
    { id: '/', label: 'Experience', targetId: 'experience' },
    { id: '/projects', label: 'Projects', targetId: 'projects' },
    { id: '/contact', label: 'Contact', targetId: 'contact' }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    
    // Always try to scroll to the actual element first
    const element = document.getElementById(item.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (item.targetId === 'experience') {
      // Fallback for experience section - scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    onNavigate(item.id);
  };

  return (
    <div className={`fixed left-[10vw] top-0 w-[40vw] pt-8 sm:pt-25 h-screen pl-10 pr-40 flex flex-col hidden lg:flex transition-all duration-300 backdrop-blur-sm ${
      isDarkMode 
        ? 'bg-transparent text-white dark-mode' 
        : 'bg-white/80 text-gray-900 light-mode'
    }`}>
      {/* Profile Section */}
      <div className="text-left profile-section">
        <h1>Nate Ly</h1>
        <p className={`text-base leading-snug ${
          isDarkMode ? 'text-slate-400' : 'text-gray-600'
        }`}>
          I'm passionate about building intelligent systems that solve real-world problems
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-[3rem]" aria-label="In-page jump links">
        <ul className="list-none p-0 m-0">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.targetId}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`group flex items-center py-3 no-underline ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                <span className="nav-text">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="mt-auto mb-[10rem] flex items-center gap-[1rem]" aria-label="Social media">
        <SocialIcon 
          url="https://github.com/natejly" 
          style={socialIconSize}
          className="transition-transform duration-200 hover:scale-125"
          bgColor={isDarkMode ? "#3b82f6" : "#1f2937"}
          fgColor="#ffffff"
          target="_blank"
        />
        <SocialIcon 
          url="https://www.linkedin.com/in/natejly/" 
          style={socialIconSize}
          className="transition-transform duration-200 hover:scale-125"
          bgColor={isDarkMode ? "#3b82f6" : "#1f2937"}
          fgColor="#ffffff"
          target="_blank"
        />
        <SocialIcon 
          url="https://instagram.com/natejly" 
          style={socialIconSize}
          className="transition-transform duration-200 hover:scale-125"
          bgColor={isDarkMode ? "#3b82f6" : "#1f2937"}
          fgColor="#ffffff"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Sidebar;