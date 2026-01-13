import React from 'react';
import { Home, BookOpen, BarChart2, User } from 'lucide-react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const getIconColor = (screen: Screen, activeColor: string = 'text-mint') => {
    return currentScreen === screen ? activeColor : 'text-gray-400';
  };

  // Determine active color based on screen context, though usually navigations have a consistent active color.
  // We'll stick to a primary color or vary it if we want to match the screen's theme.
  // For consistency, let's use the 'Mint' as the primary app color for navigation, 
  // or 'Orange' if we are on the books screen (as per screenshot).
  
  let activeColorClass = 'text-mint';
  if (currentScreen === 'books') activeColorClass = 'text-orange';
  if (currentScreen === 'stats') activeColorClass = 'text-blue';

  const NavItem = ({ screen, icon: Icon, label }: { screen: Screen; icon: React.ElementType; label: string }) => (
    <button 
      onClick={() => onNavigate(screen)}
      className={`flex flex-col items-center gap-1 w-16 transition-colors ${currentScreen === screen ? activeColorClass : 'text-gray-400 hover:text-gray-600'}`}
    >
      <Icon size={26} strokeWidth={currentScreen === screen ? 2.5 : 2} />
      <span className="text-[10px] font-bold">{label}</span>
    </button>
  );

  return (
    <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 pb-safe pt-2 px-6 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.05)] rounded-t-3xl z-30">
      <div className="flex justify-between items-center h-16 pb-2">
        <NavItem screen="dashboard" icon={Home} label="首页" />
        <NavItem screen="books" icon={BookOpen} label="词书" />
        <NavItem screen="stats" icon={BarChart2} label="统计" />
        <NavItem screen="profile" icon={User} label="我的" />
      </div>
    </div>
  );
};

export default BottomNav;
