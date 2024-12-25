import React from 'react';
import { useState } from 'react';
import { Activity, Settings, LineChart, List, LayoutDashboard } from 'lucide-react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex">
        <Navigation />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}