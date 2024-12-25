import React from 'react';
import { Power } from 'lucide-react';
import { BotStats } from '../../types';

interface BotStatusProps {
  stats: BotStats;
  onToggle: () => void;
}

const BotStatus = ({ stats, onToggle }: BotStatusProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold dark:text-white">Bot Status</h2>
        <button
          onClick={onToggle}
          className={`px-6 py-2 rounded-lg flex items-center space-x-2 ${
            stats.isActive
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          <Power className="w-5 h-5" />
          <span>{stats.isActive ? 'Stop Bot' : 'Start Bot'}</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Trades Today</p>
          <p className="text-2xl font-bold dark:text-white">{stats.tradesCompleted}</p>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Profit</p>
          <p className="text-2xl font-bold text-green-500">${stats.totalProfit}</p>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Connected Exchanges</p>
          <p className="text-2xl font-bold dark:text-white">{stats.connectedExchanges}</p>
        </div>
      </div>
    </div>
  );
};

export default BotStatus;