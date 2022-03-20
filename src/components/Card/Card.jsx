import './Card.scss'; 
import Search from '../Search';
import Button from '../Button';
import CardHeader from '../CardHeader';
import {Switch, Route, Link} from 'react-router-dom';
import Warehouses from '../../pages/Warehouses';
import Inventory from '../../pages/Inventory';
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
                <Route path="/inventory" exact component={Inventory} />
                <Route path="/inventory/:id" component={InventoryDetails} />
                <Route path="/details/:id" component={WarehouseDetailsPage} /> 
                <Route path="/editwarehouse/:id" component={EditWarehouse} />
                <Route path="/editinventory/:id" component={EditInventory} />
                <Route path="/addinventoryitem" exact component={AddInventoryItem} />
                {/* <Route path="/" component={} />
                <Route path="/" component={} />
                {/* <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} /> */}
            </Switch>
        </article>
        </>
    )
}