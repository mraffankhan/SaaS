import React, { useState } from 'react';
import { MatchStats } from '../types';
import { generateMatchSummary } from '../services/geminiService';
import { Sparkles, X, Loader2, Share2, Copy } from 'lucide-react';

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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-brand-orange/30 rounded-2xl w-full max-w-lg shadow-2xl shadow-brand-orange/10 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2 text-brand-yellow">
            <Sparkles className="animate-pulse" size={24} />
            <h2 className="font-display text-3xl font-bold tracking-wide text-white">AI Match Coach</h2>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-2 text-center">
             <div className="bg-slate-800 p-3 rounded-lg border border-white/5">
                <div className="text-gray-400 text-xs uppercase font-bold">Kills</div>
                <div className="text-2xl font-bold text-brand-orange font-display">{stats.kills}</div>
             </div>
             <div className="bg-slate-800 p-3 rounded-lg border border-white/5">
                <div className="text-gray-400 text-xs uppercase font-bold">Damage</div>
                <div className="text-2xl font-bold text-brand-orange font-display">{stats.damage}</div>
             </div>
             <div className="bg-slate-800 p-3 rounded-lg border border-white/5">
                <div className="text-gray-400 text-xs uppercase font-bold">Place</div>
                <div className="text-2xl font-bold text-white font-display">#{stats.placement}</div>
             </div>
          </div>

          {!hasRun ? (
            <div className="text-center py-8">
              <p className="text-gray-300 mb-6">
                Ready to generate a professional caster-style summary of your performance on <span className="text-brand-yellow font-bold">{stats.map}</span>?
              </p>
              <button
                onClick={handleRunAnalysis}
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-brand-orange to-brand-yellow text-brand-dark font-bold font-display text-xl rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
                {loading ? "Analyzing Gameplay..." : "Generate AI Analysis"}
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-brand-orange/20 relative">
                <div className="absolute -top-3 left-4 bg-brand-dark px-2 text-brand-orange text-xs font-bold uppercase border border-brand-orange/20 rounded">
                    Gemini Analysis
                </div>
                <p className="text-gray-200 leading-relaxed italic">"{analysis}"</p>
              </div>
              
              <div className="flex gap-3 mt-4">
                 <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                    <Copy size={16} /> Copy
                 </button>
                 <button className="flex-1 py-2 bg-[#1DA1F2] hover:bg-[#1a94df] text-white rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                    <Share2 size={16} /> Tweet
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