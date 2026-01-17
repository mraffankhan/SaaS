import React, { useState } from 'react';
import { MOCK_TOURNAMENTS } from '../constants';
import { Tournament, MatchStats } from '../types';
import { Trophy, Calendar, Users, ChevronRight, BarChart2, Radio } from 'lucide-react';
import GeminiAnalysisModal from '../components/GeminiAnalysisModal';

const Tournaments: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStats, setModalStats] = useState<MatchStats | null>(null);

  const handleAnalyzeClick = () => {
    const sampleStats: MatchStats = {
      kills: 12,
      damage: 4520,
      placement: 1,
      revives: 2,
      map: 'Purgatory',
      duration: '18:22'
    };
    setModalStats(sampleStats);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-8 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
        <div>
           <h1 className="text-6xl font-display font-bold text-white mb-2 tracking-tight">TOURNAMENTS</h1>
           <p className="text-gray-400 font-light tracking-wide">Sanctioned events and community scrimmages.</p>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
            {['ALL', 'LIVE', 'UPCOMING'].map((filter) => (
                <button key={filter} className="text-xs font-bold tracking-[0.2em] text-gray-500 hover:text-white border-b border-transparent hover:border-white transition-all pb-1">
                    {filter}
                </button>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {MOCK_TOURNAMENTS.map((t) => (
          <div key={t.id} className="group relative bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
            {/* Background Image Effect */}
            <div className="absolute inset-0 z-0">
                <img src={t.bannerUrl} alt="" className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 flex flex-col md:flex-row justify-between items-stretch">
                <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-3">
                        {t.status === 'live' && (
                            <span className="flex items-center gap-2 px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest">
                                <Radio size={12} className="animate-pulse" /> Live Now
                            </span>
                        )}
                        {t.status === 'upcoming' && (
                             <span className="px-2 py-1 border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest">
                                Upcoming
                            </span>
                        )}
                         <span className="text-gray-500 text-xs font-mono uppercase">{t.date}</span>
                    </div>

                    <div>
                        <h3 className="text-4xl font-display font-bold text-white mb-2">{t.title}</h3>
                        <div className="flex items-center gap-6 text-sm text-gray-400 font-light">
                            <span className="flex items-center gap-2"><Trophy size={14} /> Prize Pool: <span className="text-white font-bold">{t.prizePool}</span></span>
                            <span className="flex items-center gap-2"><Users size={14} /> {t.registeredTeams}/{t.maxTeams} Squads</span>
                        </div>
                    </div>

                    {/* Live Match Context */}
                    {t.status === 'live' && (
                        <div className="bg-white/5 border-l-2 border-white p-4 max-w-md backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-2 text-xs text-gray-400 uppercase tracking-widest">
                                <span>Current Match</span>
                                <span>Semi-Finals</span>
                            </div>
                            <div className="flex items-center justify-between font-display text-xl text-white mb-4">
                                <span>TEAM ELITE</span>
                                <span className="text-sm font-sans text-gray-600">VS</span>
                                <span>TOTAL GAMING</span>
                            </div>
                            <button 
                                onClick={handleAnalyzeClick}
                                className="w-full py-2 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                            >
                                <BarChart2 size={14} /> Analyze Data
                            </button>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex flex-col justify-center border-l border-white/10 pl-8 ml-8">
                     <button className="group/btn h-16 w-16 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <ChevronRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && modalStats && (
        <GeminiAnalysisModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            stats={modalStats} 
            playerName="PlayerOne"
        />
      )}
    </div>
  );
};

export default Tournaments;