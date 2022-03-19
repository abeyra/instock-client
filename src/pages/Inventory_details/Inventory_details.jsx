import { Component } from "react";
import CardHeader from "../../components/CardHeader";
import "./Inventory_details.scss";

export default class Inventory_details extends Component {
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
        <div className="card__list">

        </div>
      </>
    );
  }
}
