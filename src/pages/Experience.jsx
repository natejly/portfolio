import React from 'react';
import profileImage from '../assets/LyProfile-2.jpg';

// Resume Card Component
const ResumeCard = ({ 
  dateRange,
  title,
  company,
  location,
  description,
  skills
}) => {
  return (
    <div className="bg-cream text-navy shadow-xl rounded-2xl p-6 max-w-2xl mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-navy/20">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-4 mb-6">
        {/* Date Range */}
        <div className="text-navy/70 text-sm font-medium tracking-wide uppercase min-w-fit">
          {dateRange}
        </div>
        
        {/* Title, Company, and Location */}
        <div className="flex-1">
          <h3 className="text-lg lg:text-xl font-semibold text-navy mb-1">
            {title} · {company}
            <span className="ml-2 text-blue">↗</span>
          </h3>
          {location && (
            <p className="text-navy/70 text-sm mb-2">
              {location}
            </p>
          )}
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-6">
        <p className="text-navy/80 leading-relaxed text-base">
          {description}
        </p>
      </div>
      
      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-navy text-cream px-3 py-1 rounded-full text-sm font-medium hover:bg-blue transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

function Experience() {
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
    <section id="about" className="min-h-screen p-6 pt-20">
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