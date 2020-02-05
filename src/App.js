import React, { useEffect, useState } from 'react';
import Content from './components/Content'
import Header from './components/Header'
import './index.css';
import axios from 'axios'

function App() {

  return (
      <div className="container mt-3">
        <div className="text-center">
          <Header />
        </div>
        <Content />
      </div>
  );
}

export default App;
