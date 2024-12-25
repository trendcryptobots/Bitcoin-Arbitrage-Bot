import React from 'react';
import { Exchange } from '../../types';

interface LivePricesProps {
  exchanges: Exchange[];
}

const LivePrices = ({ exchanges }: LivePricesProps) => {
  const lowestPrice = Math.min(...exchanges.map(e => e.price));
  const highestPrice = Math.max(...exchanges.map(e => e.price));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Live Market Prices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {exchanges.map((exchange) => (
          <div
            key={exchange.name}
            className="p-4 rounded-lg border"
            style={{
              borderColor: exchange.price === lowestPrice ? '#10B981' : 
                          exchange.price === highestPrice ? '#EF4444' : '#E5E7EB'
            }}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium dark:text-white">{exchange.name}</h3>
              <span className={`h-2 w-2 rounded-full ${
                exchange.connected ? 'bg-green-500' : 'bg-red-500'
              }`} />
            </div>
            <p className={`text-2xl font-bold mt-2 ${
              exchange.price === lowestPrice ? 'text-green-500' :
              exchange.price === highestPrice ? 'text-red-500' :
              'text-gray-700 dark:text-gray-300'
            }`}>
              ${exchange.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LivePrices;