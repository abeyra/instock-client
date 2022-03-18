import './reset.css';
import './App.scss';
import Warehouses from './pages/Warehouses';
import Inventory from './pages/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx'
import Details from './components/Details';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
            <Switch>
              <Route path="/warehouses" exact component={Warehouses} />
              <Route path="/inventory" component={Inventory} />
              {/* <Route path="/warehouses/details/:id" exact component={Details}/> */}
              <Route path="/warehouses/details/:id" exact component={WarehouseDetailsPage}/>
              <Route path="/details" exact component={Details}/>
            </Switch>
            <Footer />
         </BrowserRouter>
    </div>
  );
}