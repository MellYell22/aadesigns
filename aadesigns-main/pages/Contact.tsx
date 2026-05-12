
import React from 'react';
import { ContactForm } from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="pb-24 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
                Let's <span className="text-gradient">Talk Strategy.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Ready to kick off your next project? Fill out the form or reach out directly via email.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Prefer email?</h4>
                  <p className="text-gray-400">hello@aadesigns.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold">Quick Turnaround</h4>
                  <p className="text-gray-400">I usually respond within 24 business hours.</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-indigo-500/5 border border-indigo-500/10">
              <h4 className="font-bold mb-2">Available for:</h4>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• New product launches</li>
                <li>• Feature development</li>
                <li>• Technical consulting</li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
