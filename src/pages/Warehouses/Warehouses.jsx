import './Warehouses.scss';
import Search from '../../components/Search';
import Button from '../../components/Button';
import CardHeader from '../../components/CardHeader';
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import AddWarehouse from "../AddWarehouse/AddWarehouse";
import { Link } from "react-router-dom";

export default function Warehouses() {
  return (
    <>
      <div className="card__tablet">
        <CardHeader text="Warehouse" />
          <div className="card__cta">
            <Search placeholder="Search.." />
            <Link to='/warehouses/add' ><Button text="+ Add New Warehouse" /></Link>
          </div>
      </div>
        <div>
          <WarehouseList />
        </div>
    </>
  );
}
