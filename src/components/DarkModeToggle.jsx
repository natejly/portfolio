import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Sun icon (light mode)
  const SunIcon = () => (
    <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
  );

  // Moon icon (dark mode)
  const MoonIcon = () => (
    <svg className="w-4 h-4 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );

  return (
    <div className="absolute top-6 right-6 z-50 flex items-center gap-3">
      {/* Icon indicator */}
      <div className="flex items-center justify-center w-8 h-8">
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </div>
      
      {/* Toggle switch */}
      <button
        onClick={toggleDarkMode}
        className={`
          relative inline-flex items-center h-6 rounded-full w-11 
          transition-colors duration-200 ease-in-out focus:outline-none 
          focus:ring-offset-2 border-2
          ${isDarkMode ? 'bg-slate-600 border-slate-500' : 'bg-gray-200 border-gray-300'}
        `}
        aria-label="Toggle dark mode"
      >
        <span
          className={`
            inline-block w-4 h-4 transform transition-transform duration-200 ease-in-out 
            rounded-full shadow-lg
            ${isDarkMode ? 'translate-x-5 bg-blue-400' : 'translate-x-1 bg-white'}
          `}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;