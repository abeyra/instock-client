import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardHeader from "../../components/CardHeader";
import "./InventoryDetails.scss";
import edit from '../../assets/icons/edit-24px.svg';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import { listAPI } from '../../util/listAPI';


export default class InventoryDetails extends Component {
  state = {
    item: {}
  };

  componentDidMount() {
    const itemId = this.props.match.params.id;
    axios
      .get(`${listAPI}/${itemId}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          item: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
       
          <div className="card__header">
            <Link to={"/inventory"}>
              <img src={backArrow} alt="back arrow" />
            </Link>
            <CardHeader text={this.state.item.itemName} />
            <Link className="card__header-button-link" to={`/editinventory/${this.state.item.id}`}>
              <div className="card__button">
                <img src={edit} alt="edit button" />
                <p className="card__button-text">Edit</p>
              </div>
            </Link>
          </div>
         
          <div className="item">

            <div className="item__data">
              <h4 className="item__field">Item description:</h4>
              <p className="item__record item__record--description">{this.state.item.description}</p>
          
              <h4 className="item__field">Category:</h4>
              <p className="item__record">{this.state.item.category}</p>
            </div>
          
            <div className="item__inventory-details">

            <div className="item__stock-info">
              <div className="item__status-container">
                <h4 className="item__field">Status:</h4>
                <p className="item__record item__record--stock">{this.state.item.status}</p>
              </div>
    
              <div className="item__quantity-container">
                <h4 className="item__field">Quantity:</h4>
                <p className="item__record">{this.state.item.quantity}</p>
              </div>
            </div>

            <div className="item__3">
              <h4 className="item__field">Warehouse</h4>
              <p className="item__record">{this.state.item.warehouseName}</p>
            </div>
             
            </div>
       
         
     
          </div>
     
      </>
    );
  }
}
