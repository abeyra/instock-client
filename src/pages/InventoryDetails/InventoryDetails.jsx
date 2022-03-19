import { Component } from "react";
import CardHeader from "../../components/CardHeader";
import "./InventoryDetails.scss";

export default class InventoryDetails extends Component {
  render() {
    return (
      <>
        <div className="card__tablet">
          <CardHeader text="Inventory" />
          <div className="card__cta">
            <div className="card__btn">
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
