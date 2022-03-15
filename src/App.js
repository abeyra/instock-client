import './reset.css';
import './App.scss';
import HeaderPage from './components/Warehouses/HeaderPage.jsx';
import Warehouses from './pages/Warehouses/Warehouses.jsx';
import Inventory from './pages/Inventory/Inventory.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <HeaderPage />
            <Switch>
              <Route path="/" exact component={Warehouses}/>
              <Route path="/inventory" component={Inventory} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

