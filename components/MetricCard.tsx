
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  trend: string;
  trendType: 'up' | 'down';
  trendValue: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, trend, trendType, trendValue }) => {
  const isUp = trendType === 'up';
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1 min-w-[280px]">
      <h3 className="text-gray-500 text-sm font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-4">{value}</div>
      <div className="flex items-center space-x-2">
        <span className={isUp ? 'text-teal-500' : 'text-red-500'}>
          {isUp ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
            </svg>
          )}
        </span>
        <span className={`text-xs font-bold ${isUp ? 'text-teal-500' : 'text-red-500'}`}>{trendValue}</span>
        <span className="text-xs text-gray-400 font-medium">{trend}</span>
      </div>
    </div>
  );
};

export default MetricCard;
