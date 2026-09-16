import type {Metadata} from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'OneSkills Academy | Learn Skills. Build Your Future.',
  description: 'Practical education that helps you turn knowledge into real-world skills, freelancing mastery, and high-impact career opportunities.',
  openGraph: {
    title: 'OneSkills Academy | Learn Skills. Build Your Future.',
    description: 'Practical education that helps you turn knowledge into real-world skills, freelancing mastery, and high-impact career opportunities.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneSkills Academy | Learn Skills. Build Your Future.',
    description: 'Practical education that helps you turn knowledge into real-world skills, freelancing mastery, and high-impact career opportunities.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth dark`}>
      <body className="bg-[#08080a] text-zinc-100 selection:bg-amber-500/30 selection:text-amber-200 antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
