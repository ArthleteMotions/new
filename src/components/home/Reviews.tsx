import React from 'react';

export const Reviews: React.FC = () => {
  const reviews = [
    {
      text: "“It’s like having a personal trainer in my pocket”!",
      content: "The AI motion tracking is incredibly accurate it corrected my posture in real-time and actually helped me feel the difference. I don’t have to worry about gym timings anymore. Super useful for someone like me who prefers working out at home.",
      author: "Dhruv Sidhpura",
      avatar: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/a052cf977aa41c74f5fb0820c88e5d927ee592be?placeholderIfAbsent=true",
      rating: 4.5,
      bgColor: "bg-orange-500"
    },
    {
      text: "“Finally, an app that keeps me consistent!”",
      content: "The gamified experience is addictive! Watching my rank go up on the leaderboard every week actually pushes me to work out daily. The points and progress system make fitness fun again",
      author: "Abhishek Dubey",
      avatar: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/4a5fdb5af0ef3d953de7feb78bd9b1c985b97e49?placeholderIfAbsent=true",
      rating: 5,
      bgColor: "bg-orange-500"
    },
    {
      text: "“Perfect for beginners and hostel life”",
      content: "I didn’t have access to a gym, but Arthlete made it easy to stay on track. The exercises are guided and safe, and I love how the app gives instant feedback. Excited to see where it goes next.",
      author: "Madhuri Gedam",
      avatar: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/e16d12c2581447d1d87a5175e71e1bcced911528?placeholderIfAbsent=true",
      rating: 5,
      bgColor: "bg-orange-500"
    },
    {
      text: "“Finally, an app that keeps me consistent!”",
      content: "The personalized feedback and progress tracking make this worth the subscription. I've seen more progress in a month than a year at the gym.",
      author: "Yash Ekke",
      avatar: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/43e95603b1202c82ec634ab40bcce39ac08cbeb8?placeholderIfAbsent=true",
      rating: 4.5,
      bgColor: "bg-orange-500"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={i < Math.floor(rating) ? "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/1044436b9d594cb59bf7079a7a93a9e58beaac15?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/3933413415510e080a1f911965c4fd5eb4f6c230?placeholderIfAbsent=true"}
            alt="Star"
            className="w-4 h-4"
          />
        ))}
        <span className="text-sm">({rating})</span>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-[#F6FBE9]">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What Our Users Are Saying
          </h2>
          <p className="text-xl font-normal text-center mt-3">
            Real Stories, Real Results – Hear From Our Athletes
          </p>
        </div>

        {/* Light green grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none">
            {Array.from({ length: 4 }).map((_, colIndex) => (
              <div key={colIndex} className="h-full border-r border-[#A3D9A5] border-opacity-20 last:border-r-0"></div>
            ))}
            {Array.from({ length: 3 }).map((_, rowIndex) => (
              <div key={rowIndex} className="w-full border-b border-[#A3D9A5] border-opacity-20 absolute" style={{ top: `${(rowIndex + 1) * 33.33}%` }}></div>
            ))}
          </div>

          {/* Review cards */}
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${review.bgColor} rounded-xl p-6 shadow-sm relative z-10 hover:shadow-md transition-shadow`}
            >
              <h3 className="text-xl font-bold text-white">{review.text}</h3>
              <p className="mt-3 text-sm text-white">{review.content}</p>
              
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-3">
                  {/* Removed avatar image */}
                  <span className="font-medium text-white">{review.author}</span>
                </div>
                {/* Removed stars and rating */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
