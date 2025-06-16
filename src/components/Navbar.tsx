import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.PNG" alt="Arthlete Logo" className="h-10 w-auto" />
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="block lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* Desktop Menu and Buttons */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <a href="#features" className="text-white hover:text-[#FE5F20] transition-colors">Features</a>
              <a href="#workouts" className="text-white hover:text-[#FE5F20] transition-colors">Workouts</a>
              <a href="#reviews" className="text-white hover:text-[#FE5F20] transition-colors">Reviews</a>
              <a href="#faq" className="text-white hover:text-[#FE5F20] transition-colors">FAQ</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-[#FE5F20]">Log In</Button>
              <Button className="bg-[#FE5F20] hover:bg-[#e5561d] text-white">Get Started</Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-gray-900 mt-4 p-4 rounded-lg animate-in fade-in duration-200">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-white hover:text-[#FE5F20] py-2 transition-colors">Features</a>
              <a href="#workouts" className="text-white hover:text-[#FE5F20] py-2 transition-colors">Workouts</a>
              <a href="#reviews" className="text-white hover:text-[#FE5F20] py-2 transition-colors">Reviews</a>
              <a href="#faq" className="text-white hover:text-[#FE5F20] py-2 transition-colors">FAQ</a>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-700">
                <Button variant="ghost" className="text-white hover:bg-gray-800 w-full">Log In</Button>
                <Button className="bg-[#FE5F20] hover:bg-[#e5561d] text-white w-full">Get Started</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
