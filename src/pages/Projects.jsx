import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

function P1() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <section id="projects" className="min-h-screen p-16 flex flex-col justify-center max-w-[1200px] mx-auto">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mt-8">
        <div className={`border rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(19,41,75,0.15)] ${
          isDarkMode 
            ? 'bg-cream border-cream/30 hover:bg-white text-navy' 
            : 'bg-cream border-navy/30 hover:bg-white text-navy'
        }`}>
          <h3 className="text-xl font-semibold mb-4 text-navy">Project</h3>
          <p className="text-navy/80 mb-6">
            Desc
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue/10 text-navy px-3 py-1 rounded-full text-sm font-medium">Technologies</span>

          </div>
          <div className="flex gap-4">
            <a href="#" className="px-4 py-2 rounded-lg no-underline font-medium transition-all duration-200 bg-blue text-white hover:bg-navy">Live Demo</a>
            <a href="#" className="px-4 py-2 rounded-lg no-underline font-medium transition-all duration-200 border border-blue text-navy hover:bg-blue/10">GitHub</a>
          </div>
        </div>

        

        <div className={`border rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(19,41,75,0.15)] ${
          isDarkMode 
            ? 'bg-cream border-cream/30 hover:bg-white text-navy' 
            : 'bg-cream border-navy/30 hover:bg-white text-navy'
        }`}>
          <h3 className="text-xl font-semibold mb-4 text-navy">other project</h3>
          <p className="text-navy/80 mb-6">
            desc here
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue/10 text-navy px-3 py-1 rounded-full text-sm font-medium">technology</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="px-4 py-2 rounded-lg no-underline font-medium transition-all duration-200 bg-blue text-white hover:bg-navy">Live Demo</a>
            <a href="#" className="px-4 py-2 rounded-lg no-underline font-medium transition-all duration-200 border border-blue text-navy hover:bg-blue/10">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default P1
