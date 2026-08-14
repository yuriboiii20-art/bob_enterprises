import { useState } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutFounder } from './components/AboutFounder';
import { PortfolioSection } from './components/PortfolioSection';
import { FooterContact } from './components/FooterContact';

export function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-foreground flex flex-col selection:bg-gold-200 selection:text-foreground">
      {/* Animated Opening Splash Screen */}
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      {/* Top Header Navigation */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. HOME - Hero & Video Showcase */}
        <HeroSection />

        {/* 2. ABOUT - Founder's Picture, Experience & Philosophy */}
        <AboutFounder />

        {/* 3. PORTFOLIO - Curated Work Gallery with Filter & Modals */}
        <PortfolioSection />
      </main>

      {/* 4. CONTACT - Footer with Phone, WhatsApp, Socials & Inquiry */}
      <FooterContact />
    </div>
  );
}

export default App;
