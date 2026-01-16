import React from 'react';

import ThemeToggleButton from './ThemeToggleButton';

export default function ThemeAppHeader() {
  return (
    <header className={`border-b p-4 transition-colors border-gray-700 bg-gray-800 text-white`}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📝 My App</h1>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
