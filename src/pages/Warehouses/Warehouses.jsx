import "./Warehouses.scss";
import PhilsCard from "../../components/PhilsCard/PhilsCard";
import Search from '../../components/Search';
import Button from '../../components/Button';
import CardHeader from '../../components/CardHeader';

export default function Warehouses() {
  return (
    <>
      <div className="card__tablet">
        <CardHeader text="Warehouse" />
        <div className="card__cta">
          <Search placeholder="Search.." />
          <Button text="warehouse" />
        </div>
      </div>
    </>
  );
}
