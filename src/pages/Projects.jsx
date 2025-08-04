import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import octImage from '../assets/oct.png';
import rowingImage from '../assets/rowing.png';
// Project Card Component
const ProjectCard = ({
  title,
  shortDescription,
  fullDescription,
  technologies,
  githubLink,
  imageUrl,
  videoUrl,
  placeDeveloped,
  index
}) => {
  const { isDarkMode } = useDarkMode();
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Only show expand functionality if there's a fullDescription
  const hasExpandableContent = fullDescription && fullDescription !== shortDescription;
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-lg transition-all duration-500 ease-out transform hover:scale-[1.02] hover:-translate-y-2 ${hasExpandableContent ? 'cursor-pointer' : ''} ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-800/90 via-slate-800/70 to-slate-900/90 border border-slate-600/40 hover:border-blue-400/50 shadow-2xl hover:shadow-blue-500/20' 
          : 'bg-gradient-to-br from-white via-gray-50/80 to-white border border-gray-200/60 hover:border-blue-300/60 shadow-xl hover:shadow-2xl hover:shadow-blue-100/50'
      }`}
      style={{
        animationDelay: `${index * 0.2}s`
      }}
      onClick={hasExpandableContent ? () => setIsExpanded(!isExpanded) : undefined}
    >
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-purple-400/10 to-transparent' 
            : 'bg-gradient-to-br from-purple-500/10 to-transparent'
        }`} />
      </div>
      
      {/* Content Section */}
      <div className="relative p-8 sm:p-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <h3 className={`text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-300 group-hover:scale-105 ${
              isDarkMode ? 'text-white group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-700'
            }`}>
              {title}
            </h3>
          </div>
          {/* Place developed badge */}
          {placeDeveloped && (
            <div className={`inline-flex items-center px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/40 text-slate-400 group-hover:text-slate-300' 
                : 'bg-gray-100/60 text-gray-600 group-hover:text-gray-700'
            }`}>
              <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              {placeDeveloped}
            </div>
          )}
        </div>
        
        {/* Video or Image - now shown by default */}
        {videoUrl ? (
          <div className="mb-6">
            {/* Desktop: show video */}
            <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden hidden sm:block">
              <video 
                controls 
                {...(window.innerWidth >= 640 ? { autoPlay: true } : {})}
                muted
                loop
                playsInline
                className="w-full h-auto object-cover transition-all duration-300"
                onClick={e => e.stopPropagation()}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Mobile: show image preview */}
            <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden sm:hidden">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={`${title} preview`}
                  className="w-full h-auto object-cover transition-all duration-300"
                  onClick={e => e.stopPropagation()}
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500 text-lg">Video Preview</div>
              )}
            </div>
          </div>
        ) : imageUrl ? (
          <div className="mb-6">
            <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={`${title} preview`}
                className="w-full h-auto object-cover transition-all duration-300"
                onClick={e => e.stopPropagation()}
              />
            </div>
          </div>
        ) : null}
        
        {/* Expand indicator - only show if expandable and positioned right before description */}
        {hasExpandableContent && (
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-gray-600 group-hover:text-gray-700'
            }`}>
              {isExpanded ? 'Click to collapse' : 'Click to learn more'}
            </span>
            <svg 
              className={`w-4 h-4 transition-all duration-300 ${
                isExpanded ? 'rotate-180' : ''
              } ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-gray-600 group-hover:text-gray-700'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
        
        {/* Description */}
        <div className="mb-6">
          {hasExpandableContent && isExpanded ? (
            <ul className={`list-disc ml-6 transition-all duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-gray-600'
            } text-sm sm:text-base`}>
              {fullDescription.split('\n').map((line, idx) => (
                <li key={idx} className="mb-3 whitespace-pre-line">{line.replace(/^•\s*/, '')}</li>
              ))}
            </ul>
          ) : (
            <p className={`leading-relaxed transition-all duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-gray-600'
            } text-sm sm:text-base`}>
              {shortDescription}
            </p>
          )}
        </div>
        
        {/* Technologies */}
        <div className={`flex items-center gap-2 mb-2 text-sm font-medium ${
          isDarkMode ? 'text-slate-400' : 'text-gray-600'
        }`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span>Skills & Technologies</span>
        </div>
        <div className={`flex flex-wrap gap-2 ${githubLink ? 'mb-10' : 'mb-4'}`}>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:-translate-y-0.5 cursor-default ${
                isDarkMode 
                  ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/25 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20' 
                  : 'bg-blue-50 text-blue-800 border border-blue-200/60 hover:bg-blue-100 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {tech}
            </span>
          ))}
          
          {/* GitHub button in bottom right */}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
              className={`ml-auto mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm absolute bottom-6 right-6 ${
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
        </div>
      </div>
    </div>
  );
};
function Projects() {
  const { isDarkMode } = useDarkMode();
  
  const projects = [

    {
      title: "Pupil Tracking",
      shortDescription: "Robust pupil tracking pipeline using OpenCV and classical image processing to label data for CNN segmentation.",
      fullDescription: "• Developed a robust pupil tracking pipeline using OpenCV, classical image processing, and CNN segmentation.\n• Implemented multi-threshold segmentation, contour extraction, ellipse regression, and temporal smoothing.\n• Trained a scaled-down SegNet CNN on 550k augmented image-mask pairs for direct pupil segmentation.\n• Benchmarked model performance, reducing localization error 1.9x and increasing speed 1.7x to 60+ FPS",
      technologies: ["OpenCV", "TensorFlow", "ONNX", "Computer Vision", "Lime", "Python", "C++"],
      videoUrl: "https://portfolionatejly.s3.us-east-2.amazonaws.com/TrackingCompilation.mp4",
      placeDeveloped: "Kodiak Sciences",
    },
    {
      title: "Retina Vessel Detection",
      shortDescription: "Real-time detection of SLO vessels in OCT images using deep learning.",
      fullDescription: "• Developed a deep learning model for real-time detection of SLO vessels in OCT images.\n• Utilized U-Net architecture with data augmentation techniques to improve segmentation accuracy.\n• Achieved state-of-the-art performance on benchmark datasets, significantly reducing false positive rates.",
      technologies: ["TensorFlow", "Keras", "U-Net", "OCT", "Image Segmentation"],
      placeDeveloped: "Kodiak Sciences",
    },

    {
      title: "Retina Image Denoising",
      shortDescription: "TensorFlow-based pipeline for denoising Optical Coherence Tomography (OCT) images using DDPMs.",
      fullDescription: "• Implemented a TensorFlow-based pipeline for denoising Optical Coherence Tomography (OCT) images using DDPMs.\n• Built a U-Net model with sinusoidal timestep embedding, residual and attention blocks, and group normalization.\n• Trained the model to iteratively remove Gaussian noise and recover clean images from noisy samples.\n• Achieved strong denoising performance and visualized the process at different timesteps.",
      technologies: ["TensorFlow", "Diffusion Models", "U-Net", "OCT", "DDPM", "Image Denoising"],
      imageUrl: octImage,
      placeDeveloped: "Kodiak Sciences",

    },


    {
      title: "Monte Carlo Tree Search Parameter Tuning",
      shortDescription: "Cellular automaton-inspired simulation to evolve MCTS agents via self-play in Cribbage pegging.",
      fullDescription: "• Designed a cellular automaton-inspired simulation to evolve MCTS agents via self-play in Cribbage pegging.\n• Incorporated reinforcement learning principles with evolutionary strategies and genetic mutation.\n• Evolved UCT constants, rollout counts, search depths, and backpropagation weights.\n• Leveraged multithreading to parallelize self-play simulations and MCTS rollouts.",
      technologies: ["Reinforcement Learning", "Evolutionary Strategies", "Genetic Algorithms", "Multithreading"],
      githubLink: "https://github.com/natejly/life",
      videoUrl: "https://portfolionatejly.s3.us-east-2.amazonaws.com/GOLF.mp4",
      placeDeveloped: "School Project",
    },
    {
      title: "Rowing Speed Predictor",
      shortDescription: "Neural network using PyTorch to predict rowing speed from oarlock telemetry data.",
      fullDescription: "• Built a neural network using PyTorch to predict rowing speed from oarlock telemetry data.\n• Filtered low-quality strokes to reduce noise and engineered rowing-specific features to improve convergence.\n• Tuned learning rate and weight decay, achieving <1% MAPE (equivalent to <1s error over 500m).",
      technologies: ["PyTorch", "Neural Networks", "Feature Engineering", "Python"],
      githubLink: "https://github.com/natejly/rowing-speed-predictor",
      imageUrl: rowingImage,
      placeDeveloped: "School Project",

    },
//     {
//       title: "Algorithmic Trader",
//       shortDescription: "Automated pairs trading strategy for cointegrated stocks.",
//       fullDescription:
//         "• Developed an automated pairs trading strategy using OLS and ADF tests to identify cointegrated stock pairs.\n" +
//         "• Generated buy/sell signals based on a rolling window of z-score deviations and stationarity checks.\n" +
//         "• Implemented a backtesting framework using historical stock data from YFinance API.",
//       technologies: ["Python", "Finance", "Backtesting", "YFinance", "Statistics"],
//       githubLink: "https://github.com/natejly/algotrader",
//       placeDeveloped: "Personal Project",
//     },
//     {
//       title: "Batch Mesh Reduction Tool",
//       shortDescription: "Tool for batch processing and reducing mesh complexity in 3D models",
// fullDescription:
//         "• Engineered a Python-based batch mesh‐processing tool leveraging pyfqmr, Trimesh, and Polyscope to automate complexity reduction workflows.\n" +
//         "• Developed advanced decimation and simplification algorithms achieving up to 60× polygon‐count reduction while preserving geometric fidelity for optimized AR/VR performance.\n" +
//         "• Built a Tkinter GUI supporting both single‐file and folder‐level batch operations for streamlined asset processing.\n" +
//         "• Integrated interactive visualization of original, decimated, and smoothed meshes to accelerate quality assurance.",
//       technologies: ["Mesh Processing", "3D Modeling", "Python", "Tkinter"],
//       placeDeveloped: "Danforth Plant Science Center",
//       githubLink: "https://github.com/natejly/MeshTool"
//     }

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