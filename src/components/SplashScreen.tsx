import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'initial' | 'flash' | 'glow' | 'exit' | 'hidden'>('initial');

  useEffect(() => {
    // Sequence timing
    const t1 = setTimeout(() => setStage('flash'), 200);
    const t2 = setTimeout(() => setStage('glow'), 900);
    const t3 = setTimeout(() => setStage('exit'), 2100);
    const t4 = setTimeout(() => {
      setStage('hidden');
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (stage === 'hidden') return null;

  return (
    <div
      onClick={() => {
        setStage('hidden');
        if (onComplete) onComplete();
      }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0D10] transition-all duration-700 ease-out cursor-pointer ${
        stage === 'exit' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Golden Ambient Radiant Glow */}
      <div
        className={`absolute w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-radial from-gold-400/30 via-gold-600/10 to-transparent blur-3xl transition-all duration-1000 ${
          stage === 'flash' || stage === 'glow' ? 'scale-125 opacity-100' : 'scale-75 opacity-20'
        }`}
      />

      {/* Center Animated Logo Container */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-lg w-full text-center">
        
        {/* Flash Flare Effect */}
        <div
          className={`absolute inset-0 bg-white rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
            stage === 'flash' ? 'opacity-40 scale-150' : 'opacity-0 scale-50'
          }`}
        />

        {/* White Logo Image with Scale & Glow Transition */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            stage === 'initial'
              ? 'opacity-0 scale-75 blur-sm'
              : stage === 'flash'
              ? 'opacity-100 scale-110 blur-0 drop-shadow-[0_0_35px_rgba(255,255,255,0.9)]'
              : 'opacity-100 scale-100 drop-shadow-[0_0_20px_rgba(214,191,153,0.6)]'
          }`}
        >
          <img
            src="/logo-white.png"
            alt="Makan Constructions and Interiors Logo"
            className="w-72 sm:w-96 md:w-[420px] h-auto object-contain mx-auto"
          />
        </div>

        {/* Subtle Animated Progress Shimmer Line */}
        <div className="w-48 sm:w-64 h-[2px] bg-stone-800 rounded-full mt-8 overflow-hidden relative">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent transition-all duration-1500 ease-in-out ${
              stage !== 'initial' ? 'w-full translate-x-0' : 'w-0 -translate-x-full'
            }`}
          />
        </div>

        <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-stone-500 mt-4 animate-pulse">
          Crafting Monolithic Spaces
        </span>
      </div>
    </div>
  );
};
