
import React from 'react';
import { MessageSquare } from 'lucide-react';

const DiscordIcon = () => {
  return (
    <a 
      href="https://discord.gg" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors duration-200 shadow-lg"
      aria-label="Discord"
    >
      <MessageSquare className="h-5 w-5 text-white" />
    </a>
  );
};

export default DiscordIcon;
