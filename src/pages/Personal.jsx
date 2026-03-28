import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function P2() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <section id="contact" className="min-h-screen ml-7 pt-8 pb-4 flex flex-col text-center justify-start max-w-[1200px] mx-auto">
      <div className={`transition-colors duration-300 ${
        isDarkMode ? 'text-cream' : 'text-[#14223a]'
      } text-xl font-medium font-body`}>
        I can be reached at <a href="mailto:natejly@gmail.com" className={isDarkMode ? 'text-blue-400 underline' : 'text-[#506fc6] underline'}>natejly@gmail.com</a>
      </div>
      <div className="flex-grow" />
      <footer className={`mb-2 text-center text-sm ${isDarkMode ? 'text-slate-400' : 'text-[#5e6778]'}`}>
        Website built with React, Vite, and Tailwind CSS &mdash; Deployed with Vercel
      </footer>
    </section>
  )
}

export default P2
