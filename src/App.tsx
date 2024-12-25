import React, { useState } from 'react';
import Layout from './components/Layout';
import LivePrices from './components/dashboard/LivePrices';
import BotStatus from './components/dashboard/BotStatus';
import ArbitrageOpportunities from './components/dashboard/ArbitrageOpportunities';
import { Exchange, BotStats, ArbitrageOpportunity } from './types';

function App() {
  // Mock data for demonstration
  const exchanges: Exchange[] = [
    { name: 'Binance', price: 27500, connected: true },
    { name: 'Coinbase', price: 27650, connected: true },
    { name: 'Kraken', price: 27480, connected: true },
    { name: 'KuCoin', price: 27550, connected: false },
  ];

  const [botStats, setBotStats] = useState<BotStats>({
    isActive: false,
    tradesCompleted: 10,
    totalProfit: 150,
    connectedExchanges: 3,
  });

  const opportunities: ArbitrageOpportunity[] = [
    {
      id: '1',
      buyExchange: 'Binance',
      sellExchange: 'Coinbase',
      buyPrice: 27500,
      sellPrice: 27650,
      profitPercentage: 0.55,
      timestamp: new Date(),
    },
    {
      id: '2',
      buyExchange: 'Kraken',
      sellExchange: 'KuCoin',
      buyPrice: 27480,
      sellPrice: 27550,
      profitPercentage: 0.25,
      timestamp: new Date(),
    },
  ];

  const handleBotToggle = () => {
    setBotStats(prev => ({ ...prev, isActive: !prev.isActive }));
  };

  const handleApplyOpportunity = (opportunity: ArbitrageOpportunity) => {
    console.log('Applying opportunity:', opportunity);
    // Implementation for applying the opportunity
  };

  return (
    <Layout>
      <div className="space-y-6">
        <LivePrices exchanges={exchanges} />
        <BotStatus stats={botStats} onToggle={handleBotToggle} />
        <ArbitrageOpportunities 
          opportunities={opportunities}
          onApply={handleApplyOpportunity}
        />
      </div>
    </Layout>
  );
}

export default App;