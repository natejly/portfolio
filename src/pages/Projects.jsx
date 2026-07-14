import React, { useState } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import octImage from '../assets/oct.png';
import rowingImage from '../assets/rowing.png';
import sloImage from '../assets/SLO.png';
import ehrPipelineImage from '../assets/EHR-Pipeline-Diagram.png';
import predictionMarketsImage from '../assets/Prediction-Markets-Identifiability.png';

// Load videos from GitHub LFS instead of local imports
const trackingVideo = 'https://media.githubusercontent.com/media/natejly/portfolio/main/src/assets/TrackingCompilation.mp4';
const golfVideo = 'https://media.githubusercontent.com/media/natejly/portfolio/main/src/assets/GOLF.mp4';
// Project Card Component
const ProjectCard = ({
  title,
  shortDescription,
  fullDescription,
  githubLink,
  paperLink,
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
      className={`group relative overflow-hidden rounded-lg transition-all duration-300 ease-out transform hover:-translate-y-0.5 ${hasExpandableContent ? 'cursor-pointer' : ''} ${
        isDarkMode 
          ? 'bg-slate-800/90 border border-slate-600/40 hover:border-slate-500/60 shadow-xl hover:shadow-lg' 
          : 'bg-[#fefdfb] border border-[#d8dde9] hover:border-[#8ea7ef] shadow-md hover:shadow-lg'
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
            ? 'bg-gradient-to-br from-blue-300/10 to-transparent' 
            : 'bg-gradient-to-br from-[#8ea7ef]/20 to-transparent'
        }`} />
      </div>
      
      {/* Content Section */}
      <div className="relative p-8 sm:p-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex-1">
            <h3 className={`text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-white group-hover:text-blue-200' : 'text-[#14223a] group-hover:text-[#506fc6]'
            } font-display`}>
              {title}
            </h3>
          </div>
          {/* Place developed badge */}
          {placeDeveloped && (
            <div className={`inline-flex items-center px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/40 text-slate-400 group-hover:text-slate-300' 
                : 'bg-[#edf2ff] text-[#5e6778] group-hover:text-[#14223a]'
            } font-body eyebrow-text`}>
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
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                loading="lazy"
                className="w-full h-auto object-cover transition-all duration-300"
                onClick={e => e.stopPropagation()}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Mobile: show video directly instead of image preview */}
            <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden sm:hidden">
              <video 
                controls 
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                loading="lazy"
                className="w-full h-auto object-cover transition-all duration-300"
                onClick={e => e.stopPropagation()}
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : imageUrl ? (
          <div className="mb-6">
            <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt={`${title} preview`}
                className="w-full h-auto object-cover transition-all duration-300"
                loading="lazy"
                onClick={e => e.stopPropagation()}
              />
            </div>
          </div>
        ) : null}
        
        {/* Expand indicator - only show if expandable and positioned right before description */}
        {hasExpandableContent && (
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-sm font-medium transition-colors duration-300 ${
              isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-[#5e6778] group-hover:text-[#14223a]'
            } font-body`}>
              {isExpanded ? 'Click to collapse' : 'Click to learn more'}
            </span>
            <svg 
              className={`w-4 h-4 transition-all duration-300 ${
                isExpanded ? 'rotate-180' : ''
              } ${isDarkMode ? 'text-slate-400 group-hover:text-slate-300' : 'text-[#5e6778] group-hover:text-[#14223a]'}`}
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
              isDarkMode ? 'text-slate-300' : 'text-[#5e6778]'
            } text-sm sm:text-base`}>
              {fullDescription.split('\n').map((line, idx) => (
                <li key={idx} className="mb-3 whitespace-pre-line">{line.replace(/^•\s*/, '')}</li>
              ))}
            </ul>
          ) : (
            <p className={`leading-relaxed transition-all duration-300 ${
              isDarkMode ? 'text-slate-300' : 'text-[#5e6778]'
            } text-sm sm:text-base`}>
              {shortDescription}
            </p>
          )}
        </div>
        
        {/* Resource buttons */}
        {(paperLink || githubLink) && (
          <div className="flex items-center justify-end gap-2 mt-8">
              {paperLink && (
                <a
                  href={paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    isDarkMode
                      ? 'bg-slate-600/50 text-slate-200 border border-slate-500/30 hover:bg-slate-600/70 hover:text-white hover:border-slate-400'
                      : 'bg-[#fefdfb] text-[#14223a] border border-[#d8dde9] hover:bg-white hover:border-[#8ea7ef]'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 3h7l5 5v13H7V3zm7 0v5h5M10 13h6m-6 4h6" />
                  </svg>
                  Paper
                </a>
              )}
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    isDarkMode 
                      ? 'bg-slate-600/50 text-slate-200 border border-slate-500/30 hover:bg-slate-600/70 hover:text-white hover:border-slate-400' 
                      : 'bg-[#fefdfb] text-[#14223a] border border-[#d8dde9] hover:bg-white hover:border-[#8ea7ef]'
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              )}
          </div>
        )}
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
      fullDescription: "• Developed a robust pupil tracking pipeline using OpenCV, classical image processing, and CNN segmentation.\n• Implemented coarse localization, multi-threshold segmentation, contour extraction, ellipse regression, and temporal smoothing.\n• Trained a scaled-down SegNet CNN on 550k augmented image-mask pairs for direct pupil segmentation.\n• Benchmarked model performance, reducing localization error by 53% and increasing speed by 1.7x to 60+ FPS",
      technologies: ["OpenCV", "TensorFlow", "ONNX", "Computer Vision", "Lime", "Python", "C++"],
      videoUrl: trackingVideo,
      placeDeveloped: "Kodiak Sciences",
    },

    {
      title: "Reliable EHR Summarization",
      shortDescription: "Evidence-grounded LLM pipeline that creates faithful clinician- and patient-facing summaries from clinical notes and structured EHR data.",
      fullDescription: "• Built a nine-stage pipeline that parses clinical notes and FHIR R4 data into a shared evidence store before summary generation\n• Extracted and verified clinical claims against structured records, allowing the generator to use only pre-verified facts\n• Added deterministic gates for uncited assertions, fabricated evidence identifiers, numeric drift, and medication errors\n• Outperformed a single-shot Claude Opus 4.7 baseline on ROUGE-1 (0.290 vs 0.130), ROUGE-L (0.187 vs 0.071), BERTScore F1 (0.813 vs 0.793), and clinical entity recall (0.377 vs 0.151) while producing more concise summaries across 100 MIMIC-III cases",
      technologies: ["Python", "LLMs", "FHIR R4", "Ollama", "Gemma", "Clinical NLP", "MIMIC-III"],
      githubLink: "https://github.com/natejly/EHR-Summary",
      paperLink: "https://media.githubusercontent.com/media/natejly/portfolio/main/src/assets/Reliable-EHR-Summarization.pdf",
      imageUrl: ehrPipelineImage,
      placeDeveloped: "Yale University",
    },

    {
      title: "Prediction Markets as Bayesian Inverse Models",
      shortDescription: "Dynamic price-volume models and empirical analysis of Bayesian outcome inference on real prediction-market data.",
      fullDescription: "• Extended a Bayesian inverse framework by modeling prediction-market price and volume histories as a jointly Markov process\n• Designed reversal, momentum, burst, and volume-gated likelihood models with Sequential Monte Carlo inference\n• Tested the models on 1,000 resolved Polymarket markets and analyzed accuracy, calibration, Brier score, and posterior overconfidence\n• Validated posterior concentration and identifiability guarantees through synthetic experiments across multiple time horizons",
      technologies: ["Bayesian Inference", "Sequential Monte Carlo", "Markov Models", "Python", "SciPy", "Polymarket"],
      githubLink: "https://github.com/natejly/pred-mkts-dynamic-price-volume",
      paperLink: "https://media.githubusercontent.com/media/natejly/portfolio/main/src/assets/Prediction-Markets-Bayesian-Inverse-Models.pdf",
      imageUrl: predictionMarketsImage,
      placeDeveloped: "Yale University",
    },

    {
      title: "Retina Vessel Detection",
      shortDescription: "Real-time detection of SLO vessels in OCT images using deep learning.",
      fullDescription: "• Developed a deep learning model for real-time detection of SLO vessels in OCT images.\n• Utilized U-Net architecture with data augmentation techniques to improve segmentation accuracy.\n• Achieved state-of-the-art performance on benchmark datasets, significantly reducing false positive rates.",
      technologies: ["TensorFlow", "Keras", "U-Net", "OCT", "Image Segmentation"],
      imageUrl: sloImage,
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
      fullDescription: "• Designed a cellular automaton simulation to evolve MCTS agents for Cribbage pegging through self-play\n• Optimized MCTS parameters (UCT constant, rollouts, depth, backpropagation) via evolutionary algorithms\n• Leveraged multiprocessing to parallelize self-play and rollouts to accelerate training",
      technologies: ["Evolutionary Strategies", "Genetic Algorithms", "Multithreading"],
      githubLink: "https://github.com/natejly/life",
      videoUrl: golfVideo,
      placeDeveloped: "Yale University",
    },

    {
      title: "Reddit Sentiment Trading Backtester",
      shortDescription: "Pipeline for scraping Reddit investing threads, extracting ticker sentiment, and backtesting a sentiment-driven long/short strategy.",
      fullDescription: "• Scraped Daily Discussion and WallStreetBets discussion threads to build a dated corpus of ticker mentions and comment sentiment\n• Classified Reddit text with VADER sentiment analysis augmented by a WallStreetBets-specific lexicon\n• Backtested a sentiment-driven long/short strategy using historical market data from yfinance across multiple holding periods\n• Built notebook-based analysis tooling to inspect corpora, trades, and backtest performance summaries",
      technologies: ["Python", "Pandas", "NumPy", "yfinance", "VADER", "Reddit Scraping", "Sentiment Analysis", "Backtesting"],
      githubLink: "https://github.com/natejly/LingFinal",
      placeDeveloped: "Yale University",
    },

    {
      title: "Rowing Speed Predictor",
      shortDescription: "Neural network using PyTorch to predict rowing speed from oarlock telemetry data.",
      fullDescription: "• Built a neural network using PyTorch to predict rowing speed from oarlock telemetry data.\n• Filtered low-quality strokes to reduce noise and engineered rowing-specific features to improve convergence.\n• Tuned learning rate and weight decay, achieving <1% MAPE (equivalent to <1s error over 500m).",
      technologies: ["PyTorch", "Neural Networks", "Feature Engineering", "Python"],
      githubLink: "https://github.com/natejly/rowing-speed-predictor",
      imageUrl: rowingImage,
      placeDeveloped: "Yale University",

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
            isDarkMode ? 'text-white' : 'text-[#14223a]'
          } font-display`}>
            Featured Projects
          </h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-slate-400' : 'text-[#5e6778]'
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
