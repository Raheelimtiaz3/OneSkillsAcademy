export interface Course {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  duration: string;
  level: string;
  format: string;
  projectsCount: string;
  rating: number;
  studentsEnrolled: number;
  instructor?: string;
  image: string;
  videoPreview?: string;
  curriculum: {
    week: string;
    title: string;
    topics: string[];
  }[];
  careerRoles: string[];
  badge?: string;
}

export const COURSE_CATEGORIES = [
  'All Courses',
  'Web Development',
  'Digital Marketing',
  'Freelancing',
  'AI Tools',
  'AI & Web3',
  'Computer Courses',
  'Trading & Creative'
] as const;

export const COURSES: Course[] = [
  {
    id: 'web-development',
    title: 'AI-POWERED WEB DEVELOPMENT',
    category: 'Web Development',
    tagline: 'HTML • CSS • JavaScript • React • Node • AI Coding Assistants',
    description: 'Master modern full-stack development empowered by AI coding tools. Build responsive interfaces, scalable server APIs, and ship production-ready applications to global cloud hosts.',
    technologies: ['HTML5 & Modern CSS', 'JavaScript ES6+', 'React.js', 'Next.js 15', 'Node.js & Express', 'Tailwind CSS', 'AI Copilot / Claude'],
    duration: '3 Months (12 Weeks)',
    level: 'Beginner to Job-Ready',
    format: 'Hands-on Coding Labs + Weekly Code Audits',
    projectsCount: '6 Production Web Apps',
    rating: 4.9,
    studentsEnrolled: 420,
    instructor: 'Nisar Mehar (Founder of OneSkills & Lead Tech Specialist)',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    curriculum: [
      { week: 'Weeks 1-3', title: 'Modern Semantic Web & Responsive Design', topics: ['HTML5 semantic layout & accessibility', 'Modern CSS3 Grid & Flexbox mastery', 'Tailwind CSS utility architecture & mobile-first UI'] },
      { week: 'Weeks 4-6', title: 'JavaScript ES6+ & DOM Engineering', topics: ['Async programming, Promises & Fetch API', 'Modern ES6+ data structures and modules', 'Interactive browser DOM manipulation & state basics'] },
      { week: 'Weeks 7-9', title: 'Modern React.js & Component Architecture', topics: ['React hooks, lifecycle, custom hooks & context', 'Next.js App Router & server-side rendering (SSR)', 'Dynamic API integration with real databases'] },
      { week: 'Weeks 10-12', title: 'Backend APIs, AI Assistance & Capstone Launch', topics: ['Node.js REST API creation & Express middleware', 'Accelerating coding 5x with Claude & Copilot', 'Git/GitHub teamwork, CI/CD and Vercel cloud deployment'] }
    ],
    careerRoles: ['Frontend Developer', 'Full-Stack Web Developer', 'React Specialist', 'Freelance Web Engineer']
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING & SEO MASTERY',
    category: 'Digital Marketing',
    tagline: 'Technical SEO • Meta Ads • Google Ads • GA4 • Funnels',
    description: 'Drive high-converting customer acquisition, dominate Google rankings with technical SEO, and manage live paid ad campaigns across Meta and Google with measurable ROAS.',
    technologies: ['Google Ads Search & Display', 'Meta Ads Manager', 'Technical SEO & Ahrefs', 'Google Analytics 4', 'Conversion Rate Optimization', 'Copywriting'],
    duration: '3 Months (12 Weeks)',
    level: 'All Experience Levels',
    format: 'Live Ad Budget Simulations + Client Audits',
    projectsCount: '4 Live Client Campaigns',
    rating: 4.8,
    studentsEnrolled: 340,
    instructor: 'Senior Growth Strategist & Performance Marketer',
    badge: 'High Demand',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    curriculum: [
      { week: 'Weeks 1-3', title: 'Audience Research & Funnel Architecture', topics: ['Target customer avatar & psychological triggers', 'Conversion rate optimization (CRO) frameworks', 'High-converting landing page copywriting'] },
      { week: 'Weeks 4-6', title: 'Search Engine Optimization (SEO)', topics: ['Keyword research & commercial search intent', 'On-page technical audits & speed optimization', 'White-hat backlink building & content strategy'] },
      { week: 'Weeks 7-9', title: 'Paid Advertising (Meta & Google Ads)', topics: ['Facebook & Instagram Ads targeting mechanics', 'Google Search ads and remarketing campaigns', 'Pixel tracking, CAPI, and budget scaling'] },
      { week: 'Weeks 10-12', title: 'Data Attribution & Agency Client Retainers', topics: ['GA4 custom event tracking & attribution modeling', 'A/B testing ad creatives and copy variations', 'Pitching monthly $1k-$3k marketing retainers'] }
    ],
    careerRoles: ['Digital Marketing Manager', 'SEO Specialist', 'Performance Media Buyer', 'E-Commerce Growth Lead']
  },
  {
    id: 'freelancing',
    title: 'FREELANCING & CLIENT HUNTING',
    category: 'Freelancing',
    tagline: 'Upwork • Fiverr • Direct Client Hunting • Winning Proposals',
    description: 'Convert digital skills into consistent international freelance revenue. Learn winning proposal formulas, direct client acquisition on LinkedIn, and contract negotiation with overseas clients.',
    technologies: ['Upwork Top Rated Strategy', 'Fiverr Algorithm & Gig SEO', 'LinkedIn Outreach Funnels', 'Cold Email Systems', 'Proposal Frameworks', 'International Invoicing'],
    duration: '2 Months (8 Weeks)',
    level: 'Beginner to Intermediate',
    format: 'Live Proposal Coaching + Profile Audits',
    projectsCount: 'Live Upwork & Fiverr Launch',
    rating: 5.0,
    studentsEnrolled: 560,
    instructor: 'Top-Rated Freelancer ($50k+ International Earnings)',
    badge: 'Direct Income',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    curriculum: [
      { week: 'Weeks 1-2', title: 'High-Converting Profile Architecture', topics: ['Upwork 100% profile optimization & specialized profiles', 'Fiverr gig title, tag, and video thumbnail ranking', 'Niche selection and value-based pricing strategy'] },
      { week: 'Weeks 3-4', title: 'The Winning Proposal Formula', topics: ['Writing proposals that get 40%+ reply rates', 'Crafting custom Loom video pitches for high-ticket jobs', 'Client vetting and spotting low-budget red flags'] },
      { week: 'Weeks 5-6', title: 'Direct Outreach & International Hunting', topics: ['LinkedIn Boolean search for remote decision-makers', 'Cold email templates and automated follow-up sequences', 'Hosting discovery calls and closing high-ticket deals'] },
      { week: 'Weeks 7-8', title: 'Contracts, Payment Gateways & Agency Scaling', topics: ['Retainer agreements and upsell strategies', 'International bank payouts (Wise, Payoneer)', 'Delegating tasks and scaling from solo to agency'] }
    ],
    careerRoles: ['Independent Freelancer', 'Remote Contractor', 'Agency Founder', 'Digital Consultant']
  },
  {
    id: 'ai-tools',
    title: 'AI TOOLS & WORKFLOW AUTOMATION',
    category: 'AI Tools',
    tagline: 'ChatGPT • Claude • Gemini • Midjourney • Zapier • Make',
    description: 'Harness state-of-the-art Generative AI models, prompt engineering methods, and no-code automation pipelines to multiply productivity 10x and offer AI consulting services.',
    technologies: ['ChatGPT-4o & Claude 3.5', 'Gemini Multimodal Tools', 'Midjourney & Flux', 'Make.com & Zapier', 'AI Workflow Bots', 'Prompt Engineering'],
    duration: '2.5 Months (10 Weeks)',
    level: 'Future-Ready',
    format: 'Autonomous Workflow Labs + Live AI Projects',
    projectsCount: '5 Production AI Automation Bots',
    rating: 4.9,
    studentsEnrolled: 380,
    instructor: 'AI Automation Consultant & Workflow Architect',
    badge: 'Next-Gen Tech',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    curriculum: [
      { week: 'Weeks 1-2', title: 'Foundations of Modern LLMs & Advanced Prompting', topics: ['LLM mechanics, temperature and context tokens', 'Chain-of-thought, few-shot, and role prompting', 'Multimodal analysis across image, code, and text'] },
      { week: 'Weeks 3-5', title: 'Business Workflow Automation with Make & Zapier', topics: ['No-code webhooks and API integrations', 'Automated email sorting, summarization and replies', 'Social media auto-publishing and research bots'] },
      { week: 'Weeks 6-8', title: 'Creative AI & Synthetic Media Generation', topics: ['High-end commercial imagery with Midjourney and Flux', 'AI voice synthesis and synthetic video production', 'Automated content pipelines for brands and creators'] },
      { week: 'Weeks 9-10', title: 'Custom AI Agents & Monetization', topics: ['Building custom GPTs and autonomous task agents', 'Data enrichment workflows and web scrapers', 'Offering $1k-$5k AI automation solutions to clients'] }
    ],
    careerRoles: ['AI Automation Consultant', 'Prompt Engineer', 'Operations Technologist', 'AI Solutions Architect']
  },
  {
    id: 'ai-web3',
    title: 'AI & WEB3 / BLOCKCHAIN MASTERY',
    category: 'AI & Web3',
    tagline: 'Smart Contracts • Solidity • Web3 dApps • Tokenomics • Crypto',
    description: 'Explore the convergence of Artificial Intelligence and decentralized blockchain technology. Learn Solidity smart contract development, Web3 dApp integrations, and token economics.',
    technologies: ['Solidity', 'Ethereum & EVM', 'Web3.js / Ethers.js', 'MetaMask & Wallets', 'Smart Contract Audits', 'Decentralized Apps'],
    duration: '3 Months (12 Weeks)',
    level: 'Intermediate to Advanced',
    format: 'Hands-on Testnet Deployments + Security Labs',
    projectsCount: '3 Decentralized Applications',
    rating: 4.9,
    studentsEnrolled: 210,
    instructor: 'Web3 & Blockchain Architect',
    badge: 'Future-Ready',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    curriculum: [
      { week: 'Weeks 1-3', title: 'Blockchain Fundamentals & Architecture', topics: ['Cryptography, hashing, and consensus protocols', 'EVM mechanics, gas optimization, and wallet security', 'Decentralized networks vs traditional architectures'] },
      { week: 'Weeks 4-6', title: 'Solidity Smart Contract Development', topics: ['Solidity syntax, storage patterns, and events', 'ERC-20, ERC-721, and ERC-1155 token standards', 'Contract security, reentrancy guards, and testing'] },
      { week: 'Weeks 7-9', title: 'Web3 Frontend & Wallet Connection', topics: ['Connecting React/Next.js to blockchain with Ethers.js', 'Handling wallet signatures and transaction lifecycle', 'Building full-stack decentralized applications (dApps)'] },
      { week: 'Weeks 10-12', title: 'AI in Web3 & Capstone Launch', topics: ['Autonomous on-chain AI agents', 'Decentralized data oracles and AI verification', 'Deploying production dApp capstone to public testnets'] }
    ],
    careerRoles: ['Web3 Developer', 'Smart Contract Engineer', 'Blockchain Consultant', 'Crypto Analyst']
  },
  {
    id: 'computer-course',
    title: 'AI-BASED COMPUTER COURSE',
    category: 'Computer Courses',
    tagline: 'Computer Essentials • Windows • MS Office • Google Workspace • Modern AI',
    description: 'The foundational course designed for beginners, matric/intermediate students, and job seekers. Learn computer fundamentals, office software mastery, and everyday AI tools.',
    technologies: ['Windows Operating System', 'Microsoft Word & Excel', 'PowerPoint & Presentations', 'Google Docs & Sheets', 'Internet & Cybersecurity', 'ChatGPT for Office Work'],
    duration: '3 Months (12 Weeks)',
    level: 'Complete Beginner Friendly',
    format: 'Classroom Computer Lab Hands-On Practice',
    projectsCount: 'Office Productivity Portfolio',
    rating: 4.8,
    studentsEnrolled: 490,
    instructor: 'Senior IT & Computer Educator',
    badge: 'Beginner Friendly',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    curriculum: [
      { week: 'Weeks 1-3', title: 'Computer Hardware & Operating System Essentials', topics: ['System hardware components, storage, and peripherals', 'Windows 11 navigation, settings, and file management', 'Safe browsing, email etiquette, and cybersecurity basics'] },
      { week: 'Weeks 4-6', title: 'Microsoft Word & Professional Document Formatting', topics: ['Official letters, CVs, resumes, and office reports', 'Tables, headers, footers, and table of contents', 'Using ChatGPT for proofreading and drafting correspondence'] },
      { week: 'Weeks 7-9', title: 'Microsoft Excel & Data Analysis Formulas', topics: ['Spreadsheet formulas: SUM, AVERAGE, VLOOKUP, IF', 'Managing office inventory, invoices, and payrolls', 'Data visualization with charts and pivot tables'] },
      { week: 'Weeks 10-12', title: 'PowerPoint Presentations & Cloud Collaboration', topics: ['Professional corporate slide decks and animations', 'Google Drive, Docs, Sheets cloud synchronization', 'Final practical examination and verified certification'] }
    ],
    careerRoles: ['Computer Operator', 'Data Entry Specialist', 'Office Assistant', 'Administrative Coordinator']
  },
  {
    id: 'graphic-designing',
    title: 'GRAPHIC DESIGNING & AI MEDIA',
    category: 'Trading & Creative',
    tagline: 'Photoshop • Illustrator • Figma • Midjourney • Brand Identity',
    description: 'Design professional visual identities, marketing collateral, typography systems, and commercial social media packs using Adobe Creative Cloud and generative AI tools.',
    technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma UI/UX Basics', 'Midjourney AI', 'Typography & Grids', 'Print & Packaging'],
    duration: '3 Months (12 Weeks)',
    level: 'Beginner to Professional',
    format: 'Studio Critiques & Portfolio Prep',
    projectsCount: '8 Commercial Deliverables',
    rating: 4.9,
    studentsEnrolled: 310,
    instructor: 'Lead Brand Identity Designer & Art Director',
    badge: 'Creative Focus',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
    curriculum: [
      { week: 'Weeks 1-3', title: 'Visual Design Fundamentals & Color Theory', topics: ['Color psychology, balance, contrast, and alignment', 'Typography pairings and layout grid systems', 'Visual hierarchy in digital and print mediums'] },
      { week: 'Weeks 4-6', title: 'Vector Illustration & Adobe Illustrator', topics: ['Pen tool precision and custom vector illustration', 'Logo design methodologies and brand guidelines', 'Packaging design and scalable corporate brand assets'] },
      { week: 'Weeks 7-9', title: 'Adobe Photoshop & AI Compositing', topics: ['Photo retouching, masking, and color grading', 'Combining generative AI with Photoshop manipulation', 'High-converting social media marketing ad creatives'] },
      { week: 'Weeks 10-12', title: 'Figma UI Basics & Behance Portfolio Launch', topics: ['Figma wireframes and modern component design', 'Case study presentation on Behance and Dribbble', 'Setting up graphic design freelance services on Fiverr'] }
    ],
    careerRoles: ['Graphic Designer', 'Brand Identity Specialist', 'Social Media Designer', 'Visual Content Creator']
  },
  {
    id: 'forex-crypto',
    title: 'FOREX & CRYPTO TRADING MASTERY',
    category: 'Trading & Creative',
    tagline: 'Price Action • Technical Analysis • Risk Management • Trading Psychology',
    description: 'Learn institutional price action trading, candlestick charting, risk protocol, and emotional discipline to navigate global financial markets and crypto assets.',
    technologies: ['TradingView Pro', 'Price Action & Market Structure', 'Risk-to-Reward Formulas', 'Order Blocks & Liquidity', 'Crypto Spot & Futures', 'Journaling Systems'],
    duration: '2 Months (8 Weeks)',
    level: 'Beginner to Advanced',
    format: 'Live Chart Analysis + Risk Protocol Labs',
    projectsCount: 'Prop Firm Trading Blueprint',
    rating: 4.8,
    studentsEnrolled: 260,
    instructor: 'Professional Market Trader & Technical Analyst',
    badge: 'Finance & Wealth',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    curriculum: [
      { week: 'Weeks 1-2', title: 'Financial Market Foundations & Terminology', topics: ['Forex pairs, pips, lots, leverage, and margin', 'Crypto market cycles, Bitcoin dominance, and token liquidity', 'Setting up TradingView and charting tools'] },
      { week: 'Weeks 3-4', title: 'Institutional Price Action & Market Structure', topics: ['Higher highs, lower lows, and trend reversals', 'Support & resistance, order blocks, and liquidity grabs', 'Multi-timeframe analysis (Daily, 4H, 15M, 5M)'] },
      { week: 'Weeks 5-6', title: 'Strict Risk Protocol & Capital Preservation', topics: ['The 1% risk rule and position size calculation', 'Risk-to-reward ratios (1:2, 1:3) and breakeven rules', 'Trading psychology and eliminating revenge trading'] },
      { week: 'Weeks 7-8', title: 'Prop Firm Challenge Strategy & Execution', topics: ['Passing funded trader challenges (FTMO, FundedNext)', 'Daily trade journaling and performance metrics', 'Building a sustainable long-term trading plan'] }
    ],
    careerRoles: ['Funded Trader', 'Technical Market Analyst', 'Crypto Trader', 'Risk Manager']
  }
];
