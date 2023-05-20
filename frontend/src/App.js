import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id?' element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
