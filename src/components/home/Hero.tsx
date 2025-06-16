import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#F6FBE9] py-12 md:py-16 px-4 md:px-8 lg:px-20 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 md:space-y-6">
          <span className="text-xs uppercase font-medium text-[#468671] tracking-wider">Transform Your Fitness Journey with</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3129] leading-tight">
            Smart AI for Home Workout Tracking
          </h1>
          <p className="text-[#333] text-sm md:text-[15px]">
            Welcome to Arthlete , your intelligent training companion that helps you move better, grow stronger, and stay consistent. Whether you're at home, school, or on the go, our motion-tracking AI guides you with real-time feedback, personalized assessments, and progress tracking — all designed to make fitness fun, smart, and effective.
          </p>
          <div className="flex gap-4">
            <a href="https://forms.gle/RHsTMRrQkHoToqxXA" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FE5F20] text-white px-4 md:px-6 py-2 md:py-3 rounded-md font-semibold hover:bg-[#e55419] transition-colors flex items-center gap-2 text-sm md:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Start Your Arthlete Journey
            </a>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-8">
            <div className="flex -space-x-3">
              <img src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/4a5fdb5af0ef3d953de7feb78bd9b1c985b97e49?placeholderIfAbsent=true" 
                alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/e16d12c2581447d1d87a5175e71e1bcced911528?placeholderIfAbsent=true" 
                alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
              <img src="https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/43e95603b1202c82ec634ab40bcce39ac08cbeb8?placeholderIfAbsent=true" 
                alt="User" className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white" />
            </div>
            <div>
              <span className="font-bold text-[#468671]">430+</span>{" "}
              <span className="text-[#234338] text-sm md:text-base">Happy Customers</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <img 
            src="/lovable-uploads/1245b779-a8b3-411d-9e77-dc586df7a61c.png" 
            alt="Arthlete App" 
            className="max-w-[220px] sm:max-w-[280px] md:max-w-xs lg:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};
