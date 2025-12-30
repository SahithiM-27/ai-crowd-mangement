
import React from 'react';

const OccupancyChart: React.FC = () => {
  // Mock path for the trend line
  const pathData = "M 0 160 Q 50 140 100 155 T 200 150 T 300 140 T 400 145 T 500 135 T 600 140 T 700 130 T 800 120";
  
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-gray-800 font-bold">Overall Occupancy</h3>
        <div className="flex items-center space-x-2">
           <div className="w-3 h-3 rounded-full bg-teal-500"></div>
           <span className="text-xs text-gray-500 font-medium">Occupancy</span>
        </div>
      </div>
      
      <div className="relative h-64 w-full">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-400 font-bold -ml-8">
           <span>250</span>
           <span>200</span>
           <span>150</span>
           <span>100</span>
           <span>50</span>
           <span>0</span>
        </div>

        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
           {[...Array(6)].map((_, i) => (
             <div key={i} className="w-full border-t border-dashed border-gray-400 h-px"></div>
           ))}
        </div>

        {/* The Graph */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
           <path 
             d={pathData} 
             fill="none" 
             stroke="#009688" 
             strokeWidth="3" 
             strokeLinecap="round" 
             className="drop-shadow-sm"
           />
           {/* Area Fill */}
           <path 
             d={`${pathData} V 256 H 0 Z`} 
             fill="url(#gradient)" 
             className="opacity-10"
           />
           <defs>
             <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
               <stop offset="0%" stopColor="#009688" />
               <stop offset="100%" stopColor="transparent" />
             </linearGradient>
           </defs>

           {/* Live Indicator Line */}
           <line x1="800" y1="0" x2="800" y2="256" stroke="#cc0000" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Live Badge */}
        <div className="absolute top-2 right-[calc(100%-812px)] bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded transform rotate-90 origin-left mt-2">
           LIVE
        </div>
      </div>

      <div className="mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center transform -rotate-90 absolute left-[-20px] top-1/2 -translate-y-1/2">
        Count
      </div>
    </div>
  );
};

export default OccupancyChart;
