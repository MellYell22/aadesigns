
import React from 'react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    description: 'High-performance, modern websites that establish authority and convert visitors into customers.',
    includes: [
      'Responsive design across all devices',
      'On-page SEO fundamentals',
      'Custom contact forms & leads',
      'Analytics dashboard integration'
    ],
    timeline: '2-4 weeks',
    price: '$2,500',
    icon: 'M21 12l-9-9-9 9M5 10v10a2 2 0 002 2h3a2 2 0 002-2V14a2 2 0 012-2h3a2 2 0 012 2v6a2 2 0 002 2h3a2 2 0 002-2V10'
  },
  {
    id: 'web-apps',
    title: 'Custom Web Applications',
    description: 'Complex software solutions built to streamline internal operations or launch your next SaaS.',
    includes: [
      'Custom user dashboards & portals',
      'Complex workflow automation',
      'Scalable database architecture',
      'User authentication & roles'
    ],
    timeline: '6-12 weeks',
    price: '$8,000',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Chat Experiences',
    description: 'Integrating the latest LLM capabilities directly into your product to provide intelligent features.',
    includes: [
      'Custom AI chat interfaces',
      'Prompt engineering & optimization',
      'Automated content generation',
      'Smart data extraction flows'
    ],
    timeline: '4-8 weeks',
    price: '$5,000',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    id: 'payments',
    title: 'Payments & Monetization',
    description: 'Turning your application into a revenue-generating machine with secure, robust payment rails.',
    includes: [
      'Subscription management (Stripe)',
      'Paywalls & gated content',
      'Advanced checkout experiences',
      'Global tax & compliance setup'
    ],
    timeline: '2-4 weeks',
    price: '$3,000',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
  }
];
