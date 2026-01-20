import clsx from 'clsx';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function TailwindCssPage() {
  const isAdmin = true;
  return (
    <div>
      <Header />
      <Content className="flex flex-col gap-2">
        TailwindCss Page
        <div
          className={clsx(
            isAdmin && 'border-4 border-amber-700',
            'flex items-center justify-center',
            'bg-blue-400 text-amber-800',
            'm-5 p-5',
            'h-52 w-56',
          )}
        >
          테두리
        </div>
      </Content>
      <Footer />
    </div>
  );
}
