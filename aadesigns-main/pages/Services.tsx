
import React from 'react';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
          Capabilities & <span className="text-gradient">Core Services</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          From simple brand websites to complex AI-integrated platforms, I provide the technical expertise to turn ambitious ideas into polished software.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} featured={service.id === 'ai-tools'} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-32 text-center glass-card p-12 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Don't see exactly what you need?</h2>
        <p className="text-gray-400 mb-8">
          I specialize in custom solutions. If you have a unique technical challenge or a specific vision, let's talk and figure out the best path forward.
        </p>
        <a href="#/contact" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors inline-flex items-center gap-2">
          Request a Custom Quote
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Services;
