import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

// Project Card Component
const ProjectCard = ({ 
  title,
  shortDescription,
  fullDescription,
  technologies,
  githubLink,
  liveLink,
  imageUrl
}) => {
  const { isDarkMode } = useDarkMode();
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border border-slate-600/30' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50'
    }`}>
      
      {/* Image Section */}
      {imageUrl && (
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`${title} preview`}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${
            isDarkMode 
              ? 'from-slate-800/60 via-transparent to-transparent' 
              : 'from-black/20 via-transparent to-transparent'
          }`} />
        </div>
      )}
      
      {/* Content Section */}
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h3>
            
            {/* External Link Arrow */}
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                View Project
              </span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          
          {/* Expand Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`ml-4 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              isDarkMode 
                ? 'bg-slate-600/50 text-slate-300 hover:bg-slate-600 hover:text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {isExpanded ? 'Less' : 'More'}
          </button>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className={`leading-relaxed transition-all duration-300 ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          } ${isExpanded ? 'text-sm sm:text-base' : 'text-sm sm:text-base'}`}>
            {isExpanded ? fullDescription : shortDescription}
          </p>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30' 
                  : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-slate-600/50 text-slate-200 border border-slate-500/30 hover:bg-slate-600 hover:text-white hover:border-slate-400' 
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

function Projects() {
  const { isDarkMode } = useDarkMode();
  
  const projects = [
    {
      title: "Portfolio Website",
      shortDescription: "A modern React portfolio with dark mode and smooth navigation.",
      fullDescription: "A responsive portfolio website built with React, Tailwind CSS, and Vite. Features include dark/light mode toggle, smooth scrolling navigation, mobile-optimized design, and dynamic routing. The site showcases projects and experience with a clean, professional interface that adapts to user preferences and screen sizes.",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "Vercel"],
      githubLink: "https://github.com/natejly/portfolio",
      liveLink: "https://your-portfolio.com",
    },
    {
      title: "Machine Learning Vision System",
      shortDescription: "Computer vision system for automated image processing and analysis.",
      fullDescription: "A comprehensive machine learning pipeline for computer vision tasks including image classification, object detection, and semantic segmentation. Built using TensorFlow and ONNX for model optimization, with C++ integration for high-performance inference. Includes custom data preprocessing, model training workflows, and deployment strategies for production environments.",
      technologies: ["TensorFlow", "ONNX", "C++", "Python", "Computer Vision", "DDPM", "U-Net"],
      githubLink: "https://github.com/natejly/ml-vision",
      liveLink: null,
    },
  ];

  return (
    <section id="projects" className="min-h-screen p-4 sm:p-6 pt-20 bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            A showcase of my latest work and technical expertise
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="w-full max-w-4xl grid gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;