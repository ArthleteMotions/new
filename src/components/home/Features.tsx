import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Personalized Nutrition Plans",
      description: "Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/22cbc13a4af134dde008819b8442e5b23a39710c?placeholderIfAbsent=true",
      bgColor: "bg-[#FE5F20]"
    },
    {
      title: "Expert-Backed Guidance",
      description: "Receive actionable insights powered by AI and validated by experts. Arthlete provides recommendations to help you stay on track.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/c3879508421227f1bc39e7f512e253273b34b500?placeholderIfAbsent=true",
      bgColor: "bg-[#FE5F20]"
    },
    {
      title: "Smart Food Logging & Analysis",
      description: "Easily track your meals using our app. Arthlete analyzes your intake, detects nutritional gaps, and gives real-time suggestions.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/b1c5755100bd52f92808d42f188d34bc0fe87328?placeholderIfAbsent=true",
      bgColor: "bg-[#FE5F20]"
    },
    {
      title: "Dynamic Meal Suggestions",
      description: "Explore meals recommended by our AI engine based on your training load, recovery needs, and personal goals.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/557d2e80a096851e4ec8fcffc59b6dfadb3623ca?placeholderIfAbsent=true",
      bgColor: "bg-[#FE5F20]"
    },
    {
      title: "Habits & Recovery Coaching",
      description: "Fitness is more than workouts—Arthlete helps you build sustainable habits, improve sleep, manage stress, and stay mentally strong.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/f11b36d28d1151a601be983c87dea421c1567277?placeholderIfAbsent=true",
      bgColor: "bg-[#FE5F20]"
    },
    {
      title: "Bite-Sized Learning Modules",
      description: "Learn the science behind what you eat. Unlock micro-courses, tips, and challenges inside the app to make smarter choices.",
      icon: "https://cdn.builder.io/api/v1/image/assets/87f9af2cf9134ae09cac6960a9a0179c/33117b57405c9b565845237d15875c2222ec70b5?placeholderIfAbsent=true",
      bgColor: "bg-[#FE5F20]"
    }
  ];

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-20 bg-[#F6FBE9]"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-neutral-800"
          >
            Key Features of Arthlete
          </h2>
          <p className="text-[#333] text-base mt-4 max-w-2xl mx-auto">
            Discover how Arthlete empowers your fitness and wellness journey with intelligent, AI-driven features.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Light grid pattern */}
          <div className="absolute inset-0 grid grid-cols-6 w-full h-full pointer-events-none z-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`col-${i}`} className="h-full border-r border-[#A3D9A5] border-opacity-20 last:border-r-0"></div>
            ))}
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={`row-${i}`}
                className="w-full border-b border-[#A3D9A5] border-opacity-20 absolute"
                style={{ top: `${(i + 1) * 25}%` }}
              ></div>
            ))}
          </div>

          {/* Feature Cards */}
          {features.map(({ title, description, icon, bgColor }, index) => (
            <article
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-[#E5F5BD] relative z-10 hover:shadow-md transition-shadow"
              aria-label={title}
            >
              <header className="flex items-center gap-4 mb-4">
                <div className={`${bgColor} p-3 rounded-lg`}>
                  <img
                    src={icon}
                    alt={`${title} icon`}
                    className="w-6 h-6"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800">
                  {title}
                </h3>
              </header>
              <p className="text-[#333] text-sm">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
