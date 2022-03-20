import './EditInventory.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import CardHeader from "../../components/CardHeader";
import Search from '../../components/Search';

export default class EditInventory extends Component {
    state = {
    item: {}
  };

  componentDidMount() {
    const itemId = this.props.match.params.id;
    axios
      .get(`http://localhost:9000/inventories/${itemId}`)
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
            <CardHeader text="Edit Inventory Item" />
          </div>

            <div className="item-details">
                <h2>Item Details</h2>  

                <div className="item-details__name">
                    <h4 className="item-details__name-title">Item Name</h4>
                    <Search placeholder={this.state.item.itemName} />
                </div>

                <div>
                    <h4>Description</h4>
                    <Search placeholder={this.state.item.description}/>
                </div>
            </div>
          </>
      )
  }
}