
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does the AI motion tracking work?",
      answer: "Our AI technology uses your device's camera to analyze your movements in real-time, providing instant feedback on form and technique. The system compares your movements to our database of correct exercise forms to help you achieve optimal results safely."
    },
    {
      question: "Do I need any equipment to use Arthlete?",
      answer: "No special equipment is required! Just your smartphone or tablet with a camera. Some workouts may suggest basic equipment like dumbbells or resistance bands, but we offer plenty of bodyweight exercises too."
    },
    {
      question: "Can I use Arthlete for free?",
      answer: "Yes! We offer a free version with basic features and workout tracking. Premium features like advanced AI tracking and personalized plans are available with our paid subscriptions."
    },
    {
      question: "How are winners selected in the weekly challenges?",
      answer: "Winners are selected based on a combination of factors including form accuracy, consistency, and completion rate. Our AI system tracks these metrics objectively to ensure fair competition."
    },
    {
      question: "Is my workout data private?",
      answer: "Absolutely! We take your privacy seriously. Your personal data and workout information are encrypted and stored securely. We never share your information without your explicit consent."
    },
    {
      question: "Does Arthlete record or store my camera footage?",
      answer: "No, we don't store your camera footage. The AI analysis happens in real-time on your device, and only anonymous movement data is processed for improving our algorithms."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-20 bg-white section-with-grid">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Grid pattern for FAQ section */}
          <div className="absolute inset-0 grid grid-cols-3 w-full h-full pointer-events-none">
            {Array.from({ length: 3 }).map((_, colIndex) => (
              <div key={colIndex} className="h-full border-r border-[#A3D9A5] border-opacity-20 last:border-r-0"></div>
            ))}
            {Array.from({ length: faqs.length + 1 }).map((_, rowIndex) => (
              <div key={rowIndex} className="w-full border-b border-[#A3D9A5] border-opacity-20 absolute" 
                  style={{ top: `${(rowIndex) * (100 / faqs.length)}%` }}></div>
            ))}
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4 relative z-10">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#EEF8D3] rounded-lg overflow-hidden bg-white/90"
              >
                <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-left hover:bg-[#F6FBE9]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-[#333] text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
