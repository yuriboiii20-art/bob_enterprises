import React, { useState, useEffect } from 'react';
import { GlassButton } from '@/components/ui/glass-button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.querySelector(href) as HTMLElement;
    if (targetElement) {
      const navbarHeight = window.innerWidth < 768 ? 65 : 75;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-white/10 shadow-lg py-2'
          : 'bg-gradient-to-b from-stone-950/75 via-stone-950/40 to-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Makan Constructions Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group py-1"
          >
            <img
              src="/logo-white.png"
              alt="Makan Constructions and Interiors Logo"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-h-[90px] object-contain transition-transform group-hover:scale-105 filter drop-shadow-md"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sans font-bold text-xs tracking-[0.2em] text-white hover:text-gold-300 transition-colors duration-200 relative py-1 drop-shadow-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-block"
            >
              <GlassButton
                size="sm"
                variantStyle="gold"
                contentClassName="flex items-center gap-1.5 text-xs tracking-wider font-sans font-bold uppercase py-2 px-5 shadow-lg"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </GlassButton>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-stone-900/80 border border-white/20 text-white hover:bg-stone-800 transition-colors shadow-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`md:hidden fixed inset-x-0 top-[70px] bg-stone-950/98 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out shadow-2xl overflow-hidden ${
          mobileMenuOpen
            ? 'max-h-96 opacity-100 py-6 px-6'
            : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-sans font-bold text-sm tracking-[0.2em] text-white py-2 border-b border-white/10 flex items-center justify-between hover:text-gold-300 transition-colors"
            >
              <span>{item.label}</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400" />
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full block"
            >
              <GlassButton
                size="default"
                variantStyle="gold"
                className="w-full"
                contentClassName="w-full flex items-center justify-center gap-2 text-xs tracking-widest font-sans font-bold uppercase py-3"
              >
                <span>Book Direct Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </GlassButton>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
