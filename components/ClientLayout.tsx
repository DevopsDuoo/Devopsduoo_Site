'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalEnhancements from '@/components/GlobalEnhancements';
import PageTransition from '@/components/PageTransition';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <GlobalEnhancements />
      <Navbar />
      <PageTransition>
        <main className="min-h-screen">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </ThemeProvider>
  );
}
