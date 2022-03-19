import React, { useState } from 'react'
import Warehouses from '../Warehouses/Warehouses';
import Inventory from '../Inventory/Inventory';
import WarehouseList from '../../components/WarehouseList/WarehouseList';
import InventoryList from '../../components/InventoryList/InventoryList';
import Modal from '../../components/Modal/Modal'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';




export default function App() {
  
  // const [show, setShow] = useState(false)

  return (
    <div className="App">
       
    
      <BrowserRouter>
           <WarehouseList />
           {/* <Modal /> */}
            <Switch>
              {/* <Route path="/warehouses" exact component={Warehouses} /> */}
              <Route path="/warehouses" exact component={WarehouseList} />
              <Route path="/inventory" component={InventoryList} />
            </Switch>
          <Footer />
          
         </BrowserRouter>
    </div>
  );
}