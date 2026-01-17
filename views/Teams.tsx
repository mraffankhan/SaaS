import React, { useState } from 'react';
import { Shield, Plus, UserPlus, Save } from 'lucide-react';
import { MOCK_TEAMS } from '../constants';

const Teams: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [teamName, setTeamName] = useState('');

  return (
    <div className="max-w-4xl mx-auto">
       <div className="flex justify-between items-center mb-8">
         <div>
            <h1 className="text-5xl font-display font-bold text-white mb-2">MY SQUAD</h1>
            <p className="text-gray-400">Manage your roster, logo, and invites.</p>
         </div>
         <button 
            onClick={() => setIsCreating(!isCreating)}
            className="bg-brand-orange text-brand-dark px-6 py-2 rounded-lg font-bold hover:bg-white transition-colors flex items-center gap-2"
         >
            <Plus size={20} /> Create Team
         </button>
       </div>

       {isCreating && (
         <div className="bg-brand-card border border-brand-orange rounded-xl p-6 mb-8 animate-in fade-in slide-in-from-top-4">
            <h3 className="text-xl font-bold text-white mb-4">New Squad Registration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">Squad Name</label>
                  <input 
                    type="text" 
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-brand-orange outline-none"
                    placeholder="e.g. Crimson Vipers"
                  />
               </div>
               <div>
                  <label className="block text-gray-400 text-sm font-bold mb-2">Tag (3-4 chars)</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:border-brand-orange outline-none"
                    placeholder="e.g. CSV"
                    maxLength={4}
                  />
               </div>
            </div>
            <div className="flex justify-end gap-3">
               <button onClick={() => setIsCreating(false)} className="px-4 py-2 text-gray-400 hover:text-white">Cancel</button>
               <button className="px-6 py-2 bg-brand-orange text-brand-dark font-bold rounded-lg flex items-center gap-2">
                 <Save size={18} /> Save Squad
               </button>
            </div>
         </div>
       )}

       <div className="grid gap-4">
          {MOCK_TEAMS.map(team => (
             <div key={team.id} className="bg-slate-800/50 rounded-xl p-6 flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center overflow-hidden border-2 border-slate-600">
                      <img src={team.logoUrl} alt={team.name} className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <h3 className="text-2xl font-display font-bold text-white">{team.name} <span className="text-gray-500 text-lg">[{team.tag}]</span></h3>
                      <div className="flex gap-4 text-sm text-gray-400 mt-1">
                         <span>Wins: <span className="text-brand-yellow font-bold">{team.stats.wins}</span></span>
                         <span>Matches: <span className="text-white font-bold">{team.stats.matches}</span></span>
                      </div>
                   </div>
                </div>
                
                <div className="flex gap-3">
                   <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 text-gray-300" title="Manage Roster">
                      <Shield size={20} />
                   </button>
                   <button className="p-2 bg-slate-700 rounded-lg hover:bg-slate-600 text-brand-orange" title="Invite Player">
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