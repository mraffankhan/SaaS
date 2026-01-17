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
             <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
                <h2 className="text-3xl font-display font-bold text-white">Login Required</h2>
                <p className="text-gray-400 max-w-md">You need to login with Discord to manage teams and join tournaments.</p>
                <button
                  onClick={handleLogin}
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all"
                >
                  Login with Discord
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
    <div className="min-h-screen bg-brand-dark text-slate-200 font-sans selection:bg-brand-orange selection:text-brand-dark">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>

      <footer className="border-t border-white/5 mt-12 py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <p className="text-gray-500 text-sm">© 2024 FireLeague SaaS. Not affiliated with Garena Free Fire.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;