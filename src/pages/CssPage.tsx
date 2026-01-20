import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { CssButton } from '@/components/css/CssButton';
import { CssButton1 } from '@/components/css/CssButton1';

export default function CssPage() {
  return (
    <div>
      <Header />
      <Content className="flex flex-col gap-2">
        CSS Page
        <CssButton />
        <CssButton1 />
      </Content>
      <Footer />
    </div>
  );
}
