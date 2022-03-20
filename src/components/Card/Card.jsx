import './Card.scss'; 
import Search from '../Search';
import Button from '../Button';
import CardHeader from '../CardHeader';
import {Switch, Route} from 'react-router-dom';
import Warehouses from '../../pages/Warehouses';
import Inventory from '../../pages/Inventory';
import Inventory_details from '../../pages/Inventory_details';
import AddWarehouse from '../../pages/AddWarehouse/AddWarehouse';

export default function Card() {
    return (
        <>
        <article className="card">
            <Switch>
                <Route path="/" exact component={Warehouses} />
                <Route path="/warehouses" exact component={Warehouses} />
                <Route path="/inventory" component={Inventory} />
                {/* <Route path="/" component={} /> */}
                <Route path="/warehouses/add" component={AddWarehouse} />
                <Route path="/inventory/details" component={Inventory_details} />
                {/* <Route path="/" component={} />
                <Route path="/" component={} />
                <Route path="/" component={} /> */}
            </Switch>
        </article>
        </>
    )
}