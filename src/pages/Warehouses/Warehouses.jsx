import './Warehouses.scss';
import Search from '../../components/Search';
import Button from '../../components/Button';
import CardHeader from '../../components/CardHeader';
import WarehouseList from '../../components/WarehouseList';


export default function Warehouses() {
  return (
    <>
      <div className="card__tablet">
        <CardHeader text="Warehouse" />
          <div className="card__cta">
            <Search placeholder="Search.." />
            <Button text="+ Add New Warehouse" />
          </div>
      </div>
        <div>
          <WarehouseList />
        </div>
    </>
  );
}
