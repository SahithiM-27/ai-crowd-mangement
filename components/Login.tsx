
import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative h-screen w-full flex flex-col">
      {/* Top Header Bar */}
      <div className="bg-[#1e1e1e] h-12 flex items-center justify-between px-4 text-white z-20">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded"></div>
            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
          </div>
          <span className="text-sm font-medium opacity-80">Kloudspot - Test Task ...</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-blue-400 rounded-full border-2 border-gray-800"></div>
            <div className="w-6 h-6 bg-purple-400 rounded-full border-2 border-gray-800"></div>
          </div>
          <button className="text-xs bg-[#2c2c2c] px-3 py-1.5 rounded-md hover:bg-gray-700 transition">Log in or create account</button>
          <button className="flex items-center space-x-2 bg-white text-gray-800 text-xs px-3 py-1.5 rounded-md hover:bg-gray-100 transition">
             <img src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png" className="w-3 h-3" alt="google" />
             <span>Continue with Google</span>
          </button>
        </div>
      </div>

      {/* Main Hero Background */}
      <div 
        className="flex-1 bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url('https://picsum.photos/id/1/1920/1080?grayscale&blur=2')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="container mx-auto px-12 relative flex justify-between items-center h-full">
          {/* Hero Content */}
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
              Welcome to the <br />
              <span className="text-teal-400">Crowd Management System</span>
            </h1>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-[400px]">
            <div className="bg-[#1a2d2d] p-8 flex flex-col items-center justify-center relative">
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                <span className="text-2xl font-bold tracking-tight italic">kloudspot</span>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="relative">
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Log In *</label>
                <input 
                  type="text" 
                  defaultValue="Parking_solutions"
                  className="w-full border-b border-gray-300 py-2 focus:border-teal-500 outline-none transition font-medium" 
                />
              </div>
              <div className="relative">
                <label className="text-xs font-semibold text-gray-500 mb-1 block">Password *</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    defaultValue="********"
                    className="w-full border-b border-gray-300 py-2 focus:border-teal-500 outline-none transition font-medium pr-10" 
                  />
                  <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <button 
                onClick={onLogin}
                className="w-full bg-[#009688] text-white py-3 rounded-lg font-bold hover:bg-[#00796b] transition transform active:scale-[0.98] shadow-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-0 bg-black bg-opacity-40 rounded-full p-1 border border-white border-opacity-20">
           <button className="p-2 text-white opacity-60 hover:opacity-100"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
           <button className="p-2 text-white opacity-60 hover:opacity-100"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
        </div>
      </div>

      {/* Footer Restart */}
      <div className="absolute bottom-4 right-4 text-white flex items-center space-x-2 text-xs opacity-80 cursor-pointer">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        <span>Restart R</span>
      </div>
    </div>
  );
};

export default Login;
