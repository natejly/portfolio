import React from 'react';
import profileImage from '../assets/LyProfile-2.jpg';
import { useDarkMode } from '../context/DarkModeContext';
import MobileHeader from '../components/MobileHeader';

// Resume Card Component
const ResumeCard = ({ 
  dateRange,
  title,
  company,
  location,
  description,
  skills,
  index
}) => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div 
      className={`relative rounded-lg transition-all duration-200 hover:shadow-md ${
        isDarkMode 
          ? 'bg-slate-800 border border-slate-700 hover:border-slate-600' 
          : 'bg-white border border-gray-200 hover:border-gray-300'
      }`}
    >
      
      {/* Timeline Indicator */}
      <div className={`absolute left-0 top-0 w-1 h-full rounded-2xl${
        isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
      }`} />
      
      {/* Content Section */}
      <div className="p-6 sm:p-8 ml-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
          <div className="flex-1">
            <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <h4 className={`text-lg font-semibold ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {company}
              </h4>
            </div>
          </div>
          
          {/* Date Range and Location */}
          <div className="lg:text-right space-y-2">
            <div className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-medium ${
              isDarkMode 
                ? 'bg-slate-700 text-slate-200' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {dateRange}
            </div>
            {location && (
              <div className={`flex items-center justify-end gap-1 text-sm ${
                isDarkMode ? 'text-slate-400' : 'text-gray-600'
              }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </div>
            )}
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className={`leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-gray-700'
          }`}>
            {description}
          </p>
        </div>
        
        {/* Skills */}
        <div className="space-y-3">
          <div className={`text-sm font-medium ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            Skills & Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`px-3 py-1 rounded-md text-sm ${
                  isDarkMode 
                    ? 'bg-slate-700 text-slate-300' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


function Experience() {
  const { isDarkMode } = useDarkMode();
  
  const experiences = [
    {
      dateRange: "JUN. 2025 — AUG. 2025",
      title: "Machine Learning Intern",
      company: "Kodiak Sciences Inc.",
      location: "Palo Alto, CA",
      description: "Developing deep learning models for cleaning and segmenting retinal images. Designed robust pupil-tracking algorithm to handle occlusions and reflections during retinal imaging.",
      skills: ["TensorFlow", "ONNX", "C++", "Computer Vision", "Deep Learning", "OpenCV", "Segmentation"]
    },
    {
      dateRange: "MAY 2022 — AUG. 2024",
      title: "Software Development Intern",
      company: "The Donald Danforth Plant Science Center",
      location: "St. Louis, MO",
      description: "Developed analysis and mesh simplification modules, resolving 150+ code issues via CI/CD best practices. Ensured 100% test coverage with pytest and Codecov.",
      skills: ["Python", "pytest", "CI/CD", "Codecov", "R", "3D Processing", "AR/VR", "Mesh Simplification"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen p-4 sm:p-6 pt-20 bg-transparent">
      {/* Mobile Header - only visible on small screens */}
      <MobileHeader />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Profile Image */}
        <div className="relative mb-12">
          <div className={`absolute inset-0 rounded-[2.5rem] ${
          isDarkMode
            ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
            : 'bg-gradient-to-r from-blue-500 to-pink-500'
          } blur-lg opacity-20 scale-110`} />
          <img 
            src={profileImage}
            alt="Profile"
            className="relative w-[14rem] sm:w-[24rem] h-[14rem] sm:h-[16rem] object-cover rounded-[2rem] mx-auto shadow-2xl ring-4 ring-white/10"
          />
        </div>
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-slate-400' : 'text-gray-600'
          }`}>
            My journey in software development and machine learning
          </p>
        </div>



        {/* Experience Timeline */}
        <div className="w-full max-w-4xl space-y-8 sm:space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline connector line (except for last item) */}
              {index < experiences.length - 1 && (
                <div className={`absolute left-6 top-full w-0.5 h-12 ${
                  isDarkMode ? 'bg-slate-600' : 'bg-gray-300'
                } transform translate-y-0`} />
              )}
              
              {/* Timeline dot */}
              <div className={`absolute left-4 top-8 w-4 h-4 rounded-full border-4 ${
                isDarkMode 
                  ? 'bg-blue-400 border-slate-800' 
                  : 'bg-blue-600 border-white'
              } shadow-lg z-10`} />
              
              {/* Experience card with left margin for timeline */}
              <div className="ml-12">
                <ResumeCard {...experience} />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-200 ${
            isDarkMode 
              ? 'bg-blue-600 text-white hover:bg-blue-500' 
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}>
            <span className="font-medium">View Full Resume</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-6 12H8a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;