import React from 'react';
import { Hero } from '../components/home/Hero';
import { Features } from '../components/home/Features';
import { FAQ } from '../components/home/FAQ';
import { Reviews } from '../components/home/Reviews';
import { Navbar } from '../components/home/Navbar';
import { TopBanner } from '../components/home/TopBanner';
import CustomFooter from '../components/home/CustomFooter';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Reviews />
        <FAQ />
      </main>
      <CustomFooter />
    </div>
  );
};

export default Home;
