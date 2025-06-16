
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TopBanner } from '@/components/home/TopBanner';
import { Navbar } from '@/components/home/Navbar';
import { Footer } from '@/components/home/Footer';

const ComingSoon = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6FBE9]">
      <TopBanner />
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A3129] mb-6">Coming Soon</h1>
          <p className="text-[#333] text-lg mb-8 max-w-lg mx-auto">
            We're working hard to bring you our premium plans. Please check back later or sign up to be notified when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-[#FE5F20] hover:bg-[#e55419]">
                Return Home
              </Button>
            </Link>
            <a 
              href="https://forms.gle/RHsTMRrQkHoToqxXA" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-[#FE5F20] text-[#FE5F20] hover:bg-[#FE5F20]/10">
                Join Waitlist
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
