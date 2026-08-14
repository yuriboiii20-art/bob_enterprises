import { useState } from 'react';
import { GlassButton } from '@/components/ui/glass-button';
import { Sparkles, Eye, X, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  categoryTag: 'all' | 'residential' | 'millwork' | 'bedroom' | 'renovation';
  location: string;
  image: string;
  area: string;
  duration: string;
  description: string;
  highlights: string[];
}

const portfolioProjects: Project[] = [
  {
    id: 1,
    title: "Geometric Backlit Marble & Timber Media Console",
    category: "Living Room & Custom Joinery",
    categoryTag: "millwork",
    location: "Bangalore",
    image: "/projects/project1.jpg",
    area: "3,200 sq.ft",
    duration: "6 Weeks",
    description: "Custom geometric bookmatched marble wall cladding with embedded warm cove backlighting, handcrafted natural timber display shelving, and floating audio-visual cabinetry.",
    highlights: ["Bookmatched Backlit Marble Core", "Integrated Cove Lighting Channels", "Smoked Teak Display Shelving"]
  },
  {
    id: 2,
    title: "Emerald Accent Feature Wall & Floating Vanity",
    category: "Bespoke Interior & Wall Paneling",
    categoryTag: "residential",
    location: "Bangalore",
    image: "/projects/project2.jpg",
    area: "2,800 sq.ft",
    duration: "5 Weeks",
    description: "Deep emerald textured marbleized feature panel paired with a cantilevered stone vanity and an integrated full-length LED touch-illuminated dressing mirror.",
    highlights: ["Emerald Textured Feature Wall", "Touch-Illuminated LED Mirror", "Cantilevered Floating Console"]
  },
  {
    id: 3,
    title: "Master Suite Platform Bed & Gold Brass Inlays",
    category: "Luxury Bedroom Suite",
    categoryTag: "bedroom",
    location: "Bangalore",
    image: "/projects/project3.jpg",
    area: "3,600 sq.ft",
    duration: "7 Weeks",
    description: "Custom architectural platform bed with warm teak inlays, surrounded by an emerald gloss feature wall with brushed brass vertical striations and floor-to-ceiling wardrobes.",
    highlights: ["Custom Low-Profile Platform Bed", "Brushed Brass Accent Striations", "Floor-to-Ceiling Gloss Wardrobes"]
  },
  {
    id: 4,
    title: "Fluted Wood Acoustic Wall & Arch Vanity Dressing",
    category: "Bespoke Dressing & Millwork",
    categoryTag: "renovation",
    location: "Bangalore",
    image: "/projects/project4.jpg",
    area: "2,400 sq.ft",
    duration: "4 Weeks",
    description: "Artisanal vertical fluted timber acoustic paneling framing a sculptural arch-cut vanity mirror with Italian marble pull-out drawers and concealed magnetic cabinetry.",
    highlights: ["Solid Fluted Timber Paneling", "Geometric Arch Vanity Mirror", "Italian Calacatta Drawers"]
  }
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'millwork' | 'bedroom' | 'renovation'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeTab === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.categoryTag === activeTab || (activeTab === 'residential' && p.categoryTag !== 'renovation'));

  return (
    <section id="portfolio" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-20 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-foreground/80 uppercase">
              Our Completed Works
            </span>
          </div>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            Crafted Spaces &amp; <span className="text-gold-600">Interiors</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
            Explore authentic completed interior architecture and construction projects delivered by Prime Constructions and Interiors.
          </p>
        </div>

        {/* Filter Tabs - Compact Sizing */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'millwork', label: 'Living & Media' },
            { key: 'bedroom', label: 'Master Suites' },
            { key: 'renovation', label: 'Dressing & Joinery' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-stone-900 text-stone-50 shadow-md scale-105'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 hover:text-stone-900 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid - Reduced Card Size & Compact Proportions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Frame - Compact Aspect Ratio */}
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-white/80 shadow-sm">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gold-700">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-stone-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
                  <GlassButton
                    size="sm"
                    variantStyle="gold"
                    contentClassName="flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider py-2 px-4 shadow-lg"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </GlassButton>
                </div>
              </div>

              {/* Card Meta Content - Reduced Padding */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-gold-600 text-[11px] font-bold mb-1.5 font-sans tracking-wide">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location} &bull; {project.area}</span>
                  </div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-foreground group-hover:text-gold-600 transition-colors leading-snug line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-foreground group-hover:text-gold-600 transition-colors font-sans tracking-wider">
                  <span>Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform text-gold-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto border border-stone-200 shadow-2xl p-5 sm:p-7 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-foreground transition-colors z-10"
              aria-label="Close project modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4 shadow-sm bg-stone-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-gold-600">
                  {selectedProject.category}
                </span>
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-foreground mt-0.5">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-stone-500 mt-1.5">
                  <span className="flex items-center gap-1 font-semibold text-stone-700">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    {selectedProject.location}
                  </span>
                  <span>&bull;</span>
                  <span>Area: <strong className="text-stone-800">{selectedProject.area}</strong></span>
                  <span>&bull;</span>
                  <span>Timeline: <strong className="text-stone-800">{selectedProject.duration}</strong></span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200/70 my-1">
                <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-foreground mb-2">
                  Key Craftsmanship &amp; Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProject.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-stone-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-stone-100 mt-1">
                <p className="text-xs text-stone-500">
                  Interested in getting similar custom interiors built?
                </p>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto"
                >
                  <GlassButton
                    size="sm"
                    variantStyle="gold"
                    contentClassName="w-full sm:w-auto flex items-center justify-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5"
                  >
                    <span>Inquire About This Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </GlassButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
