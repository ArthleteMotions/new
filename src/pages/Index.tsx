import React from 'react';
import { TopBanner } from '@/components/home/TopBanner';
import { Navbar } from '@/components/home/Navbar';
import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Reviews } from '@/components/home/Reviews';
import { Challenges } from '@/components/home/Challenges';
import { FAQ } from '@/components/home/FAQ';
import { Footer } from '@/components/home/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F6FBE9]">
      <TopBanner />
      <Navbar />
      <main>
        <section id="home" className="section-with-grid">
          <Hero />
        </section>
        <section id="features" className="section-with-grid">
          <Features />
        </section>
        <section id="reviews" className="section-with-grid">
          <Reviews />
        </section>
        <section id="challenges" className="section-with-grid challenges-section">
          <Challenges />
        </section>
        <section id="faq" className="section-with-grid">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
