import './Card.scss'; 
import {Switch, Route} from 'react-router-dom';
import Warehouses from '../../pages/Warehouses';
import Inventory from '../../pages/Inventory';
import InventoryDetails from '../../pages/InventoryDetails';
import WarehouseDetailsPage from '../../pages/WarehouseDetailsPage'
import EditWarehouse from '../../pages/EditWarehouse';

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
                {/* <Route path="/" component={} />
                <Route path="/" component={} />
                {/* <Route path="/" component={} />
                <Route path="/" component={} /> */}
                {/* <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} /> */}
            </Switch>
        </article>
        </>
    )
}