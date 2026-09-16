export interface Review {
  id: string;
  name: string;
  role: string;
  course: string;
  rating: number;
  review: string;
  avatar: string;
  outcome: string;
}

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Hamza Tariq',
    role: 'Full-Stack Developer at NexaTech',
    course: 'Web Development',
    rating: 5,
    review: 'OneSkills College completely reshaped my trajectory. Before joining, I watched endless tutorials without being able to build anything real. Within 12 weeks here, I built three production-grade React apps, completed code reviews from senior devs, and landed a remote junior dev position.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80',
    outcome: 'Landed $1,200/mo Remote Developer Role'
  },
  {
    id: '2',
    name: 'Ayesha Malik',
    role: 'Top Rated Freelancer on Upwork',
    course: 'Freelancing & Client Hunting',
    rating: 5,
    review: 'The freelancing modules at OneSkills gave me exact step-by-step proposal formulas and client handling frameworks. I secured my first two international contracts within 3 weeks of graduating, and I now have long-term retainers with clients in the UK and Canada.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=240&q=80',
    outcome: 'Top-Rated Badge with $15,000+ Earned'
  },
  {
    id: '3',
    name: 'Zainab Noor',
    role: 'Lead Brand Designer at Studio Aura',
    course: 'Graphic Designing',
    rating: 5,
    review: 'The instructors don’t just teach you shortcuts in Photoshop; they train your eye for typography, balance, and commercial brand identity. The portfolio I created during the program directly secured me my agency role without requiring a traditional degree.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=240&q=80',
    outcome: 'Hired as Agency Lead Designer'
  },
  {
    id: '4',
    name: 'Bilal Ahmed',
    role: 'Growth Marketer & Media Buyer',
    course: 'Digital Marketing',
    rating: 5,
    review: 'Running real budget simulations on Meta and Google Ads gave me the confidence to handle live client spend. OneSkills taught me actual ROAS calculations, data attribution, and how to sell marketing retainers. Best practical investment I ever made.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80',
    outcome: 'Manages $35k/mo Ad Spend for E-commerce Brands'
  },
  {
    id: '5',
    name: 'Farhan Sheikh',
    role: 'Automation & AI Consultant',
    course: 'AI & Modern Technology',
    rating: 5,
    review: 'The AI and automation curriculum is unlike anything else available. We learned how to build custom workflow bots, automate complex operational flows, and leverage the Gemini API. My business workflow consulting business took off immediately.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
    outcome: 'Launched Independent AI Solutions Practice'
  },
  {
    id: '6',
    name: 'Sana Rehman',
    role: 'UI/UX & Frontend Specialist',
    course: 'Web Development',
    rating: 5,
    review: 'Every single class was 90% hands-on building. The mentors were constantly available to answer debugging questions and push our coding standards. OneSkills College is truly built for the modern digital economy.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
    outcome: 'Working with Silicon Valley Startup'
  }
];
