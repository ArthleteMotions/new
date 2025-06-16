import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export const Challenges: React.FC = () => {
  return (
    // Section with gradient background and increased vertical padding
    <section className="relative py-12 md:py-20 px-1 md:px-8 lg:px-20 bg-gradient-to-b from-[#FFF0E0] to-white"> {/* Increased vertical padding */}
      
      {/* Content container centered and above background elements */}
      <div className="container mx-auto relative z-10"> 
        {/* Central white/light container with enhanced shadow and rounded corners */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-4 md:p-12 shadow-xl text-center border border-gray-100"> {/* Adjusted padding, increased rounded-xl to rounded-2xl, increased shadow, added subtle border */}
              
          {/* Title with a slightly more impactful mb */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#234338] mb-6 md:mb-8"> {/* Increased bottom margin */}
            Weekly Fitness Challenges
          </h2>
          
          {/* Paragraph with slightly adjusted mb */}
          <p className="mb-10 md:mb-14 text-[#333] max-w-2xl mx-auto text-base md:text-lg leading-relaxed"> {/* Increased bottom margin, added leading-relaxed */}
            Each week, a custom set of exercises will be released for all users.
            Compete to win exciting prizes by showing your best form and highest reps!
          </p>
          
          {/* Stacked cards on mobile (grid-cols-1), side-by-side on desktop (md:grid-cols-2), with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"> {/* Increased gap */}
            <div className="bg-[#FFFCF8] p-6 md:p-8 rounded-lg shadow-md border border-[#FFDED3] transform transition duration-300 hover:scale-105 hover:shadow-lg"> {/* Lighter background, enhanced padding, shadow, border, hover effect */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#FE5F20]">How to Win</h3> {/* Increased text size */}
              <ul className="space-y-2 md:space-y-3 list-disc text-left pl-6 text-sm md:text-base text-[#234338]">
                <li>Complete all assigned exercises using the Arthlete AI Motion Tracker</li>
                <li>Aim for the highest accuracy and most reps</li>
                <li>Only paid users are eligible for prizes</li>
              </ul>
            </div>
            
            <div className="bg-[#FFFCF8] p-6 md:p-8 rounded-lg shadow-md border border-[#FFDED3] transform transition duration-300 hover:scale-105 hover:shadow-lg"> {/* Lighter background, enhanced padding, shadow, border, hover effect */}
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#FE5F20]">Weekly Winning Ratio</h3> {/* Increased text size */}
              <ul className="space-y-2 md:space-y-3 list-disc text-left pl-6 text-sm md:text-base text-[#234338]">
                <li>Week 1: 1 in 10 participants win</li>
                <li>Week 2: 1 in 20 win</li>
                <li>Week 3: 1 in 30 win</li>
                <li>Week 4: 1 in 40 win</li>
              </ul>
            </div>
          </div>
          
          {/* CTA section with increased top margin */}
          <div className="text-center mt-10 md:mt-16"> {/* Increased top margin */}
            <p className="mb-4 text-[#333] text-base md:text-lg">Haven't joined yet? Join the waitlist now!</p> {/* Increased text size */}
            <a 
              href="https://forms.gle/RHsTMRrQkHoToqxXA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#FE5F20] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e5561d] transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};