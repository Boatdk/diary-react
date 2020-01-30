import React, { useState, useEffect } from 'react';
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css';
import './App.css';

function App() {

  return (
    <div className="bg-pink-pastel">
      <div className="container">
        <div className="text-center mt-3">
          <Header />
        </div>
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
