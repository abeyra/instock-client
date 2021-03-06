import './Card.scss'; 
import {Switch, Route } from 'react-router-dom';
import Warehouses from '../../pages/Warehouses';
import Inventory from '../../pages/Inventory';
import AddWarehouse from '../../pages/AddWarehouse/AddWarehouse';
import InventoryDetails from '../../pages/InventoryDetails';
import WarehouseDetailsPage from '../../pages/WarehouseDetailsPage'
import EditWarehouse from '../../pages/EditWarehouse';
import EditInventory from '../../pages/EditInventory/EditInventory';
import AddInventoryItem from '../../pages/AddInventoryItem/AddInventoryItem';

export default function Card() {
    return (
        <>
        <article className="card">
            <Switch>
                <Route path="/" exact component={Warehouses} />
                <Route path="/warehouses" exact component={Warehouses} />
                <Route path="/warehouses/add" component={AddWarehouse} />
                <Route path="/inventory" exact component={Inventory} />
                <Route path="/inventory/:id" component={InventoryDetails} />
                <Route path="/details/:id" component={WarehouseDetailsPage} /> 
                <Route path="/editwarehouse/:id" component={EditWarehouse} />
                <Route path="/editinventory/:id" component={EditInventory} />
                <Route path="/addinventoryitem" exact component={AddInventoryItem} />
            </Switch>
        </article>
        </>
    )
}