import React from 'react';
import { Activity, Settings, LineChart, List, LayoutDashboard } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: List, label: 'Transactions', path: '/transactions' },
    { icon: Activity, label: 'Opportunities', path: '/opportunities' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: LineChart, label: 'Reports', path: '/reports' },
  ];

  return (
    <nav className="w-64 min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">CryptoArb</h1>
      </div>
      <ul className="space-y-2 p-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-700 dark:text-gray-200">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;