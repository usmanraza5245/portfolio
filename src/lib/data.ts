export const portfolioData = {
  personal: {
    name: 'Usman Raza',
    title: 'Full-Stack Developer',
    tagline: 'I build fast, scalable web apps & AI-powered products.',
    location: 'Islamabad, Pakistan',
    email: 'usman@example.com',
    github: 'https://github.com/usmanraza5245',
    linkedin: 'https://linkedin.com/in/usmanraza',
    bio: `Full-stack developer with 5+ years of experience crafting production-grade web applications. 
    I specialize in React/Next.js on the frontend and Node.js/TypeScript on the backend — 
    with a growing focus on AI-powered products and developer tooling.`,
  },

  skills: [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Laravel', 'FastAPI', 'REST APIs'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'Prisma'] },
    { category: 'DevOps & Cloud', items: ['AWS EC2', 'AWS S3', 'Nginx', 'Docker', 'BullMQ'] },
    { category: 'AI & Tools', items: ['OpenAI API', 'Groq SDK', 'LangChain', 'Mapbox', 'Sentry'] },
    { category: 'Testing & DX', items: ['Jest', 'Vitest', 'Storybook', 'ESLint', 'Git'] },
  ],

  projects: [
    {
      id: 'houzgpt',
      title: 'HouzGPT.ca',
      description:
        'AI-powered real estate platform with conversational property search, Mapbox integration, neighborhood insights, and voice STT/TTS via ElevenLabs. Full-stack deployment on AWS.',
      tags: ['Next.js', 'TypeScript', 'AWS', 'Mapbox', 'ElevenLabs', 'NextAuth', 'BullMQ'],
      url: 'https://houzgpt.ca',
      github: '',
      featured: true,
      year: '2024',
    },
    {
      id: 'resumeiq',
      title: 'ResumeIQ',
      description:
        'AI-powered resume analyzer that provides structured feedback using Groq SDK with multi-model pipeline evaluation. Features full auth via Supabase and TypeScript throughout.',
      tags: ['Next.js', 'Groq SDK', 'Supabase', 'TypeScript', 'AI'],
      url: '',
      github: 'https://github.com/usmanraza5245',
      featured: true,
      year: '2025',
    },
    {
      id: 'pec-epe',
      title: 'PEC EPE Platform',
      description:
        'National-level engineering exam management system with discipline/sub-discipline promotion, cheating detection, MCQ bulk transfer, and grace time sync.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
      url: '',
      github: '',
      featured: false,
      year: '2023',
    },
    {
      id: 'textmyguests',
      title: 'TextMyGuests',
      description:
        'Event guest communication platform enabling bulk SMS/messaging for event organizers. Built with a focus on real-time delivery and scalability.',
      tags: ['React', 'Node.js', 'Twilio', 'MySQL'],
      url: '',
      github: '',
      featured: false,
      year: '2022',
    },
  ],

  experience: [
    {
      company: 'Freelance',
      role: 'Full-Stack Developer',
      period: 'Apr 2026 – Present',
      location: 'Remote',
      description:
        'Building AI-powered web products and taking on full-stack freelance contracts via Upwork and Freelancer.com. Focus on Next.js, TypeScript, and production-grade AWS deployments.',
      highlights: [
        'Developed and deployed AI real estate platform HouzGPT.ca end-to-end on AWS',
        'Built ResumeIQ — AI resume analyzer with Groq SDK & Supabase auth',
        'Architecting full-stack solutions with Next.js, FastAPI, PostgreSQL & Redis',
      ],
    },
    {
      company: 'APIMatic',
      role: 'Frontend Engineer',
      period: 'Jan 2023 – Mar 2026',
      location: 'Islamabad, Pakistan',
      description:
        'Contributed to a large-scale developer portal product used by clients like PayPal and Maxio. Focused on React/TypeScript component optimization, WCAG accessibility compliance, and developer experience.',
      highlights: [
        'Led WCAG accessibility compliance across developer portal components (SiteImprove audits)',
        'Optimized React/TypeScript components with styled-components and Jest test coverage',
        'Redesigned Getting Started pages for PayPal and Maxio portals; wrote developer changelogs',
        'Integrated lunr.js search, LiquidJS templating, and Storybook component documentation',
      ],
    },
    {
      company: 'Ranchers Café',
      role: 'Full-Stack Developer',
      period: '2021 – 2022',
      location: 'Islamabad, Pakistan',
      description:
        'Built and launched a full online ordering system for a restaurant chain using React and Laravel.',
      highlights: [
        'Developed online ordering flow with real-time order tracking',
        'Integrated payment gateway and SMS notification system',
        'Laravel backend with MySQL and React frontend',
      ],
    },
  ],
}
