import React from 'react';
import './App.css';
// components
import Header from './component/header/Header.js';
import Topbar from './component/topbar';
import Intro from './component/intro';
import Experience from './component/experience';
import Portfolio from './component/portfolio';
import Testimonials from './component/testimonials';
import Contact from './component/contact';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header />
        <Topbar />
        <Intro />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
