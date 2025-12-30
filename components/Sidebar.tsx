
import React from 'react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  return (
    <div className="w-64 bg-[#112222] h-screen text-white flex flex-col relative overflow-hidden shrink-0">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 256 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L256 512L0 1024V0Z" fill="white" />
        </svg>
      </div>

      <div className="p-8 flex items-center space-x-2 z-10 mb-8">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
           <div className="w-4 h-4 bg-[#112222] rounded-full"></div>
        </div>
        <span className="text-xl font-bold italic tracking-tighter">kloudspot</span>
      </div>

      <nav className="px-3 space-y-3 z-10 flex-1">
        <SidebarItem 
          label={ViewType.OVERVIEW} 
          active={currentView === ViewType.OVERVIEW} 
          onClick={() => onViewChange(ViewType.OVERVIEW)}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
        />
        <SidebarItem 
          label={ViewType.CROWD_ENTRIES} 
          active={currentView === ViewType.CROWD_ENTRIES} 
          onClick={() => onViewChange(ViewType.CROWD_ENTRIES)}
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>}
        />
      </nav>

      <div className="p-6 z-10 border-t border-white border-opacity-5">
         <div className="flex items-center space-x-2 text-xs text-gray-500 uppercase tracking-widest font-bold">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
            <span>System Online</span>
         </div>
      </div>
    </div>
  );
};

const SidebarItem: React.FC<{ label: string; active: boolean; onClick: () => void; icon: React.ReactNode }> = ({ label, active, onClick, icon }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
        active 
          ? 'bg-white bg-opacity-20 text-white shadow-lg' 
          : 'text-gray-400 hover:bg-white hover:bg-opacity-5 hover:text-white'
      }`}
    >
      <span className={`${active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{icon}</span>
      <span className="font-bold text-sm tracking-wide">{label}</span>
      {active && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"></div>
      )}
    </button>
  );
};

export default Sidebar;
