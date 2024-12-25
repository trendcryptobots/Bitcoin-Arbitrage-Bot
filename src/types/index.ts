export interface Exchange {
  name: string;
  price: number;
  connected: boolean;
}

export interface ArbitrageOpportunity {
  id: string;
  buyExchange: string;
  sellExchange: string;
  buyPrice: number;
  sellPrice: number;
  profitPercentage: number;
  timestamp: Date;
}

export interface Transaction {
  id: string;
  buyExchange: string;
  sellExchange: string;
  buyPrice: number;
  sellPrice: number;
  profit: number;
  profitPercentage: number;
  status: 'completed' | 'pending' | 'error';
  timestamp: Date;
}

export interface BotStats {
  isActive: boolean;
  tradesCompleted: number;
  totalProfit: number;
  connectedExchanges: number;
}