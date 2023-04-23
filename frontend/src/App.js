import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen.js';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
