import React from 'react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-16 md:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest animate-pulse">
              Open for new projects
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-gradient">Alissa</span>.
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              AA Designs builds modern websites, web apps, and AI-powered tools that help businesses launch, grow, and monetize.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" variant="primary">Start Your Project</Button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="glass-card rounded-3xl p-8 aspect-square flex flex-col items-center justify-center border-black/5 dark:border-white/10 group">
              <div className="w-full h-full rounded-2xl bg-gray-50 dark:bg-[#0B0F1C] border border-black/5 dark:border-white/5 flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5" />
                 <span className="text-gray-400 dark:text-gray-600 font-mono text-sm z-10">Your App Screenshot Here</span>
                 <div className="absolute top-4 left-4 flex space-x-1.5">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                 </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-600/10 blur-3xl -z-10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-600/10 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Solutions Built for Modern Business</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Focused on speed, reliability, and intelligent automation.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">The Simple Path to Launch</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-black/5 dark:bg-white/5 -z-10" />
          
          {[
            { step: '01', title: 'Strategy', text: 'We map out your requirements, user flows, and technical stack to ensure a solid foundation.' },
            { step: '02', title: 'Build', text: 'Iterative development with frequent updates. Your project grows from concept to functional reality.' },
            { step: '03', title: 'Launch', text: 'Rigorous testing followed by deployment to a global infrastructure for maximum speed.' }
          ].map((item, idx) => (
            <div key={idx} className="space-y-6 text-center group">
              <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mx-auto text-indigo-500 dark:text-indigo-400 font-bold text-xl border-black/5 dark:border-white/10 group-hover:border-indigo-500/50 transition-colors">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="accent-gradient rounded-[2rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden shadow-2xl shadow-indigo-500/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <h2 className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl mx-auto leading-tight relative z-10">
            Ready to build something real?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto relative z-10">
            Stop worrying about the technical debt and start focusing on your business. Let's create your next big win.
          </p>
          <div className="pt-4 relative z-10">
            <Button to="/contact" variant="secondary" className="!bg-white !text-indigo-600 hover:!bg-gray-100 px-12 py-4">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;