import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Instagram, Grid3X3 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-[#FE5F20] text-white">
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold border-b border-[rgba(255,255,255,0.15)] pb-2">
              About
            </h3>
            <p className="text-[rgba(255,245,245,1)] mt-4">
              At Arthlete, we believe in unlocking the full potential of every movement. 
              Our mission is to empower you with cutting-edge AI technology, personalized guidance, 
              and a supportive community to help you achieve your fitness goals and redefine your limits.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b border-[rgba(255,255,255,0.15)] pb-2">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left hover:text-[rgba(254,85,43,1)] transition-colors cursor-pointer">
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left hover:text-[rgba(254,85,43,1)] transition-colors cursor-pointer">
                Features
              </button>
              <button 
                onClick={() => scrollToSection('reviews')} 
                className="text-left hover:text-[rgba(254,85,43,1)] transition-colors cursor-pointer">
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-left hover:text-[rgba(254,85,43,1)] transition-colors cursor-pointer">
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('challenges')} 
                className="text-left hover:text-[rgba(254,85,43,1)] transition-colors cursor-pointer">
                Challenges
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-left hover:text-[rgba(254,85,43,1)] transition-colors cursor-pointer">
                FAQ
              </button>
            </nav>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b border-[rgba(255,255,255,0.15)] pb-2">
              Contact Info
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>arthlete.fit@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 7208315878</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Mira Bhayandar, Thane-401105</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.15)] text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://www.facebook.com/share/16YLwAJvj6/" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(254,85,43,1)] transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/arthlete.fit?igsh=Y2NsajJ0bmllcmFm" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(254,85,43,1)] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/company/arthlete/" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(254,85,43,1)] transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://x.com/arthletefit?t=GWYNAoYECF5-OLf7SnTcng&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(254,85,43,1)] transition-colors">
              <svg width="40" height="40" viewBox="0 0 59 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-white"><rect x="4" y="4" width="51" height="45" rx="8" stroke="currentColor" stroke-width="4" fill="none"/><path d="M16 13L43 40" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M43 13L16 40" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>
            </a>
          </div>
          <div className="flex justify-center mb-6">
            <a href="https://discord.gg/7XdVZpPQ" target="_blank" rel="noopener noreferrer" className="bg-white text-[#FE5F20] rounded-xl px-6 py-2 font-bold text-lg shadow hover:bg-[#f3f3f3] transition-colors">
              Join Discord Community
            </a>
          </div>
          <p className="text-sm">© 2025 Arthlete Motions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
