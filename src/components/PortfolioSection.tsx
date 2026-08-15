import React, { useState } from 'react';
import { Sparkles, X, ZoomIn } from 'lucide-react';

const projectImages = [
  { id: 1, src: '/projects/project1.jpg', alt: 'Makan Constructions Project 1' },
  { id: 2, src: '/projects/project2.jpg', alt: 'Makan Constructions Project 2' },
  { id: 3, src: '/projects/project3.jpg', alt: 'Makan Constructions Project 3' },
  { id: 4, src: '/projects/project4.jpg', alt: 'Makan Constructions Project 4' },
  { id: 5, src: '/projects/project5.jpg', alt: 'Makan Constructions Project 5' }
];

export const PortfolioSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-foreground/80 uppercase">
              Our Works &amp; Site Progress
            </span>
          </div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            Crafted Structures &amp; <span className="text-gold-600">Constructions</span>
          </h2>
        </div>

        {/* Pure Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectImages.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project.src)}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-stone-200 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-stone-200/80 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-2 h-[340px] sm:h-[400px]' : 'h-[280px] sm:h-[340px]'
              }`}
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Minimal Clean Hover Overlay */}
              <div className="absolute inset-0 bg-stone-950/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/90 text-stone-900 shadow-xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-5 h-5 text-gold-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Pure Image Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-stone-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors z-50 shadow-lg"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Full-view Image Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Makan Constructions Full Preview"
              className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
