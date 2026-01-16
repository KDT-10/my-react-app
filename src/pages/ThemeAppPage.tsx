import React from 'react';

import ThemeAppContent from '@/components/theme/ThemeAppContent';
import ThemeAppHeader from '@/components/theme/ThemeAppHeader';
import ThemeAppSidebar from '@/components/theme/ThemeAppSidebar';

export default function ThemeAppPage() {
  return (
    <div className="min-h-screen transition-colors bg-gray-900 w-[90vw]">
      <ThemeAppHeader />
      <div className="flex gap-5">
        <ThemeAppSidebar />
        <ThemeAppContent />
      </div>
    </div>
  );
}
