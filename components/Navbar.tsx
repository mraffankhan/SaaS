import React from 'react';
import { ViewState, User } from '../types';
import { Gamepad2, Trophy, Users, LayoutDashboard, LogIn, LogOut, Disc } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, user, onLogin, onLogout }) => {
  const navItemClass = (view: ViewState) =>
    `relative px-4 py-2 transition-all duration-300 font-display text-xl tracking-widest uppercase group ${
      currentView === view
        ? 'text-white'
        : 'text-gray-500 hover:text-white'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="mr-3 p-2 border border-white/20 group-hover:border-white transition-colors rounded-sm">
                 <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-4xl font-bold text-white tracking-[0.2em]">FIRE<span className="text-gray-500 group-hover:text-white transition-colors">LEAGUE</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => onNavigate('home')} className={navItemClass('home')}>
              <span className="flex items-center gap-2"><LayoutDashboard size={18} /> Home</span>
              {currentView === 'home' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white shadow-[0_0_10px_white]"></span>}
            </button>
            <button onClick={() => onNavigate('tournaments')} className={navItemClass('tournaments')}>
              <span className="flex items-center gap-2"><Trophy size={18} /> Tournaments</span>
              {currentView === 'tournaments' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white shadow-[0_0_10px_white]"></span>}
            </button>
            <button onClick={() => onNavigate('teams')} className={navItemClass('teams')}>
              <span className="flex items-center gap-2"><Users size={18} /> Teams</span>
              {currentView === 'teams' && <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white shadow-[0_0_10px_white]"></span>}
            </button>
          </div>

          {/* Auth Button */}
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center gap-6">
                 <div className="hidden sm:flex flex-col items-end border-r border-white/20 pr-6">
                    <span className="text-sm font-bold text-white tracking-wider">{user.username}</span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest">{user.role}</span>
                 </div>
                 <button 
                  onClick={onLogout}
                  className="text-gray-500 hover:text-white transition-colors"
                  title="Logout"
                 >
                   <LogOut size={20} />
                 </button>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="flex items-center gap-3 bg-white text-black px-6 py-2 rounded-sm font-display text-lg font-bold tracking-wider hover:bg-gray-300 transition-all"
              >
                <Disc size={20} /> 
                <span className="hidden sm:inline">DISCORD ACCESS</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;