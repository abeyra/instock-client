import './AddInventoryItem.scss';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import { Link } from 'react-router-dom';
import CardHeader from "../../components/CardHeader";
import { Component } from 'react';
import axios from 'axios';

export default class AddInventoryItem extends Component {

    state = {
        inventoryData: [],
        quantity: 0
    }

    componentDidMount() {
        axios
            .get("http://localhost:9000/inventories")
                .then(response => {
                    this.setState({
                        inventoryData: response.data
                    })
                console.log(this.state.inventoryData);
                })
                .catch(error => {
                    console.log(error);
                })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.post("http://localhost:9000/inventories", {
            warehouseName: event.target.warehouseName.value,
            itemName: event.target.itemName.value,
            description: event.target.description.value,
            category: event.target.category.value,
            status: event.target.status.value,
            quantity: event.target.quantity.value
        })
    }

    render() {
        return (
            <>
                <div className="card__header">
                <Link to={"/inventory"}>
                <img src={backArrow} alt="back arrow" />
                </Link>
                <CardHeader text="Add New Inventory Item" />
                </div>

                <form className="new-item" onSubmit={this.handleSubmit}>
                    <h2 className="new-item__title">Item Details</h2>  

                    <div className="new-item__name">
                        <h4 className="new-item__label">Item Name</h4>
                        <input className="new-item__name-input" type="text" name="itemName" placeholder="Item Name"/>    
                    </div>

                    <div className="new-item__description">
                        <h4 className="new-item__label">Description</h4>
                        <input className="new-item__description-input" type="text" name="description" placeholder="Please enter a brief item description."/>
                    </div>

                    <div className="new-item__category">
                        <h4 className="new-item__label">Category</h4>
                        <select className="new-item__category-input" name="category" id="">
                            <option value="electronics">Electronics</option>
                            <option value="gear">Gear</option>
                            <option value="apparel">Apparel</option>
                            <option value="accessories">Accessories</option>
                            <option value="health">Health</option>
                        </select>
                    </div>

                    <div className="new-item__availability">
                        <h2 className="new-item__title">Item Availability</h2>

                        <div className="new-item__status">
                         
                                <h4 className="new-item__status-label">Status</h4>
                                   <div className="new-item__status-options">
                                       <div>
                                            <input
                                                className="radio-input1"
                                                type="radio"
                                                name="instock"
                                                value="In Stock"
                                                onChange={this.radioToggle}
                                            />
                                            <label htmlFor="" className="radio-input1-label">In Stock</label>
                                        </div>
                                        <div>
                                            <input
                                                className="radio-input2"
                                                type="radio"
                                                name="outofstock"
                                                value="Out of Stock"
                                                onChange={this.radioToggle} 
                                            />
                                            <label htmlFor="" className="radio-input2-label">Out of Stock</label>
                                        </div>
                                    </div>
                        </div>

                        <div className="new-item__quantity">
                            <h4 className="new-item__label">Quantity</h4>
                            <input className="new-item__quantity-input" type="text" placeholder={this.state.quantity} name="quantity" />
                        </div>

                        <div className="new-item__warehouse">
                            <h4 className="new-item__label">Warehouse</h4>
                            <select className="new-item__quantity-input" name="warehouseName" id="" placeholder="Please select">
                                <option value="default">Please select</option>
                                {this.state.inventoryData.map((data) => {
                                    return (
                                        <option key={data.id} value={data.warehouseName}>
                                            {data.warehouseName}    
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="new-item__buttons">
                            <button className="new-item__buttons-cancel">Cancel</button>
                            <button className="new-item__buttons-submit" type='submit'>+ Add Item</button>
                        </div>
                    </div>
                

                </form>
            </>
        )
    }
}