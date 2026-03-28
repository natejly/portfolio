import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { useDarkMode } from '../context/DarkModeContext';

const MobileHeader = () => {
  const { isDarkMode } = useDarkMode();
  const socialIconSize = { height: 36, width: 36 };

  return (
    <div className={`lg:hidden w-full p-6 pb-0 transition-all duration-300 backdrop-blur-sm ${
      isDarkMode 
        ? 'bg-transparent text-white dark-mode' 
        : 'bg-[#fbf9f4]/80 text-[#14223a] light-mode'
    }`}>
      {/* Name and Description */}
      <div className="text-center profile-section mb-6">
        <h1 className="font-display text-4xl mb-2">Nate Ly</h1>
        <p className={`text-base leading-snug ${
          isDarkMode ? 'text-slate-400' : 'text-[#5e6778]'
        }`}>
          I'm passionate about building intelligent systems that solve real-world problems
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-[1rem] mb-6" aria-label="Social media">
        <SocialIcon 
          url="https://github.com/natejly" 
          style={socialIconSize}
          className="transition-transform duration-200 hover:scale-110"
          bgColor={isDarkMode ? "#3b82f6" : "#14223a"}
          fgColor="#ffffff"
          target="_blank"
        />
        <SocialIcon 
          url="https://www.linkedin.com/in/natejly/" 
          style={socialIconSize}
          className="transition-transform duration-200 hover:scale-110"
          bgColor={isDarkMode ? "#3b82f6" : "#14223a"}
          fgColor="#ffffff"
          target="_blank"
        />
        <SocialIcon 
          url="https://instagram.com/natejly" 
          style={socialIconSize}
          className="transition-transform duration-200 hover:scale-110"
          bgColor={isDarkMode ? "#3b82f6" : "#14223a"}
          fgColor="#ffffff"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default MobileHeader;
