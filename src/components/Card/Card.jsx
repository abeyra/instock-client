import './Card.scss'; 
import Search from '../Search';
import Button from '../Button';
import CardHeader from '../CardHeader';
import {Switch, Route} from 'react-router-dom';
import Warehouses from '../../pages/Warehouses';
import Inventory from '../../pages/Inventory';
import InventoryDetails from '../../pages/InventoryDetails';

export default function Card() {
    return (
        <>
        <article className="card">
            <Switch>
                <Route path="/" exact component={Warehouses} />
                <Route path="/warehouses" exact component={Warehouses} />
                <Route path="/inventory" exact component={Inventory} />
                <Route path="/inventory/:id" component={InventoryDetails} />
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