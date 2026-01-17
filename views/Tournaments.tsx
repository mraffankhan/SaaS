import React, { useState } from 'react';
import { MOCK_TOURNAMENTS } from '../constants';
import { Tournament, MatchStats } from '../types';
import { Trophy, Calendar, Users, ChevronRight, PlayCircle, BarChart2 } from 'lucide-react';
import GeminiAnalysisModal from '../components/GeminiAnalysisModal';

const Tournaments: React.FC = () => {
  const [selectedTournament, setSelectedTournament] = useState<Tournament | null>(null);
  
  // State for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStats, setModalStats] = useState<MatchStats | null>(null);

  // Mock function to simulate clicking "Analyze" on a specific match result within a tournament
  const handleAnalyzeClick = () => {
    // In a real app, these stats would come from the match history database
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
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-5xl font-display font-bold text-white mb-2">TOURNAMENTS</h1>
           <p className="text-gray-400">Compete in verified community cups and official scrims.</p>
        </div>
        <div className="flex gap-2">
            <button className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-bold border border-white/10 hover:bg-slate-700">All</button>
            <button className="px-4 py-2 bg-transparent text-gray-400 rounded-lg text-sm font-bold border border-transparent hover:text-white">Live</button>
            <button className="px-4 py-2 bg-transparent text-gray-400 rounded-lg text-sm font-bold border border-transparent hover:text-white">Upcoming</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MOCK_TOURNAMENTS.map((t) => (
          <div key={t.id} className="bg-brand-card rounded-xl overflow-hidden border border-white/5 hover:border-brand-orange/50 transition-all group">
            <div className="h-40 relative">
               <img src={t.bannerUrl} alt={t.title} className="w-full h-full object-cover" />
               <div className="absolute top-4 right-4 bg-brand-dark/90 px-3 py-1 rounded text-xs font-bold uppercase text-white backdrop-blur-md">
                 {t.status}
               </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                 <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-orange transition-colors">{t.title}</h3>
                 <div className="text-brand-yellow font-bold flex items-center gap-1">
                    <Trophy size={16} /> {t.prizePool}
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                 <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} /> {t.date}
                 </div>
                 <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users size={16} /> {t.registeredTeams}/{t.maxTeams} Teams
                 </div>
              </div>

              {/* Bracket / Action Area */}
              <div className="border-t border-white/10 pt-4">
                {t.status === 'live' ? (
                   <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-xs font-bold text-gray-400 uppercase">Live Match Result</span>
                         <span className="text-xs text-red-500 font-bold flex items-center gap-1 animate-pulse"><div className="w-2 h-2 rounded-full bg-red-500"></div> LIVE</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-white mb-3">
                         <span>Team Elite</span>
                         <span className="font-mono text-gray-500">vs</span>
                         <span>Total Gaming</span>
                      </div>
                      <button 
                        onClick={handleAnalyzeClick}
                        className="w-full py-2 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange border border-brand-orange/30 rounded flex items-center justify-center gap-2 text-sm font-bold transition-colors"
                      >
                         <BarChart2 size={16} /> Analyze Match with AI
                      </button>
                   </div>
                ) : (
                    <button className="w-full py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                        View Details <ChevronRight size={16} />
                    </button>
                )}
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