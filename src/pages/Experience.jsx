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
  skills
}) => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border border-slate-600/30' 
        : 'bg-gradient-to-br from-white via-gray-50 to-white border border-gray-200/50'
    }`}>
      
      {/* Timeline Indicator */}
      <div className={`absolute left-0 top-0 w-1 h-full ${
        isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
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
              {location && (
                <>
                  <span className={`${isDarkMode ? 'text-slate-400' : 'text-gray-400'}`}>•</span>
                  <span className={`text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {location}
                  </span>
                </>
              )}
            </div>
          </div>
          
          {/* Date Range Badge */}
          <div className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            isDarkMode 
              ? 'bg-slate-600/50 text-slate-300 border border-slate-500/30' 
              : 'bg-blue-50 text-blue-700 border border-blue-200'
          }`}>
            {dateRange}
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <p className={`leading-relaxed text-sm sm:text-base ${
            isDarkMode ? 'text-slate-300' : 'text-gray-600'
          }`}>
            {description}
          </p>
        </div>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30' 
                  : 'bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100'
              }`}
            >
              {skill}
            </span>
          ))}
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
      description: "Developing advanced machine learning models for medical imaging and computer vision applications",
      skills: ["TensorFlow", "ONNX", "C++", "Computer Vision", "DDPM", "U-Net"]
    },
    {
      dateRange: "MAY 2022 — AUG. 2024",
      title: "Software Development Intern",
      company: "The Donald Danforth Plant Science Center",
      location: "St. Louis, MO",
      description: "Built robust software solutions for plant science research, implementing CI/CD pipelines and developing 3D processing algorithms. Created AR/VR applications for data visualization and collaborated on cross-functional research projects.",
      skills: ["Python", "pytest", "CI/CD", "R", "3D Processing", "AR/VR"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen p-4 sm:p-6 pt-20 bg-transparent">
      {/* Mobile Header - only visible on small screens */}
      <MobileHeader />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center">
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

        {/* Profile Image */}
        <div className="relative mb-12">
          <div className={`absolute inset-0 rounded-[2.5rem] ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-500 to-purple-600' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-600'
          } blur-lg opacity-20 scale-110`} />
          <img 
            src={profileImage} 
            alt="Profile" 
            className="relative w-[10rem] sm:w-[12rem] h-[10rem] sm:h-[12rem] object-cover rounded-[2rem] mx-auto shadow-2xl ring-4 ring-white/10"
          />
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
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${
            isDarkMode 
              ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/25' 
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25'
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