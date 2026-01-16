import React from 'react';

import ThemeAppCard from './ThemeAppCard';
import themeData from './data.json';

const cards = themeData.cards;

export default function ThemeAppContent() {
  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <h2 className={`text-3xl font-bold text-white`}>Welcome to My App</h2>
        <p className={`mt-2 text-gray-400`}>
          현재 테마: <span className="font-semibold">'다크 모드 🌙'</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* key 로 인덱스는 좋은 방법 아님 */}
        {cards.map((card, index) => (
          <ThemeAppCard key={index} title={card.title} content={card.content} />
        ))}
      </div>

      <div className="mt-8">
        <h3 className={`mb-4 text-2xl font-bold text-white`}>버튼 예시</h3>
        <div className="flex gap-4">
          <button
            className={`rounded-lg px-6 py-3 font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700`}
          >
            Primary Button
          </button>
          <button
            className={`rounded-lg border-2 px-6 py-3 font-semibold transition-colors border-gray-600 text-white hover:bg-gray-700`}
          >
            Secondary Button
          </button>
        </div>
      </div>
    </main>
  );
}
