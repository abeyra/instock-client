import React from 'react'
import './reset.css';
import './App.scss';
import Warehouses from './pages/Warehouses/Warehouses';
import Inventory from './pages/Inventory/Inventory';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Card from './components/Card';
import Main from './pages/Main/Main';
import Temp from './components/Modal/Modal'



export default function App() {
  return (
    <div className="App">
      
       
           
        <BrowserRouter>
          <NavBar /> 
          <Main />
           
            {/* <Switch>
              <Route path="/warehouses" exact component={Warehouses} />
              <Route path="/inventory" component={Inventory} />
            </Switch> */}
          
          
         </BrowserRouter>
      
    </div>
  );
}