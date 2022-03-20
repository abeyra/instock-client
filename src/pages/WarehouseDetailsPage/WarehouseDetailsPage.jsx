import './WarehouseDetailsPage.scss';
import React from 'react';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import Edit from '../../assets/Icons/edit-24px.svg'
import Delete from '../../assets/Icons/delete_outline-24px.svg'
import ArrowRight from '../../assets/Icons/chevron_right-24px.svg'
import Card from '../../components/Card/Card';
import Sort from '../../assets/icons/sort-24px.svg';

import CardHeader from '../../components/CardHeader';
import Button from '../../components/Button';
import ItemList from '../../components/ItemList';
// import HeaderPage from '../../components/HeaderPage.jsx'

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
        .then(response => {   
          this.setState({
              chosenWarehouse: response.data
              })
            })
      axios      
      .get(`http://localhost:9000/inventories/warehouses/${warehouseId}`)
      .then(response => {
        this.setState({
          inventoryList:response.data
        })
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
        <section>
            <div className="field">
                <div className="field__section">
                    <h4 className="field__name">
                        Inventory item
                    </h4>
                    <img 
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="field__section">
                    <h4 className="field__name">
                        Category
                    </h4>
                    <img
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="field__section">
                    <h4 className="field__name">
                        Status
                    </h4>
                    <img 
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="field__section">
                    <h4 className="field__name">
                        QTY
                    </h4>
                    <img 
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                    <h4 className="field__name field__name--action">
                        Action
                    </h4>
            </div>
            </section>
        <section>
        {this.state.inventoryList.map((item) => {
          return(
        
         <section className='inventory__container'>

            <div className='inventory__container--top'>
              <div className='inventory__container--item'>
                <p className='inventory__container--item--heading'>INVENTORY ITEM</p>
                <p className='inventory__container--item--name'>{item.itemName} <img src={ArrowRight}/></p>
              </div>  
              <div className='inventory__container--category'>
                  <p className='inventory__container--item--heading'>CATEGORY</p>
                  <p>{item.category}</p>
              </div>
            </div>
          <section className='inventory__container--bottom'>
              <div className='inventory__container--status'>
                <p className='inventory__container--item--heading'>STATUS</p>
                <p>{item.status}</p>
              </div>
              <div className='inventory__container--qty'>
                  <p className='inventory__container--item--heading'>QTY</p>
                  <p>{item.quantity}</p>
              </div>
             
          </section> 
          <section>
            <div className='inventory__container--icons'>
                  <img src={Delete} />
                  <img src={Edit} />
            </div>
          </section>
        </section> 
        
        )})
      }
        </section>
      </>
      
        
      
    
    )
}
}

