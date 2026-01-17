import React from 'react';
import { ViewState, User } from '../types';
import { Gamepad2, Trophy, Users, LayoutDashboard, LogIn, LogOut } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, user, onLogin, onLogout }) => {
  const navItemClass = (view: ViewState) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 font-display text-xl tracking-wide ${
      currentView === view
        ? 'bg-brand-orange text-brand-dark'
        : 'text-gray-400 hover:text-white hover:bg-white/10'
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <Gamepad2 className="h-10 w-10 text-brand-orange mr-2" />
            <span className="font-display text-4xl font-bold text-white tracking-wider">FIRE<span className="text-brand-orange">LEAGUE</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-2">
            <button onClick={() => onNavigate('home')} className={navItemClass('home')}>
              <LayoutDashboard size={20} /> Home
            </button>
            <button onClick={() => onNavigate('tournaments')} className={navItemClass('tournaments')}>
              <Trophy size={20} /> Tournaments
            </button>
            <button onClick={() => onNavigate('teams')} className={navItemClass('teams')}>
              <Users size={20} /> Teams
            </button>
          </div>

          {/* Auth Button */}
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center gap-4">
                 <div className="hidden sm:flex flex-col items-end">
                    <span className="text-sm font-bold text-white">{user.username}</span>
                    <span className="text-xs text-gray-400 uppercase">{user.role}</span>
                 </div>
                 <button 
                  onClick={onLogout}
                  className="flex items-center gap-2 bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white px-4 py-2 rounded-lg transition-all font-display text-lg"
                 >
                   <LogOut size={18} /> Logout
                 </button>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 rounded-lg transition-all font-bold shadow-lg hover:shadow-[#5865F2]/50"
              >
                <LogIn size={20} /> 
                <span className="hidden sm:inline">Login with Discord</span>
                <span className="sm:hidden">Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;