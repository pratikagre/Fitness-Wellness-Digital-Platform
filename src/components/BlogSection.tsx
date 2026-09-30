import React, { useState } from 'react';
import type { BlogPost } from '../types';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowRight, 
  BookOpen, 
  Share2, 
  Sparkles,
  X
} from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = [
    'All',
    'Fitness',
    'Yoga',
    'Nutrition',
    'Meditation',
    'Sleep',
    'Mental Wellness',
    'Workplace Wellness',
    'Healthy Lifestyle'
  ];

  const filtered = activeCategory === 'All'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-24 bg-[#F8FAF9] dark:bg-[#080B12] relative border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              16. Evidence-Based Knowledge
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white font-display mt-4 mb-3">
              The Xanso Wellness Journal
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Science-backed insights on functional movement, circadian biology, nervous system down-regulation, and desk worker longevity.
            </p>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'bg-slate-200/70 hover:bg-slate-200 text-slate-700 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white border border-slate-300/60 dark:border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((post) => (
            <div
              key={post.id}
              onClick={() => setReadingPost(post)}
              className="rounded-3xl bg-white dark:bg-[#0E131E] border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1 shadow-sm dark:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent dark:from-[#0E131E] dark:via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-emerald-400 border border-emerald-500/30">
                    {post.category}
                  </span>

                  <span className="absolute bottom-3 right-4 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs text-slate-200 font-mono">
                    {post.readTime}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-transparent">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="w-full py-2.5 rounded-xl bg-slate-100 group-hover:bg-emerald-500 group-hover:text-slate-950 text-slate-800 dark:bg-white/5 dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-950 dark:text-emerald-400 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-200 dark:border-transparent">
                  <BookOpen className="w-4 h-4" />
                  <span>Read Full Article</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Article Full Reader Modal */}
        {readingPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-3xl bg-white dark:bg-[#0D121F] border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={readingPost.image} 
                  alt={readingPost.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0D121F] via-white/50 dark:via-[#0D121F]/40 to-transparent" />
                
                <button
                  onClick={() => setReadingPost(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-200 hover:text-white border border-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-extrabold text-xs mb-2 inline-block">
                    {readingPost.category}
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                    {readingPost.title}
                  </h2>
                </div>
              </div>

              {/* Author & Meta */}
              <div className="px-6 sm:px-8 py-4 border-b border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-900 dark:text-white">{readingPost.author}</span>
                  <span>({readingPost.authorRole})</span>
                </div>
                <span>{readingPost.date} · {readingPost.readTime}</span>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 max-h-[55vh] overflow-y-auto space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                {readingPost.content}
              </div>

              {/* Footer */}
              <div className="p-6 bg-slate-50 dark:bg-[#121724] border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {readingPost.tags.map((t, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setReadingPost(null)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white dark:text-slate-950 font-bold text-xs shadow-md transition-colors"
                >
                  Done Reading
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
