import './reset.css';
import './App.scss';import Card from './components/Card';
import { BrowserRouter } from 'react-router-dom';
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