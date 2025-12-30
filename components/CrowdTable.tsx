
import React, { useState, useMemo } from 'react';
import { MOCK_CROWD_DATA } from '../constants';

const CrowdTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSex, setFilterSex] = useState<'All' | 'Male' | 'Female'>('All');

  const filteredData = useMemo(() => {
    return MOCK_CROWD_DATA.filter(entry => {
      const matchesSearch = entry.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterSex === 'All' || entry.sex === filterSex;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterSex]);

  return (
    <div className="space-y-4">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        <div className="relative flex-1 max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </span>
          <input 
            type="text" 
            placeholder="Search by name..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white outline-none transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-gray-400 uppercase">Filter:</span>
          <div className="flex bg-gray-100 p-1 rounded-lg">
            {(['All', 'Male', 'Female'] as const).map((option) => (
              <button
                key={option}
                onClick={() => setFilterSex(option)}
                className={`px-3 py-1 text-xs font-bold rounded-md transition ${filterSex === option ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-8 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Visitor Name</th>
                <th className="px-8 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Sex</th>
                <th className="px-8 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest">Entry Timestamp</th>
                <th className="px-8 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredData.length > 0 ? (
                filteredData.map((entry) => (
                  <tr key={entry.id} className="hover:bg-teal-50 hover:bg-opacity-30 transition cursor-default group">
                    <td className="px-8 py-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={entry.avatar} 
                          alt={entry.name} 
                          className="w-9 h-9 rounded-full border border-gray-200 shadow-sm"
                        />
                        <span className="font-bold text-gray-800 text-sm">{entry.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${entry.sex === 'Male' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'}`}>
                        {entry.sex}
                      </span>
                    </td>
                    <td className="px-8 py-4">
                      <span className="text-gray-500 font-medium text-sm">{entry.entryTime}</span>
                    </td>
                    <td className="px-8 py-4 text-right">
                      <button className="p-2 text-gray-300 hover:text-teal-600 transition opacity-0 group-hover:opacity-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-8 py-12 text-center text-gray-400 italic">
                    No visitors found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
           <span className="text-xs font-bold text-gray-400">Total: {filteredData.length} visitors</span>
           <div className="flex space-x-2">
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50 disabled:opacity-50">Previous</button>
              <button className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-bold text-teal-600 hover:bg-teal-50">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdTable;
