import React from 'react';
import { ArbitrageOpportunity } from '../../types';
import { ArrowRight } from 'lucide-react';

interface ArbitrageOpportunitiesProps {
  opportunities: ArbitrageOpportunity[];
  onApply: (opportunity: ArbitrageOpportunity) => void;
}

const ArbitrageOpportunities = ({ opportunities, onApply }: ArbitrageOpportunitiesProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Arbitrage Opportunities</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b dark:border-gray-700">
              <th className="pb-3 text-gray-500 dark:text-gray-400">Buy</th>
              <th className="pb-3 text-gray-500 dark:text-gray-400">Price</th>
              <th className="pb-3 text-gray-500 dark:text-gray-400">Sell</th>
              <th className="pb-3 text-gray-500 dark:text-gray-400">Price</th>
              <th className="pb-3 text-gray-500 dark:text-gray-400">Profit</th>
              <th className="pb-3 text-gray-500 dark:text-gray-400">Action</th>
            </tr>
          </thead>
          <tbody>
            {opportunities.map((opp) => (
              <tr key={opp.id} className="border-b dark:border-gray-700">
                <td className="py-3 dark:text-white">{opp.buyExchange}</td>
                <td className="py-3 dark:text-white">${opp.buyPrice.toLocaleString()}</td>
                <td className="py-3 dark:text-white">{opp.sellExchange}</td>
                <td className="py-3 dark:text-white">${opp.sellPrice.toLocaleString()}</td>
                <td className="py-3 text-green-500">
                  {opp.profitPercentage.toFixed(2)}%
                </td>
                <td className="py-3">
                  <button
                    onClick={() => onApply(opp)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center space-x-2"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArbitrageOpportunities;