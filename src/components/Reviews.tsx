
import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

interface Review {
  id: number;
  name: string;
  occupation: string;
  rating: number;
  comment: string;
  headline: string;
  frame: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Dhruv Sidhpura",
    occupation: "Athlete",
    rating: 4.5,
    headline: "\"It's like having a personal trainer in my pocket\"",
    comment: "The AI motion tracking is incredibly accurate. it corrected my posture in real-time and actually helped me feel the difference. I don't have to worry about gym timings anymore. Super useful for someone like me who prefers working out at home.",
    frame: 31
  },
  {
    id: 2,
    name: "Abhishek Dubey",
    occupation: "Student",
    rating: 4,
    headline: "\"Finally, an app that keeps me consistent!\"",
    comment: "The gamified experience is addictive! Watching my rank go up on the leaderboard every week actually pushes me to work out daily. The points and progress system make fitness fun again",
    frame: 31
  },
  {
    id: 3,
    name: "Madhuri Gedam",
    occupation: "Teacher",
    rating: 4.5,
    headline: "\"Perfect for beginners and hostel life\"",
    comment: "I didn't have access to a gym, but Arthlete made it easy to stay on track. The exercises are guided and safe, and I love how the app gives instant feedback. Excited to see where it goes next.",
    frame: 31
  },
  {
    id: 4,
    name: "Yash Ekke",
    occupation: "Student",
    rating: 4,
    headline: "\"Finally, an app that keeps me consistent!\"",
    comment: "Arthlete completely changed my home workout game! The AI motion tracking is super accurate and keeps me motivated every day.",
    frame: 30
  }
];

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className="bg-black text-white p-6 rounded-xl flex flex-col min-h-[320px] border-none shadow-xl relative">
      <div>
        <h3 className="text-lg font-medium mb-3">{review.headline}</h3>
        <p className="text-sm text-gray-300">{review.comment}</p>
      </div>
      <div className="mt-auto flex items-center pt-4">
        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
          {review.name.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium">{review.name}</p>
          <p className="text-sm text-gray-400">{review.occupation}</p>
        </div>
      </div>
      {review.frame && (
        <div className="text-xs text-gray-500 absolute bottom-6 right-6">Frame {review.frame}</div>
      )}
    </Card>
  );
};

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [activeIndex, autoplay]);

  const reviewsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const visibleReviews = reviews.slice(0, 4);

  return (
    <section className="py-16 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their fitness journey with Arthlete.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleReviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
        <div className="mt-6 mx-auto max-w-md">
          {visibleReviews.length > 3 && (
            <div className="border border-blue-600 rounded-xl overflow-hidden mt-6">
              <ReviewCard key={visibleReviews[3].id} review={visibleReviews[3]} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
