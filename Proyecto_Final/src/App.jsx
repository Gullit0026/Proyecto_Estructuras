import React from 'react';
import Navbar from './Components/Shared/navBar';
import Home from './Components/Index/Home';
import Footer from './Components/Shared/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
