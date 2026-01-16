import React from 'react';

export default function ThemeToggleButton() {
  return (
    <button
      // onClick={toggleTheme}
      className={`rounded-lg px-4 py-2 font-semibold transition-all bg-yellow-400 text-white hover:bg-yellow-300`}
    >
      {/* {theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드'} */}
      ☀️ 라이트 모드
    </button>
  );
}
