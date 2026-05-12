import React from 'react';
import { Service } from '../types';
import { Button } from './Button';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <div className={`glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col h-full ${featured ? 'border-indigo-500/30' : ''}`}>
      <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20">
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
        </svg>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        {service.description}
      </p>

      <div className="mt-auto space-y-6">
        <div>
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-3">Includes:</h4>
          <ul className="space-y-2">
            {service.includes.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex justify-between items-center">
          <div>
            <span className="text-xs text-gray-400 dark:text-gray-500 uppercase block mb-1">Starts from</span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">{service.price}</span>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-400 dark:text-gray-500 uppercase block mb-1">Timeline</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{service.timeline}</span>
          </div>
        </div>

        <Button to="/contact" variant="secondary" className="w-full mt-4 !bg-indigo-500/5 dark:!bg-white/10 !text-indigo-600 dark:!text-white hover:!bg-indigo-500 dark:hover:!bg-white hover:!text-white dark:hover:!text-indigo-600 transition-all">
          Get Started
        </Button>
      </div>
    </div>
  );
};