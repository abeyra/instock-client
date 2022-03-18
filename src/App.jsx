import './reset.css';
import './App.scss';
import Warehouses from './pages/Warehouses';
import Inventory from './pages/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
            <Switch>
              <Route path="/warehouses" exact component={Warehouses} />
              <Route path="/inventory" component={Inventory} />
            </Switch>
            <Footer />
         </BrowserRouter>
    </div>
  );
}