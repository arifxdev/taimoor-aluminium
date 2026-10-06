import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { BlogPostItem } from '../types';
import { ArrowRight, Calendar, MessageSquare, X, BookOpen } from 'lucide-react';

export const BlogsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogPostItem | null>(null);

  return (
    <section id="blogs" className="py-20 lg:py-28 bg-white border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching Reference Image */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 block mb-2">
            Taimoor Aluminium
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading">
            <span className="text-neutral-900">Our Latest</span> <span className="text-neutral-500">Blogs</span>
          </h2>
          <div className="w-12 h-1 bg-neutral-300 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3-Card Grid matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden border border-neutral-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image with Category Badge overlay on top */}
              <div className="relative h-56 overflow-hidden bg-neutral-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Pill overlay badge matching reference image */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#10b981] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded shadow-xs">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-3 group-hover:text-[#d43764] transition-colors line-clamp-2 leading-snug font-heading">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  {/* Read More Link matching reference image */}
                  <button
                    onClick={() => setActiveArticle(post)}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read More »</span>
                  </button>

                  {/* Date & Comments footer matching reference image */}
                  <div className="flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-neutral-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3 text-neutral-400" />
                      {post.commentsCount === 0 ? 'No Comments' : `${post.commentsCount} Comments`}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-neutral-200">
            <div className="relative h-60">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 bg-neutral-900/60 hover:bg-neutral-900 text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 px-2 py-0.5 rounded">
                  {activeArticle.category}
                </span>
                <h3 className="text-xl font-bold font-heading mt-2">
                  {activeArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-4 text-xs text-neutral-500 pb-2 border-b border-neutral-100">
                <span>Published: {activeArticle.date}</span>
                <span>·</span>
                <span>By Taimoor Aluminium Technical Desk</span>
              </div>
              <div className="prose prose-sm text-neutral-700 leading-relaxed space-y-3">
                <p className="font-medium text-neutral-900">{activeArticle.excerpt}</p>
                <p>{activeArticle.content}</p>
                <p>
                  For free on-site architectural evaluation or custom fabrication inquiries in Gulshan-e-Hadeed Phase 2 and throughout Karachi, contact our 24/7 hotline at <strong>0333 1265727</strong>.
                </p>
              </div>
              <div className="pt-4 border-t border-neutral-200 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 text-xs font-bold text-white bg-[#193b48] rounded hover:bg-[#122c36]"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
