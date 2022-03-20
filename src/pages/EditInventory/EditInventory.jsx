import './EditInventory.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import CardHeader from "../../components/CardHeader";
import Search from '../../components/Search';

export default class EditInventory extends Component {
    state = {
    item: {},
    inventoryData: [],
    quantity: 0,
    radioToggle1: true,
    radioToggle2: false,
    instock: "In Stock",
    stockStatus: true
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

      axios
      .get(`http://localhost:9000/inventories`)
      .then(response => {
        console.log(response.data);
        this.setState({
          inventoryData: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  radioToggle = (event) => {
      console.log(event.target.value);
      if(event.target.value === "In Stock") {
          this.setState({
              radioToggle1: true,
              radioToggle2: false,
              stockStatus: true,
              instock: "In Stock"
          })
          document.querySelector(".item-details__quantity").classList.remove("item-details__quantity--hidden");
    
      } else {
          this.setState({
              radioToggle1: false,
              radioToggle2: true,
              stockStatus: false,
              instock: "Out of Stock",
              quantity: 0,
          })
          document.querySelector(".item-details__quantity-input").value = 0;
          document.querySelector(".item-details__quantity").classList.add("item-details__quantity--hidden");        
      }
    }

    handleSubmit = (event) => {
        const itemId = this.props.match.params.id;
        event.preventDefault();
        console.log('in submit');

        if(!event.target.warehouseName.value) {
          alert('please fill out warehouse name');
        }

        else if (!event.target.itemName.value) {
          alert('please fill out item name');
        }

        else if (!event.target.description.value) {
          alert('please fill out descrption');
        }

        else if (!event.target.category.value) {
          alert('please fill out category field');
        }

        else if (!event.target.status.value) {
          alert('please fill out status field');
        }

        else if (!event.target.quantity.value) {
          alert('please fill out quantity field');
        }

        else {
          axios.put(`http://localhost:9000/inventories/edit/${itemId}`, {
              warehouseName: event.target.warehouseName.value,
              itemName: event.target.itemName.value,
              description: event.target.description.value,
              category: event.target.category.value,
              status: event.target.status.value,
              quantity: event.target.quantity.value
          }) 
          console.log('edited successfully');
        }
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

            <form className="item-details" onSubmit={this.handleSubmit}>
                <h2 className="item-details__title">Item Details</h2>  

                <div className="item-details__name">
                    <h4 className="item-details__label">Item Name</h4>
                    <input className="item-details__name-input" placeholder={this.state.item.itemName} name="itemName" />
                </div>

                <div className="item-details__description">
                    <h4 className="item-details__label">Description</h4>
                    <textarea className="item-details__description-input" placeholder={this.state.item.description} name="description"/>
                </div>

                <div className="item-details__category">
                    <h4 className="item-details__label">Category</h4>
                    <select className="item-details__category-input" name="category" id="">
                      <option value="default">{this.state.item.category}</option>
                       {this.state.inventoryData.filter((value, index, self) => index === self.findIndex((a) => a.category === value.category))
                                .map((data) => {
                                    return (
                                        <option key={data.id} value={data.category}>
                                            {data.category}    
                                        </option>
                                    )
                                })}
                    </select>
                </div>

                <div className="item-details__availability">
                  <h2 className="item-details__title">Item Availability</h2>

                  <div className="item-details__status">
                    <h4 className="item-details__status-label">Status</h4>
                      <div className="item-details__status-options">
                        <div>
                            <input
                                className="radio-input1"
                                type="radio"
                                name="status"
                                value="In Stock"
                                onChange={this.radioToggle}
                                checked={this.state.radioToggle1}
                            />
                            <label htmlFor="" className="radio-input1-label">In Stock</label>
                        </div>
                        <div>
                            <input
                                className="radio-input2"
                                type="radio"
                                name="status"
                                value="Out of Stock"
                                onChange={this.radioToggle} 
                                checked={this.state.radioToggle2}
                            />
                            <label htmlFor="" className="radio-input2-label">Out of Stock</label>
                        </div>
                      </div>
                    </div>

                    <div className="item-details__quantity">
                      <h4 className="item-details__label">Quantity</h4>
                      <input className="item-details__quantity-input" type="text" placeholder={0} name="quantity"/>
                    </div>

                    <div className="item-details__warehouse">
                      <h4 className="item-details__label">Warehouse</h4>
                      <select className="item-details__warehouse-input" name="warehouseName" id="">
                        <option value="default">{this.state.item.warehouseName}</option>
                        {this.state.inventoryData.filter((value, index, self) => index === self.findIndex((a) => a.warehouseName === value.warehouseName))
                                .map((data) => {
                                    return (
                                        <option key={data.id} value={data.warehouseName}>
                                            {data.warehouseName}    
                                        </option>
                                    )
                                })}
                      </select>
                    </div>
                    
                    <div className="item-details__buttons">
                   
                      <Link to="/inventory" className="item-details__buttons-cancel">
                        <div className="">Cancel</div>
                      </Link>
                      <button className="item-details__buttons-save">Save</button>
                     
                    </div>
                  </div>


                </form>
  
          </>
      )
  }
}