import './WarehouseDetailsPage.scss';
import React from 'react';
import ArrowBack from '../../assets/icons/arrow_back-24px.svg';
import axios from 'axios';
import { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Edit from '../../assets/icons/edit-24px.svg'
import Delete from '../../assets/icons/delete_outline-24px.svg'
import ArrowRight from '../../assets/icons/chevron_right-24px.svg'
import Card from '../../components/Card/Card';
import CardHeader from '../../components/CardHeader';
import ItemList from '../../components/ItemList';
// import InventoryList from '../../components/InventoryList/InventoryList';

export default class WarehouseDetailsPage extends Component {
    state = {
        chosenWarehouse: {},
        inventoryList: []
    }
    getWarehouseById = (id) => {
      axios
      .get(`http://localhost:9000/warehouses/${id}`)
        .then(response => {   
          this.setState({
              chosenWarehouse: response.data
              })
            })
            .catch(err => console.log(err))
    }

    getInventoryById = (id) => {
      axios
      .get(`http://localhost:9000/inventories/warehouses/${id}`)
        .then(response => {   
          this.setState({
              inventoryList: response.data
              })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
      document.title = 'Warehouse Details'
      const warehouseId = this.props.match.params.id
      axios
      .get(`http://localhost:9000/warehouses/${warehouseId}`)
      // .get(`http://localhost:9000/warehouses/details/${warehouseId}`)
        .then(response => {   
          this.setState({
              chosenWarehouse: response.data
              })
              console.log(response.data)
            })
            .catch(err => console.log(err))
      const inventoryId = this.props.match.params.id
      axios
      .get(`http://localhost:9000/inventories/warehouses/${inventoryId}`)
      // .get(`http://localhost:9000/warehouses/details/${warehouseId}`)
        .then(response => {   
          this.setState({
              inventoryList: response.data
              })
              console.log(response.data)
            })
            .catch(err => console.log(err))
      }
      
    render () {
    return (
        <>
         <div className="card__tablet">
              <div className='warehouse__info'>
                <div className='warehouse__info--title'>
                    <Link to={`/warehouses`}><img src={ArrowBack}/></Link>
                    <CardHeader text={this.state.chosenWarehouse.name} />
                </div>
                  <Link to={`/editwarehouse/${this.state.chosenWarehouse.id}`}><span className='warehouse__info--edit-wrap'><img src={Edit}/></span></Link>
                  <Link to={`/editwarehouse/${this.state.chosenWarehouse.id}`}><span className='warehouse__info--edit-wrap--big'><img src={Edit}/> Edit</span></Link>
              </div>
            </div>
            <section className='warehouse__container'>
                <div className='warehouse__container--address'>
                  <h4 className="warehouse__container--header">WAREHOUSE ADDRESS:</h4>
                    <span>{this.state.chosenWarehouse.address + ', '}</span>
                    <span>{this.state.chosenWarehouse.name + ', '}</span>
                    <span>{this.state.chosenWarehouse.country}</span>
                </div>
              <section className='warehouse__container--contact'>
                <div>
                    <h4 className="warehouse__container--header">CONTACT NAME:</h4>
                    <p>{this.state.chosenWarehouse.contact?.name}</p>
                    <p>{this.state.chosenWarehouse.contact?.position}</p>
                </div>
                <div>
                    <h4 className="warehouse__container--header">CONTACT INFORMATION:</h4>
                    <p>{this.state.chosenWarehouse.contact?.phone}</p>
                    <p>{this.state.chosenWarehouse.contact?.email}</p>
                </div>
              </section>
            </section> 
        <header>
          {/* <div className='warehouse__info'>
              <h1 className='warehouse__info--title'><img src={ArrowBack}/>{this.state.chosenWarehouse.name}</h1>
              
              <span className='warehouse__info--edit-wrap'><img src={Edit}/></span>
          </div> */}
        {/* <section className='warehouse__container'>
            <div className='warehouse__container--address'>
                <p>WAREHOUSE ADDRESS:</p>
                <span>{this.state.chosenWarehouse.address + ', '}</span>
                <span>{this.state.chosenWarehouse.name + ', '}</span>
                <span>{this.state.chosenWarehouse.country}</span>
            </div>
          <section className='warehouse__container--contact'>
              <div>
                  <p>CONTACT NAME:</p>
                  <p>{this.state.chosenWarehouse.contact?.name}</p>
                  <p>{this.state.chosenWarehouse.contact?.position}</p>
              </div>
              <div>
                  <p>CONTACT INFORMATION:</p>
                  <p>{this.state.chosenWarehouse.contact?.phone}</p>
                  <p>{this.state.chosenWarehouse.contact?.email}</p>
              </div>
          </section>
        </section> */}
        {/* {console.log(this.state?.inventoryList, "test")}
        {this.state?.inventoryList.map(item  => (
         <section className='inventory__container' key={item.id}>
            <div className='inventory__container--top'>
              <div className='inventory__container--item'>
                <p>INVENTORY ITEM</p>
                <p className='inventory__container--item--name'><img src={ArrowRight}/>{item.itemName}</p>
           
              </div>  
              <div className='inventory__container--status'>
                <p>STATUS</p>
                <p>{item.status}</p>
              </div>
            </div>
          <section className='inventory__container--bottom'>
              <div className='inventory__container--category'>
                  <p>CATEGORY</p>
                  <p>{item.category}</p>
              </div>
              <div className='inventory__container--qty'>
                  <p>QTY</p>
                  <p>{item.quantity}</p>
              </div>
             
          </section> 
          <div className='inventory__container--icons'>
                <img src={Delete}/>
                <img src={Edit}/>
          </div>
        </section> 
        ))}  */}
        <ItemList list={this.state?.inventoryList}/>
        </header> 
        
        
      
      </>
    )
}
}

