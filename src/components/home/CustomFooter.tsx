
import React from 'react';
import DiscordIcon from './DiscordIcon';
import { Footer } from './Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const CustomFooter = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative">
      <Footer />
      <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8 md:right-12'} z-10`}>
        <DiscordIcon />
      </div>
    </div>
  );
};

export default CustomFooter;
