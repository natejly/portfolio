import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function P2() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <section id="contact" className="min-h-screen p-16 flex flex-col justify-center max-w-[1200px] mx-auto">
      <div className={`transition-colors duration-300 ${
        isDarkMode ? 'text-cream' : 'text-black'
      }`}>
        hello!!
      </div>
    </section>
  )
}

export default P2