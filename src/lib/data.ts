export const portfolioData = {
  personal: {
    name: 'Usman Raza',
    title: 'Full-Stack Developer',
    tagline: 'I build scalable web apps, developer platforms & high-traffic systems.',
    location: 'Islamabad, Pakistan',
    email: 'iamosmanraza@gmail.com',
    phone: '03175469006',
    github: 'https://github.com/usmanraza5245',
    linkedin: 'https://www.linkedin.com/in/usman-raza-ab1a15167/',
    bio: `Full-Stack Developer with 5+ years of experience building scalable web applications 
    using React.js, Next.js, Node.js, and Laravel. Experienced in building developer platforms, 
    SaaS products, and high-traffic systems including nationwide examination platforms. 
    Strong focus on performance optimization, developer experience, and maintainable architecture.`,
  },

  skills: [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'React Redux', 'Zustand', 'HTML/CSS/JS', 'jQuery'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Laravel', 'PHP', 'GraphQL', 'REST APIs', 'WebSockets'],
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS EC2', 'AWS S3', 'AWS RDS', 'CI/CD', 'Cloudflare', 'DigitalOcean', 'Server Management'],
    },
    {
      category: 'Tools & DX',
      items: ['Git', 'Postman', 'Storybook', 'Figma', 'Jest', 'Agile/Scrum'],
    },
    {
      category: 'Architecture',
      items: ['Queue Workers', 'WebSockets', 'Pagination', 'Performance Optimization', 'RFC Writing'],
    },
    {
      category: 'AI & Integrations',
      items: ['Groq SDK', 'OpenAI API', 'Prompt Engineering', 'Supabase', 'ElevenLabs', 'Twilio'],
    },
  ],

  projects: [
    {
      id: 'houzgpt',
      title: 'HouzGPT.ca',
      description:
        'AI-powered real estate platform with conversational property search, Mapbox-based map browsing with cluster markers, neighborhood insights (schools, parks, transit), voice STT/TTS via ElevenLabs, and BullMQ/Redis notification scheduling. Fully built and deployed end-to-end on AWS.',
      tags: ['Next.js', 'TypeScript', 'AWS EC2', 'Mapbox', 'ElevenLabs', 'NextAuth', 'BullMQ', 'Redis'],
      url: 'https://houzgpt.ca',
      github: '',
      featured: true,
      year: '2024–Present',
    },
    {
      id: 'resumeiq',
      title: 'ResumeIQ',
      description:
        'AI-powered resume analyzer that delivers structured, actionable feedback using Groq SDK with multi-model pipeline evaluation. Features full authentication via Supabase, TypeScript throughout, and iterative prompt engineering for consistent JSON output.',
      tags: ['Next.js', 'TypeScript', 'Groq SDK', 'Supabase', 'AI', 'Prompt Engineering'],
      url: '',
      github: 'https://github.com/usmanraza5245',
      featured: true,
      year: '2025',
    },
    {
      id: 'pec-epe',
      title: 'PEC EPE — Engineering Examination System',
      description:
        'Nationwide engineering practice examination platform supporting 3 live exams. Built challan management, roll number slip generation, automated result compilation, and queue workers to handle heavy processing loads under high traffic.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Redis', 'Queue Workers'],
      url: '',
      github: '',
      featured: false,
      year: '2023–2025',
    },
    {
      id: 'apimatic',
      title: 'APIMatic Developer Portal',
      description:
        'Contributed to a platform that auto-generates API documentation, SDKs, and developer onboarding tools from API specs. Built reusable Storybook components, wrote unit tests, created RFCs for major features, and optimized UI performance.',
      tags: ['React.js', 'TypeScript', 'Jest', 'Storybook', 'REST APIs'],
      url: 'https://apimatic.io',
      github: '',
      featured: false,
      year: '2025–2026',
    },
    {
      id: 'united-market',
      title: 'United Market',
      description:
        'Music technology platform connecting producers and musicians for collaboration. Built producer opportunity management, musician submission workflows, and scalable Node.js/MongoDB backend APIs.',
      tags: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
      url: '',
      github: '',
      featured: false,
      year: '2022–2023',
    },
    {
      id: 'ranchers-cafe',
      title: 'Ranchers Café',
      description:
        'Online ordering platform for a restaurant chain. Implemented guest checkout, fixed checkout/order placement flows, and optimized frontend performance for a faster user experience.',
      tags: ['Next.js', 'React.js', 'Node.js', 'Express.js'],
      url: '',
      github: '',
      featured: false,
      year: '2024–2025',
    },
    {
      id: 'textmyguests',
      title: 'TextMyGuests',
      description:
        'Event guest communication platform with Twilio SMS, real-time Pusher.js notifications, Mailchimp integration, and an interactive onboarding tour via React Tour.',
      tags: ['Laravel', 'React.js', 'MySQL', 'Twilio', 'Pusher.js', 'Mailchimp'],
      url: '',
      github: '',
      featured: false,
      year: '2021–2022',
    },
  ],

  experience: [
    {
      company: 'APIMatic',
      role: 'Frontend Engineer',
      period: 'Mar 2025 – Mar 2026',
      location: 'Islamabad, Pakistan',
      description:
        'Worked on the APIMatic Developer Portal — a platform that auto-generates API documentation, SDKs, and onboarding tools from API specifications.',
      highlights: [
        'Developed new features for the developer portal, improving API documentation and developer onboarding experience',
        'Built reusable UI components using Storybook to ensure consistency across the application',
        'Wrote unit tests for UI components and modules to ensure reliability and code quality',
        'Created RFC documents before implementing major features and collaborated with backend engineers on API integration',
        'Fixed critical frontend issues and optimized UI performance',
      ],
    },
    {
      company: 'Codistan Ventures',
      role: 'Full-Stack Developer',
      period: 'Nov 2021 – Mar 2025',
      location: 'Islamabad, Pakistan',
      description:
        'Developed full-stack web applications across multiple products including the PEC EPE nationwide exam platform, Ranchers Café, United Market, and TextMyGuests.',
      highlights: [
        'Built PEC EPE — a nationwide engineering exam system supporting 3 live exams with queue workers for heavy processing',
        'Developed full-stack applications using React, Node.js, Laravel, and MySQL; translated Figma designs into responsive UIs',
        'Built and deployed REST APIs; created Postman collections for frontend teams',
        'Deployed and maintained applications on AWS EC2, S3, RDS, and DigitalOcean',
        'Optimized database queries and backend logic; collaborated using Agile/Scrum practices',
      ],
    },
    {
      company: 'The Revolution Technologies',
      role: 'Laravel Developer',
      period: 'Jan 2021 – Nov 2021',
      location: 'Islamabad, Pakistan',
      description:
        'Built and maintained Laravel backend projects and frontend interfaces using Bootstrap. Deployed projects on hosting platforms.',
      highlights: [
        'Developed front-end interfaces using Bootstrap',
        'Built and maintained backend Laravel projects',
        'Deployed projects on Hostinger and HostGator hosting platforms',
      ],
    },
  ],

  certifications: [
    { title: 'Master Laravel 8 & PHP: From Beginner to Advanced', issuer: 'Udemy' },
    { title: 'The Ultimate ReactJS Course', issuer: 'Udemy' },
  ],
}
