
import React from 'react';
import MetricCard from './MetricCard';
import OccupancyChart from './OccupancyChart';
import { ZONE_DATA } from '../constants';

const Overview: React.FC = () => {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">Real-time Occupancy</h2>
          <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">Updated just now</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard 
            title="Live Occupancy" 
            value="734" 
            trend="than yesterday" 
            trendType="up" 
            trendValue="10% More" 
          />
          <MetricCard 
            title="Today's Footfall" 
            value="2,436" 
            trend="than yesterday" 
            trendType="down" 
            trendValue="10% Less" 
          />
          <MetricCard 
            title="Avg Dwell Time" 
            value="08min 30sec" 
            trend="than yesterday" 
            trendType="up" 
            trendValue="6% More" 
          />
        </div>
      </section>

      <section className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
        <OccupancyChart />
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-6 tracking-tight">Zone Breakdown</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ZONE_DATA.map((zone, idx) => {
            const percentage = Math.round((zone.count / zone.capacity) * 100);
            return (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-teal-100 transition">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-bold text-gray-800">{zone.name}</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Current Capacity</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-gray-900">{zone.count}</span>
                    <span className="text-gray-300 text-sm ml-1">/ {zone.capacity}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${zone.color} transition-all duration-1000 ease-out`} 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Usage Status</span>
                  <span className={`text-[10px] font-bold uppercase ${percentage > 90 ? 'text-red-500' : 'text-teal-500'}`}>
                    {percentage}% {percentage > 90 ? 'Critical' : 'Normal'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Overview;
