import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Navbar/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
