
import React from 'react';
import { Button } from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Hi, I'm <span className="text-gradient">Alissa</span>.
            </h1>
            <p className="text-2xl font-medium text-white/90">
              Founder & Lead Engineer at AA Designs.
            </p>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I build digital products for entrepreneurs and small teams who value speed, aesthetics, and robust engineering. 
              </p>
              <p>
                My approach is simple: I don’t believe in bloated teams or corporate overhead. I work directly with you to understand your business goals and translate them into functional, beautiful software.
              </p>
            </div>
            
            <div className="pt-8">
              <Button to="/contact" variant="primary">Work With Me</Button>
            </div>
          </div>

          <div className="space-y-12">
            <div className="glass-card p-10 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 text-indigo-400">What I Build</h3>
              <ul className="space-y-4">
                {[
                  'Scalable SaaS platforms from zero to launch',
                  'AI-integrated search & chat experiences',
                  'Conversion-optimized business web presences',
                  'Complex payment & subscription ecosystems'
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-gray-300">
                    <span className="text-indigo-500 font-bold">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-sm font-bold uppercase text-gray-500 mb-4 tracking-widest">Stack</h4>
                <div className="flex flex-wrap gap-2">
                   {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'].map(t => (
                     <span key={t} className="text-xs font-mono px-2 py-1 bg-white/5 rounded">{t}</span>
                   ))}
                </div>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-sm font-bold uppercase text-gray-500 mb-4 tracking-widest">Tools</h4>
                <div className="flex flex-wrap gap-2">
                   {['Stripe', 'Supabase', 'Vercel', 'Figma', 'Gemini'].map(t => (
                     <span key={t} className="text-xs font-mono px-2 py-1 bg-white/5 rounded">{t}</span>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-32 border-t border-white/5 pt-24">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">What you can expect</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="font-bold text-white">Reliability</h4>
                <p className="text-sm text-gray-400 leading-relaxed">I meet deadlines and communicate clearly. No ghosting, no excuses.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-white">Clarity</h4>
                <p className="text-sm text-gray-400 leading-relaxed">I explain technical trade-offs in plain English so you can make informed decisions.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-white">Polish</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Functional code is the baseline; exceptional UI/UX is the differentiator.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
