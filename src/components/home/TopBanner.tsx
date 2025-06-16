
import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#f8eeea] py-2 px-4 border-b border-[#f3dfd5]">
      <div className="container mx-auto flex items-center justify-center text-[#FE5F20]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#FE5F20]"></div>
          <p className="text-sm font-medium">Try Arthlete's Free AI-Powered Workout Demo – Built Just for You</p>
        </div>
      </div>
    </div>
  );
};
