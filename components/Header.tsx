
import React from 'react';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="h-14 bg-[#1e1e1e] flex items-center justify-between px-6 z-30 shadow-md">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-1.5">
           <div className="w-5 h-5 bg-gray-600 rounded-sm"></div>
           <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
        </div>
        <span className="text-sm font-medium text-white opacity-80 border-r border-gray-700 pr-4">Kloudspot - Test Task ...</span>
        <div className="flex items-center space-x-2 pl-2">
           <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
           <span className="text-xs text-gray-400 font-bold">LIVE STATUS</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex -space-x-2 mr-2">
          <div className="w-7 h-7 bg-blue-500 rounded-full border-2 border-[#1e1e1e]"></div>
          <div className="w-7 h-7 bg-purple-500 rounded-full border-2 border-[#1e1e1e]"></div>
        </div>
        
        <button 
          onClick={onLogout}
          className="text-[11px] font-bold bg-[#2c2c2c] text-white px-4 py-1.5 rounded-md hover:bg-gray-700 transition"
        >
          Log in or create account
        </button>
        
        <button className="flex items-center space-x-2 bg-white text-gray-800 text-[11px] font-bold px-4 py-1.5 rounded-md hover:bg-gray-100 transition">
           <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-3 h-3" alt="google" />
           <span>Continue with Google</span>
        </button>

        <div className="h-6 w-px bg-gray-700 mx-2"></div>

        <button className="p-1.5 text-gray-400 hover:text-white transition">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
        </button>

        <button className="p-1.5 text-gray-400 hover:text-white transition">
           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
