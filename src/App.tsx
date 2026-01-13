import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import './App.css';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Order } from './pages/Order';
import { NotFound } from './pages/NotFound';
import { ConcertsHome } from './pages/concerts/ConcertsHome';
import { City } from './pages/concerts/City';
import { Trending } from './pages/concerts/Trending';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
        <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
