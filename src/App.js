import React from 'react';

import './App.css';
import Navbar from './components/layout/Navbar'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <div className='container'>
    <Main />
    </div>
    <Footer />
    </div>
  );
}

export default App;
