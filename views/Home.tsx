import React from 'react';
import { MOCK_NEWS } from '../constants';
import { ArrowRight, Crosshair, ChevronDown } from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
    onNavigate: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-32 pb-24">
      {/* Chapter 1: The Call (Hero) */}
      <section className="relative h-[85vh] flex flex-col justify-center items-start border-l border-white/20 pl-8 md:pl-16">
        <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
           <Crosshair size={120} className="animate-spin-slow text-white" />
        </div>
        
        <div className="space-y-6 max-w-4xl relative z-10">
          <div className="flex items-center gap-4">
             <span className="h-[1px] w-12 bg-white"></span>
             <span className="text-gray-400 uppercase tracking-[0.3em] text-sm">Chapter 01</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-display font-bold text-white leading-[0.85] tracking-tight">
            FORGED IN <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-transparent">SHADOWS.</span>
          </h1>
          
          <p className="text-gray-400 text-xl font-light max-w-xl leading-relaxed border-l-2 border-white/10 pl-6">
            The arena has evolved. Welcome to the monochrome era of competitive Free Fire. 
            No distractions. Just pure skill, strategy, and glory.
          </p>
          
          <div className="pt-8">
            <button 
                onClick={() => onNavigate('tournaments')}
                className="group relative px-10 py-4 bg-transparent border border-white/30 hover:border-white text-white font-display text-2xl uppercase tracking-widest transition-all"
            >
                <span className="relative z-10">Enter The Arena</span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10 group-hover:text-black transition-colors"></span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-16 animate-bounce text-gray-600">
           <ChevronDown size={32} />
        </div>
      </section>

      {/* Chapter 2: Intel (News) */}
      <section className="relative">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
            <div>
                 <div className="flex items-center gap-4 mb-2">
                    <span className="h-[1px] w-8 bg-gray-600"></span>
                    <span className="text-gray-500 uppercase tracking-[0.2em] text-xs">Chapter 02</span>
                </div>
                <h2 className="text-5xl font-display font-bold text-white tracking-wide">INTEL FEED</h2>
            </div>
            <button className="text-white border-b border-white/50 hover:border-white pb-1 font-display text-xl tracking-wider flex items-center gap-2">
                ARCHIVE <ArrowRight size={16} />
            </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {MOCK_NEWS.map((news, index) => (
            <div key={news.id} className={`group bg-black/40 backdrop-blur-sm p-8 border-r border-white/10 hover:bg-white/5 transition-colors duration-500 ${index === 2 ? 'border-r-0' : ''}`}>
              <div className="mb-6 overflow-hidden h-48 relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                 <span className="text-[10px] font-bold text-white border border-white/30 px-2 py-1 uppercase tracking-widest">{news.category}</span>
                 <span className="text-[10px] text-gray-500 font-mono">{news.date}</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-white mb-4 leading-none group-hover:text-glow transition-all">{news.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{news.excerpt}</p>
              
              <div className="mt-6 pt-6 border-t border-white/5 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chapter 3: Squad (CTA) */}
      <section className="relative py-24 border-y border-white/10 overflow-hidden">
         <div className="absolute inset-0 bg-white/5 skew-y-3 scale-110"></div>
         
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-4">
                    <span className="h-[1px] w-8 bg-gray-600"></span>
                    <span className="text-gray-500 uppercase tracking-[0.2em] text-xs">Chapter 03</span>
                </div>
                <h2 className="text-6xl font-display font-bold text-white mb-6">ASSEMBLE THE SQUAD</h2>
                <p className="text-xl text-gray-400 font-light border-l border-white/20 pl-6">
                    Victory is not achieved alone. Recruit operatives, analyze performance, and dominate the leaderboards.
                </p>
             </div>
             
             <button onClick={() => onNavigate('teams')} className="h-20 w-20 md:h-32 md:w-32 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group">
                <span className="font-display text-xl font-bold tracking-widest group-hover:scale-110 transition-transform">GO</span>
             </button>
         </div>
      </section>
    </div>
  );
};

export default Home;