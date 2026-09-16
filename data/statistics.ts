export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const KEY_STATS: StatItem[] = [
  { id: 'students', value: 500, suffix: '+', label: 'Students', description: 'Empowered through career-driven tracks' },
  { id: 'courses', value: 10, suffix: '+', label: 'Professional Courses', description: 'Engineered for modern high-demand careers' },
  { id: 'projects', value: 20, suffix: '+', label: 'Practical Projects', description: 'Real-world capstones built per curriculum' },
  { id: 'practical', value: 90, suffix: '%+', label: 'Practical Learning', description: 'Hands-on laboratory time vs pure theory' },
];

export const SUCCESS_METRICS = [
  { id: 'succ-1', target: 500, suffix: '+', value: '500+', label: 'Students', subtext: 'Graduated & Upskilled' },
  { id: 'succ-2', target: 1000, suffix: '+', value: '1000+', label: 'Projects / Assignments', subtext: 'Shipped to GitHub & Behance' },
  { id: 'succ-3', target: 10, suffix: '+', value: '10+', label: 'Courses', subtext: 'Continuously updated' },
  { id: 'succ-4', target: 20, suffix: '+', value: '20+', label: 'Skill Areas', subtext: 'In high market demand' },
];

export const WHY_ITEMS = [
  {
    id: 'why-practical',
    title: 'PRACTICAL LEARNING',
    description: 'Learn through real projects and practical exercises.',
    extended: 'Zero passive lecturing. You spend 90% of your time writing real code, building ad campaigns, designing brand identity systems, and shipping software.',
    iconName: 'Code2',
    accent: 'from-amber-500/20 to-orange-500/5'
  },
  {
    id: 'why-guidance',
    title: 'EXPERT GUIDANCE',
    description: 'Learn from experienced instructors.',
    extended: 'Our faculty members are active industry practitioners, top-rated agency leads, and senior software architects with proven marketplace success.',
    iconName: 'UserCheck',
    accent: 'from-orange-500/20 to-amber-500/5'
  },
  {
    id: 'why-career',
    title: 'CAREER FOCUSED',
    description: 'Develop skills that can be used professionally.',
    extended: 'Every single topic maps directly to an in-demand workplace deliverable, ensuring high employability and rapid salary progression.',
    iconName: 'Briefcase',
    accent: 'from-amber-500/20 to-yellow-500/5'
  },
  {
    id: 'why-freelancing',
    title: 'FREELANCING READY',
    description: 'Learn how to turn digital skills into income opportunities.',
    extended: 'Master profile ranking on Upwork & Fiverr, cold outreach on LinkedIn, proposal strategies, and how to command $30-$80/hr remote contracts.',
    iconName: 'TrendingUp',
    accent: 'from-yellow-500/20 to-amber-500/5'
  },
  {
    id: 'why-curriculum',
    title: 'MODERN CURRICULUM',
    description: 'Learn current tools and technologies.',
    extended: 'We update our modules quarterly. Learn modern frameworks, Next.js, Figma, generative AI tools, and the latest algorithms driving the digital economy.',
    iconName: 'Sparkles',
    accent: 'from-amber-500/20 to-orange-500/5'
  },
  {
    id: 'why-support',
    title: 'STUDENT SUPPORT',
    description: 'Get guidance throughout your learning journey.',
    extended: 'Daily office hours, one-on-one portfolio reviews, dedicated community Discord, and continuous mentorship long after graduation.',
    iconName: 'HeartHandshake',
    accent: 'from-orange-500/20 to-red-500/5'
  }
];

export const MARQUEE_SKILLS = [
  'Full-Stack React & Next.js',
  'Upwork Top-Rated Mastery',
  'Fiverr Pro Gig Strategy',
  'Meta & Google Ads Scaling',
  'Generative AI & LLM Automation',
  'Figma & Design Systems',
  'Technical SEO Auditing',
  'Modern JavaScript ES6+',
  'Client Hunting & Outreach',
  'Adobe Creative Cloud Pro',
  'REST APIs & Node.js',
  'High-Ticket Proposal Systems'
];
