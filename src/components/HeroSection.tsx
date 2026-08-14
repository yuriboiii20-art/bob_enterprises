import React, { useEffect, useRef } from 'react';
import { GlassButton } from '@/components/ui/glass-button';
import {
  ArrowDown,
  Compass,
  Building2
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.log("Autoplay notice:", err);
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[96vh] sm:min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-8 overflow-hidden"
    >
      {/* ==========================================================================
          BACKGROUND HERO VIDEO (Layer 0)
          ========================================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          id="heroBgVideo"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-living-room-with-contemporary-interior-design-41584-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ==========================================================================
          TRANSLUCENT CINEMATIC OVERLAY (Layer 1)
          ========================================================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/65 via-stone-950/45 to-[#FAF8F5]/90 z-[1] pointer-events-none" />

      {/* ==========================================================================
          HERO FOREGROUND CONTENT (Layer 10)
          ========================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Bold Brand Accent */}
          <div className="text-gold-300 font-sans font-bold tracking-[0.25em] text-xs sm:text-sm uppercase mb-4 drop-shadow-md">
            PRIME CONSTRUCTIONS &amp; INTERIORS
          </div>

          {/* Clean Modern Headline (No Underline, Clean Contemporary Geometry) */}
          <h1 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.1] mb-6 drop-shadow-xl">
            We Build. <span className="text-gold-300 font-normal">You Belong.</span>
          </h1>

          {/* Clean, Highly Readable Modern Caption */}
          <p className="font-sans text-stone-100 text-sm sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-md px-4">
            From thoughtfully designed homes to beautifully crafted interiors, we bring your dream space to life — from the first blueprint to the final detail.
          </p>

          {/* Primary Glass Button Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#portfolio">
              <GlassButton
                size="lg"
                variantStyle="gold"
                contentClassName="flex items-center gap-2.5 font-sans text-xs sm:text-sm font-bold tracking-wider uppercase px-8 sm:px-10 py-4 shadow-2xl"
              >
                <span>View Signature Works</span>
                <Compass className="w-4 h-4" />
              </GlassButton>
            </a>

            <a href="#about">
              <GlassButton
                size="lg"
                variantStyle="default"
                contentClassName="flex items-center gap-2.5 font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground px-8 sm:px-10 py-4 shadow-2xl"
              >
                <span>About The Founder</span>
                <Building2 className="w-4 h-4 text-gold-600" />
              </GlassButton>
            </a>
          </div>

        </div>
      </div>

      {/* ==========================================================================
          BOTTOM SCROLL INDICATOR
          ========================================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex items-center justify-center pt-6">
        <a
          href="#about"
          className="flex items-center gap-1.5 text-stone-300 hover:text-gold-300 transition-colors font-sans font-bold text-xs uppercase tracking-[0.2em] drop-shadow-md"
          aria-label="Scroll to About Section"
        >
          <span>Explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
