import './reset.css';
import './App.scss';
import Warehouses from './pages/Warehouses';
import Inventory from './pages/Inventory';
import Card from './components/Card';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


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