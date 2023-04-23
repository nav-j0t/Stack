import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Stack Shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
