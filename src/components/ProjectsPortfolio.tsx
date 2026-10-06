import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { Maximize2, X, MapPin, Calendar, CheckCircle } from 'lucide-react';

export const ProjectsPortfolio: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'windows' | 'facades' | 'doors' | 'partitions'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching Reference Image */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading">
            <span className="text-neutral-900">Our Latest</span> <span className="text-neutral-500">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-neutral-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['all', 'windows', 'facades', 'doors', 'partitions'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 text-xs font-bold capitalize rounded-full transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-[#193b48] text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat === 'all' ? 'All Installations' : cat}
            </button>
          ))}
        </div>

        {/* Layout Replicating Reference Image: 1 Large Left + 2 Stacked Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Large Column (Workshop / Master Fabrication Craftsman) */}
          <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl shadow-lg border border-neutral-200 min-h-[440px] lg:min-h-[620px]">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
              alt="Taimoor Aluminium Workshop & Site Fabrication"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded">
                Custom Workshop Engineering
              </span>
              <h3 className="text-xl font-bold font-heading mt-2">
                Precision Aluminum Milling & Assembly
              </h3>
              <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                Every frame profile is cut with millimeter precision to withstand Karachi coastal winds and ensure thermal insulation.
              </p>
              <button
                onClick={() => setActiveModalProject(PROJECTS[0])}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-xs px-3 py-1.5 rounded transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Project Specs</span>
              </button>
            </div>
          </div>

          {/* Right Column: 2 Stacked Modern Villa Glass Facade Photos */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Top Stacked Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-neutral-200 h-[260px] lg:h-[295px]">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary Residence Floor to Ceiling Windows"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    Gulshan-e-Hadeed Phase 2
                  </span>
                  <h4 className="text-lg font-bold font-heading">
                    Double-Glazed Sliding Glass Facade
                  </h4>
                </div>
                <button
                  onClick={() => setActiveModalProject(PROJECTS[0])}
                  className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-xs rounded-full text-white transition-colors"
                  aria-label="Enlarge project"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Stacked Image */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-neutral-200 h-[260px] lg:h-[295px]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural Villa Night Glow Aluminium Glazing"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-5 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    Commercial & Luxury Residential
                  </span>
                  <h4 className="text-lg font-bold font-heading">
                    Architectural Glass Curtain Wall & Patio Doors
                  </h4>
                </div>
                <button
                  onClick={() => setActiveModalProject(PROJECTS[2])}
                  className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-xs rounded-full text-white transition-colors"
                  aria-label="Enlarge project"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Project Lightbox Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200">
            <div className="relative h-72">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-900/70 hover:bg-neutral-900 text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl font-bold text-neutral-900 font-heading">
                  {activeModalProject.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-4 text-xs text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <span>{activeModalProject.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#193b48]" />
                  <span>Completed: {activeModalProject.completionYear}</span>
                </div>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed bg-neutral-50 p-3.5 rounded-lg border border-neutral-100">
                {activeModalProject.scope}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 text-xs font-bold text-white bg-[#193b48] rounded hover:bg-[#122c36]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
