import React from 'react';
import Header from './components/Header';
import Brand from './components/Brand';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Brand />
      <About />
      <Menu />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
