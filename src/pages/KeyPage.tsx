import React from 'react';

import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

interface Item {
  id?: string;
  name: string;
  age: number;
}

const initialItems: Item[] = [
  { id: crypto.randomUUID(), name: '홍길동', age: 20 },
  { id: crypto.randomUUID(), name: '이순신', age: 1 },
  { id: crypto.randomUUID(), name: '세종대왕', age: 22 },
];

export default function KeyPage() {
  const [items, setItems] = React.useState<Item[]>(initialItems);

  const handleClick = () => {
    const addItem = {
      id: crypto.randomUUID(),
      name: 'A홍길동',
      age: 2,
    };
    setItems([addItem, ...items]);
  };

  return (
    <div>
      <Header />
      <Content>
        Key Page
        <button type="button" onClick={handleClick}>
          추가
        </button>
        {items.map((item) => (
          <ItemWithUser key={item.id} item={item} />
        ))}
      </Content>
      <Footer />
    </div>
  );
}

function ItemWithUser({ item }: { item: Item }) {
  const { name, age } = item;

  React.useEffect(() => {
    console.log('ItemWithUser 마운트');
  }, []);

  return (
    <div>
      <span>{name}</span>
      <span>{age}</span>
    </div>
  );
}
