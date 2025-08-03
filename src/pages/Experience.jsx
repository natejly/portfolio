import React from 'react';
import profileImage from '../assets/LyProfile-2.jpg';
import { useDarkMode } from '../context/DarkModeContext';

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
    <div className={`border rounded-xl p-6 w-full max-w-2xl mx-auto transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-2xl h-64 flex flex-col ${
      isDarkMode 
        ? 'bg-cream text-navy border-cream/30 hover:bg-white' 
        : 'bg-cream text-navy border-navy/30 hover:bg-white'
    }`}>
      {/* Header Section */}
      <div className="flex justify-between items-start gap-4 mb-6">
        {/* Title and Company */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base lg:text-lg font-semibold text-navy mb-1 truncate">
            {title}
          </h3>
          <p className="text-navy/70 text-sm truncate">
            {company}
          </p>
        </div>
        
        {/* Date Range and Location */}
        <div className="text-right flex-shrink-0">
          <div className="text-navy/70 text-sm font-medium tracking-wide uppercase whitespace-nowrap">
            {dateRange}
          </div>
          {location && (
            <p className="text-navy/70 text-sm mt-1 whitespace-nowrap">
              {location}
            </p>
          )}
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-4 flex-1">
        <p className="text-navy/80 leading-relaxed text-base line-clamp-3">
          {description}
        </p>
      </div>
      
      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-navy text-cream px-3 py-1 rounded-full text-sm font-medium hover:bg-blue transition-colors duration-150"
          >
            {skill}
          </span>
        ))}
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
      description: "stuff here",
      skills: ["TensorFlow", "ONNX", "C++", "Computer Vision", "DDPM", "U-Net"]
    },
    {
      dateRange: "MAY 2022 — AUG. 2024",
      title: "Software Development Intern",
      company: "The Donald Danforth Plant Science Center",
      location: "St. Louis, MO",
      description: "stuff here",
      skills: ["Python", "pytest", "CI/CD", "R", "3D Processing", "AR/VR"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen p-6 pt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Profile Image */}
        <img 
          src={profileImage} 
          alt="Profile" 
          className="w-[12rem] h-[12rem] object-cover rounded-[2rem] mx-auto mb-8 shadow-lg"
        />

        {/* Resume Cards */}
        <div className="w-full max-w-3xl flex flex-col gap-6">
          {experiences.map((experience, index) => (
            <ResumeCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;