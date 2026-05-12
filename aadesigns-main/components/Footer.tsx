import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-black/5 dark:border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
        <div className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white">
          AA <span className="text-indigo-500">DESIGNS</span>
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-xs">
          Created by AA Designs. Built with focus and precision.
        </p>
        <div className="text-gray-400 dark:text-gray-600 text-[10px] uppercase tracking-widest pt-4">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </footer>
  );
};