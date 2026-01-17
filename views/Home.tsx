import React from 'react';
import { MOCK_NEWS } from '../constants';
import { ArrowRight, Flame } from 'lucide-react';
import { ViewState } from '../types';

interface HomeProps {
    onNavigate: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://picsum.photos/1600/900?grayscale" 
          alt="Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
          <div className="flex items-center gap-2 text-brand-orange mb-4 animate-pulse">
            <Flame size={24} />
            <span className="font-bold tracking-widest uppercase">Season 12 Live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none mb-6">
            DOMINATE THE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">BATTLEGROUND</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-xl">
            Join the elite Free Fire community. Organize tournaments, build your dream squad, and analyze your matches with AI.
          </p>
          <button 
            onClick={() => onNavigate('tournaments')}
            className="bg-brand-orange text-brand-dark font-display text-2xl px-8 py-3 rounded-none skew-x-[-12deg] hover:bg-white transition-colors"
          >
            <div className="skew-x-[12deg]">JOIN TOURNAMENT</div>
          </button>
        </div>
      </section>

      {/* News Grid */}
      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-display font-bold text-white border-l-4 border-brand-orange pl-4">LATEST NEWS</h2>
            <button className="text-brand-orange flex items-center gap-1 hover:gap-2 transition-all">View All <ArrowRight size={16} /></button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_NEWS.map((news) => (
            <div key={news.id} className="group bg-brand-card rounded-xl overflow-hidden hover:translate-y-[-5px] transition-transform duration-300 border border-white/5 hover:border-brand-orange/50">
              <div className="h-48 overflow-hidden">
                <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                   <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">{news.category}</span>
                   <span className="text-xs text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-brand-yellow transition-colors">{news.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">{news.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-brand-orange to-brand-yellow rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-brand-dark shadow-lg shadow-brand-orange/20">
         <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-display font-bold mb-2">CREATE YOUR SQUAD</h2>
            <p className="font-medium text-lg opacity-90">Find teammates, scrim, and climb the leaderboards together.</p>
         </div>
         <button onClick={() => onNavigate('teams')} className="bg-brand-dark text-white px-8 py-3 rounded-lg font-bold font-display text-xl hover:bg-white hover:text-brand-dark transition-colors">
            MANAGE TEAM
         </button>
      </section>
    </div>
  );
};

export default Home;