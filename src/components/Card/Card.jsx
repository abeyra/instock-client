import './Card.scss'; 
import {Switch, Route} from 'react-router-dom';
import Warehouses from '../../pages/Warehouses';
import Inventory from '../../pages/Inventory';
import WarehouseDetailsPage from '../../pages/WarehouseDetailsPage'
import EditWarehouse from '../../pages/EditWarehouse';

export default function Card() {
    return (
        <>
        <article className="card">
            <Switch>
                <Route path="/" exact component={Warehouses} />
                <Route path="/warehouses" component={Warehouses} />
                <Route path="/inventory" component={Inventory} />
                <Route path="/details/:id" component={WarehouseDetailsPage} /> 
                <Route path="/editwarehouse/:id" component={EditWarehouse} />
                {/* <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} /> */}
            </Switch>
        </article>
        </>
    )
}