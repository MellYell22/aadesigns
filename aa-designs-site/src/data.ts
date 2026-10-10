export const CONTACT_EMAIL = 'contact@aa-designs.com';
export const SITE_URL = 'https://aa-designs.com';

export type IconName =
  | 'monitor'
  | 'phone'
  | 'brain'
  | 'cart'
  | 'brush'
  | 'gear'
  | 'chip'
  | 'mail'
  | 'pin'
  | 'globe'
  | 'clock'
  | 'sparkle';

/** The six offerings exactly as they appear on the approved poster. */
export const POSTER_SERVICES: { icon: IconName; title: string; tags: string[] }[] = [
  { icon: 'monitor', title: 'Websites', tags: ['Custom', 'Modern', 'Mobile Ready'] },
  { icon: 'phone', title: 'Mobile Apps', tags: ['iOS & Android', 'From Idea to Launch'] },
  { icon: 'brain', title: 'AI Solutions', tags: ['Automation', 'Chatbots', 'AI Integration'] },
  { icon: 'cart', title: 'Digital Products', tags: ['Templates', 'Bundles', 'Courses'] },
  { icon: 'brush', title: 'Branding & Graphics', tags: ['Logos', 'Social Media', 'Marketing'] },
  { icon: 'gear', title: 'Ongoing Support', tags: ['Updates', 'Maintenance', 'Guidance'] },
];

export interface Service {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  includes: string[];
  investment: string;
  timeline: string;
}

export const SERVICES: Service[] = [
  {
    id: 'websites',
    icon: 'monitor',
    title: 'Professional Website Design',
    summary:
      'Custom, high-performance websites that establish authority, reflect your brand and turn visitors into clients.',
    includes: [
      'Custom design — never a generic template',
      'Responsive on phones, tablets and desktops',
      'On-page SEO fundamentals',
      'Contact forms, lead capture and analytics',
    ],
    investment: 'From $2,500',
    timeline: '2–4 weeks',
  },
  {
    id: 'mobile-apps',
    icon: 'phone',
    title: 'iOS & Android App Development',
    summary:
      'Polished mobile apps taken from idea to launch, designed for real users and prepared for the App Store and Google Play.',
    includes: [
      'Product planning and user flows',
      'Elegant, intuitive interface design',
      'Accounts, subscriptions and in-app purchases',
      'App Store and Google Play launch support',
    ],
    investment: 'Custom quote',
    timeline: 'Scoped per project',
  },
  {
    id: 'ai',
    icon: 'brain',
    title: 'AI-Powered Applications',
    summary:
      'Intelligent assistants, chatbots and automations that save time, delight customers and set your business apart.',
    includes: [
      'Custom AI assistants and chat experiences',
      'Business process automation',
      'AI integrations into existing tools',
      'Prompt design and quality tuning',
    ],
    investment: 'From $5,000',
    timeline: '4–8 weeks',
  },
  {
    id: 'branding',
    icon: 'brush',
    title: 'Digital Branding & Design',
    summary:
      'A cohesive, memorable identity — from logo to social media — that makes your business instantly recognizable.',
    includes: [
      'Logo and visual identity',
      'Social media graphics',
      'Marketing materials and promotional posters',
      'Digital products, templates and bundles',
    ],
    investment: 'Custom quote',
    timeline: '1–3 weeks',
  },
  {
    id: 'custom',
    icon: 'chip',
    title: 'Custom Technology Solutions',
    summary:
      'Web applications, portals, payments and ongoing support tailored to the way your business actually runs.',
    includes: [
      'Custom web applications and dashboards (from $8,000)',
      'Payments and subscriptions (from $3,000)',
      'Integrations between the tools you already use',
      'Ongoing updates, maintenance and guidance',
    ],
    investment: 'From $3,000',
    timeline: 'Scoped per project',
  },
];

export interface Project {
  title: string;
  category: string;
  description: string;
  status: string;
  placeholder?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'Bible AI Companion',
    category: 'Mobile App · AI',
    description:
      'An AI-powered companion app for Bible reading, study and reflection — designed and built by AA Designs.',
    status: 'AA Designs original',
  },
  {
    title: 'AA-Designs.com',
    category: 'Website · Branding',
    description:
      'This website — a luxury brand experience brought to life from the AA Designs poster, built with React and Vite.',
    status: 'Live',
  },
  {
    title: 'Your Project Here',
    category: 'Coming soon',
    description: 'Client work will be showcased here once it is completed and approved for sharing.',
    status: 'Placeholder',
    placeholder: true,
  },
  {
    title: 'Your Project Here',
    category: 'Coming soon',
    description: 'Have an idea for a website, app or AI tool? It could be the next featured build.',
    status: 'Placeholder',
    placeholder: true,
  },
];
