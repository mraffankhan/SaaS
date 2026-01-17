import React, { useState } from 'react';
import { Shield, Plus, UserPlus, Save, X } from 'lucide-react';
import { MOCK_TEAMS } from '../constants';

const Teams: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [teamName, setTeamName] = useState('');

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in duration-500">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
         <div>
            <h1 className="text-6xl font-display font-bold text-white mb-2 tracking-tight">OPERATIONS</h1>
            <p className="text-gray-400 font-light tracking-wide">Manage your squad roster and assets.</p>
         </div>
         <button 
            onClick={() => setIsCreating(!isCreating)}
            className="mt-6 md:mt-0 bg-white text-black px-6 py-3 font-display text-xl font-bold uppercase tracking-widest hover:bg-gray-300 transition-colors flex items-center gap-2"
         >
            <Plus size={20} /> New Unit
         </button>
       </div>

       {isCreating && (
         <div className="bg-black border border-white/30 p-8 mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-50"><Shield size={120} strokeWidth={0.5} /></div>
            
            <h3 className="text-2xl font-display font-bold text-white mb-8 tracking-wide relative z-10">REGISTER NEW UNIT</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Unit Designation (Name)</label>
                  <input 
                    type="text" 
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white text-xl font-display focus:border-white outline-none transition-colors placeholder:text-gray-800"
                    placeholder="ENTER NAME"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tag Identifier</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white text-xl font-display focus:border-white outline-none transition-colors placeholder:text-gray-800"
                    placeholder="TAG"
                    maxLength={4}
                  />
               </div>
            </div>
            
            <div className="flex justify-end gap-6 relative z-10">
               <button onClick={() => setIsCreating(false)} className="px-6 py-2 text-gray-500 hover:text-white text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2">
                  <X size={16} /> Cancel
               </button>
               <button className="px-8 py-2 border border-white text-white hover:bg-white hover:text-black font-display text-lg tracking-widest transition-all flex items-center gap-2">
                 <Save size={18} /> Confirm
               </button>
            </div>
         </div>
       )}

       <div className="grid gap-6">
          {MOCK_TEAMS.map(team => (
             <div key={team.id} className="group bg-white/5 border border-white/5 hover:border-white/30 p-6 flex flex-col md:flex-row items-center justify-between transition-all duration-300">
                <div className="flex items-center gap-6 w-full md:w-auto">
                   <div className="w-20 h-20 bg-black border border-white/10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                      <img src={team.logoUrl} alt={team.name} className="w-full h-full object-cover opacity-80" />
                   </div>
                   <div>
                      <h3 className="text-3xl font-display font-bold text-white tracking-wide">{team.name} <span className="text-gray-600 text-xl font-mono">[{team.tag}]</span></h3>
                      <div className="flex gap-6 text-xs font-mono text-gray-400 mt-2 uppercase tracking-wider">
                         <span>Wins: <span className="text-white">{team.stats.wins}</span></span>
                         <span>Matches: <span className="text-white">{team.stats.matches}</span></span>
                      </div>
                   </div>
                </div>
                
                <div className="flex gap-4 mt-6 md:mt-0 w-full md:w-auto justify-end">
                   <button className="p-3 border border-white/10 hover:border-white text-gray-400 hover:text-white transition-all" title="Manage Roster">
                      <Shield size={20} />
                   </button>
                   <button className="p-3 border border-white/10 hover:border-white text-gray-400 hover:text-white transition-all" title="Invite Player">
                      <UserPlus size={20} />
                   </button>
                </div>
             </div>
          ))}
       </div>
    </div>
  );
};

export default Teams;