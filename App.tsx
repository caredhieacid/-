import React, { useState } from 'react';
import Dashboard from './screens/Dashboard';
import Learning from './screens/Learning';
import Stats from './screens/Stats';
import BookSelection from './screens/BookSelection';
import BottomNav from './components/BottomNav';
import { Screen } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentScreen} />;
      case 'learning':
        return <Learning onNavigate={setCurrentScreen} />;
      case 'stats':
        return <Stats onNavigate={setCurrentScreen} />;
      case 'books':
        return <BookSelection onNavigate={setCurrentScreen} />;
      case 'profile':
        // Reuse stats or dashboard for demo purposes as profile wasn't fully specified
        return <Dashboard onNavigate={setCurrentScreen} />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-white shadow-2xl">
      {renderScreen()}
      {/* Hide Bottom Nav on Learning Screen (Flashcard mode) */}
      {currentScreen !== 'learning' && (
        <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      )}
    </div>
  );
};

export default App;
