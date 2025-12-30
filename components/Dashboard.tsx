
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import CrowdTable from './CrowdTable';
import Overview from './Overview';
import { ViewType } from '../types';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.OVERVIEW);

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc]">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 flex flex-col min-w-0 relative">
        <Header onLogout={onLogout} />
        
        <main className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12 pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">
                   <span>Platform</span>
                   <span>/</span>
                   <span>Avenue Mall</span>
                   <span>/</span>
                   <span className="text-teal-600">{currentView}</span>
                </div>
                <h1 className="text-3xl font-black text-gray-900 tracking-tight">{currentView}</h1>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 bg-white border border-gray-200 px-5 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition shadow-sm active:scale-95">
                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                   <span>Aug 24, 2024</span>
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-teal-600 text-white rounded-xl shadow-lg hover:bg-teal-700 transition active:scale-95">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
                </button>
              </div>
            </div>

            <div className="transition-opacity duration-300">
              {currentView === ViewType.OVERVIEW ? <Overview /> : <CrowdTable />}
            </div>
          </div>
        </main>

        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center bg-[#112222] rounded-2xl p-1.5 shadow-2xl z-50 border border-white border-opacity-10">
           <button 
             onClick={() => setCurrentView(ViewType.OVERVIEW)}
             className={`p-3 rounded-xl transition ${currentView === ViewType.OVERVIEW ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
             title="Overview"
           >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
           </button>
           <button 
             onClick={() => setCurrentView(ViewType.CROWD_ENTRIES)}
             className={`p-3 rounded-xl transition ${currentView === ViewType.CROWD_ENTRIES ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
             title="Crowd Entries"
           >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
           </button>
        </div>

        <div className="fixed bottom-8 right-8 z-50 hidden md:block">
           <button 
             onClick={handleRestart}
             className="group bg-[#112222] text-white flex items-center space-x-3 px-5 py-3 rounded-2xl font-bold text-sm shadow-2xl hover:bg-gray-900 transition active:scale-95 border border-white border-opacity-5"
           >
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              <span>System Refresh</span>
              <kbd className="bg-gray-700 text-[9px] px-1.5 py-0.5 rounded font-mono opacity-50 ml-2">R</kbd>
           </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
