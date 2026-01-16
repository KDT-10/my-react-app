import React from 'react';

interface ThemeAppCardProps {
  title?: string;
  content?: string;
}

export default function ThemeAppCard({ title, content }: ThemeAppCardProps) {
  return (
    <div
      className={`rounded-lg border p-6 shadow-md transition-colors border-gray-700 bg-gray-800 text-white`}
    >
      <h3 className="mb-2 text-xl font-bold">{title ?? '-'}</h3>
      <p className="text-gray-300">{content ?? '-'}</p>
    </div>
  );
}
