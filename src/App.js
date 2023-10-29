import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Order from './pages/order/Order';
import Items from './pages/items/Items';
import SingleItem from './pages/single-item/SingleItem';
import { CartProvider } from './pages/CartContext/CartContext';
import Cart from './pages/Cart/Cart';
import CheckoutCom from "./pages/CheckoutCom/CheckoutCom"

function App() {
  return (
    <CartProvider>
    <Router>

      <Routes>

        <Route path="/" element={<Home  />} />
        <Route path="/order" element={<Order />} />
        <Route path="/items/1" exact element={<Items />} />
        <Route path="/item/1" element={<SingleItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkoutCom" element={<CheckoutCom />} />


      </Routes>
      </Router>
    </CartProvider>
  );
}

export default App