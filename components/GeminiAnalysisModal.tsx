import React, { useState } from 'react';
import { MatchStats } from '../types';
import { generateMatchSummary } from '../services/geminiService';
import { Sparkles, X, Loader2, Share2, Copy, Terminal } from 'lucide-react';

interface GeminiAnalysisModalProps {
  stats: MatchStats;
  playerName: string;
  isOpen: boolean;
  onClose: () => void;
}

const GeminiAnalysisModal: React.FC<GeminiAnalysisModalProps> = ({ stats, playerName, isOpen, onClose }) => {
  const [analysis, setAnalysis] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  const handleRunAnalysis = async () => {
    setLoading(true);
    const result = await generateMatchSummary(stats, playerName);
    setAnalysis(result);
    setLoading(false);
    setHasRun(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-black border border-white/20 w-full max-w-lg shadow-[0_0_50px_rgba(255,255,255,0.1)] relative">
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white"></div>
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-3">
            <Terminal className="text-white" size={20} />
            <h2 className="font-mono text-sm font-bold tracking-widest text-white uppercase">System Analysis // AI Core</h2>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10">
             <div className="bg-black p-4 text-center">
                <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Kills</div>
                <div className="text-2xl font-display font-bold text-white">{stats.kills}</div>
             </div>
             <div className="bg-black p-4 text-center">
                <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Damage</div>
                <div className="text-2xl font-display font-bold text-white">{stats.damage}</div>
             </div>
             <div className="bg-black p-4 text-center">
                <div className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Rank</div>
                <div className="text-2xl font-display font-bold text-white">#{stats.placement}</div>
             </div>
          </div>

          {!hasRun ? (
            <div className="text-center py-4">
              <p className="text-gray-400 font-mono text-xs mb-8 leading-relaxed">
                INITIALIZING PERFORMANCE REVIEW PROTOCOL FOR MAP: <span className="text-white">{stats.map.toUpperCase()}</span>.
                <br/>AWAITING USER CONFIRMATION...
              </p>
              <button
                onClick={handleRunAnalysis}
                disabled={loading}
                className="w-full py-4 bg-white text-black font-display font-bold text-xl tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 uppercase"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                {loading ? "Processing..." : "Run Analysis"}
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <div className="border border-white/20 p-6 relative bg-white/5 mb-6">
                 <div className="absolute top-0 left-0 bg-white text-black text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
                    Gemini Output
                </div>
                <p className="text-gray-300 font-mono text-sm leading-relaxed mt-2 typing-effect">
                    <span className="text-white opacity-50 mr-2">{'>'}</span>
                    {analysis}
                    <span className="animate-pulse ml-1">_</span>
                </p>
              </div>
              
              <div className="flex gap-4">
                 <button className="flex-1 py-3 border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors">
                    <Copy size={14} /> Copy Data
                 </button>
                 <button className="flex-1 py-3 border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors">
                    <Share2 size={14} /> Broadcast
                 </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default GeminiAnalysisModal;