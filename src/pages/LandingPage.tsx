import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Your AI <span className="text-blue-500">Personal Trainer</span> in Your Pocket
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Arthlete uses advanced AI to analyze your movements, provide real-time feedback, and create personalized workout plans that adapt to your progress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#FE5F20] hover:bg-[#e5561d] text-white text-lg py-6 px-8">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 text-lg py-6 px-8">
                  Watch Demo <ChevronRightIcon className="ml-2" />
                </Button>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold border-2 border-gray-900">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium">Join 10,000+ users</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-400">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-75"></div>
              <div className="relative bg-gray-900 p-2 rounded-xl">
                <img 
                  src="/lovable-uploads/32915a56-1056-4b0f-a118-737cda5cd872.png" 
                  alt="Arthlete App Interface" 
                  className="rounded-lg w-full"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#FE5F20] text-white p-4 rounded-lg shadow-xl">
                <p className="font-medium">Advanced AI</p>
                <p className="text-sm opacity-80">Motion tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Arthlete</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our app combines cutting-edge technology with expert fitness knowledge to deliver a personalized experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-[#FE5F20]/20 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Motion Tracking</h3>
              <p className="text-gray-400">
                Our advanced computer vision technology analyzes your form in real-time to prevent injuries and maximize results.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-[#FE5F20]/20 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Plans</h3>
              <p className="text-gray-400">
                Get workout plans that adapt to your progress, preferences, and available equipment.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-[#FE5F20]/20 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Challenges</h3>
              <p className="text-gray-400">
                Join challenges with friends and the global Arthlete community to stay motivated and accountable.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-[#FE5F20]/20 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
              <p className="text-gray-400">
                Visualize your fitness journey with detailed stats, charts, and achievement badges.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-[#FE5F20]/20 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Workout Library</h3>
              <p className="text-gray-400">
                Access hundreds of expert-designed workouts for all fitness levels, from beginner to advanced.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors">
              <div className="w-14 h-14 bg-[#FE5F20]/20 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Offline Access</h3>
              <p className="text-gray-400">
                Download workouts to use when you're offline or in areas with limited connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshot */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See Arthlete in Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the future of fitness with our intuitive, powerful app design.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-xl opacity-50"></div>
            <div className="relative bg-gray-900 p-2 rounded-xl max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/71c8d1d9-0694-44c1-ab40-8fbbabaee38a.png" 
                alt="Arthlete App Dashboard" 
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews">
        <Reviews />
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Fitness Journey?</h2>
              <p className="text-lg mb-8 opacity-90">
                Join thousands of users who've already improved their fitness with Arthlete. Start your free 14-day trial today.
              </p>
              <p className="text-gray-600 mb-6">Join the waitlist to be the first to know when we launch!</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.arthlete.app" 
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

      <Footer />
    </div>
  );
}
