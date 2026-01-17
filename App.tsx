import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Tournaments from './views/Tournaments';
import Teams from './views/Teams';
import { ViewState, User } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [user, setUser] = useState<User | null>(null);

  // Simulated Discord Auth Logic
  const handleLogin = () => {
    // In a real app, this would redirect to Discord OAuth URL
    // Here we simulate a successful callback
    const mockUser: User = {
      id: 'discord_123',
      username: 'ProGamer_XYZ',
      discordId: '123456789',
      avatarUrl: 'https://picsum.photos/50/50',
      role: 'player'
    };
    setUser(mockUser);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={setCurrentView} />;
      case 'tournaments':
        return <Tournaments />;
      case 'teams':
        if (!user) {
          // Protected route simulation
          return (
             <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-8 animate-in fade-in duration-700">
                <div className="relative">
                   <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full"></div>
                   <h2 className="relative text-5xl font-display font-bold text-white tracking-widest uppercase">Login Required</h2>
                </div>
                <p className="text-gray-400 max-w-md text-lg font-light">Access to team management and tournament brackets is restricted to verified operatives.</p>
                <button
                  onClick={handleLogin}
                  className="group relative px-8 py-3 bg-white text-black font-display text-xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">Login with Discord</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
             </div>
          );
        }
        return <Teams />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-white selection:text-black">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {renderView()}
      </main>

      <footer className="border-t border-white/10 mt-24 py-12 bg-black/80 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-gray-500 text-sm font-light tracking-widest uppercase">© 2024 FireLeague SaaS. Operative System.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;