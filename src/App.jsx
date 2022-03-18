import React from 'react'
import './reset.css';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Card from './components/Card';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Card />
        <Footer />
      </BrowserRouter>
    </div>
  );
}