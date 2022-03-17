import './WarehouseDetailsPage.scss';
import React from 'react';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Edit from '../../assets/Icons/edit-24px.svg'
import Delete from '../../assets/Icons/delete_outline-24px.svg'
import ArrowRight from '../../assets/Icons/chevron_right-24px.svg'
// import HeaderPage from '../../components/HeaderPage.jsx'

class WarehouseDetailsPage extends Component {
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

    // getInventoryById = (id) => {
    //   axios
    //   .get(`http://localhost:9000/inventories/${id}`)
    //     .then(response => {   
    //       this.setState({
    //           inventoryList: response.data
    //           })
    //         })
    //         .catch(err => console.log(err))
    // }

    componentDidMount() {
      document.title = 'WarehouseDetails'
      const warehouseId = this.props.match.params.id
      axios
      .get(`http://localhost:9000/warehouses/${warehouseId}`)
        .then(response => {   
          this.setState({
              chosenWarehouse: response.data
              })
            })
            .catch(err => console.log(err))
      }
    

      
    render () {
    return (
        <>
        {/* <HeaderPage/> */}
        <header>
          <div className='warehouse__info'>
              <h1 className='warehouse__info--title'><img src={ArrowBack}/>{this.state.chosenWarehouse.name}</h1>
              
              <span className='warehouse__info--edit-wrap'><img src={Edit}/></span>
          </div>
        <section className='warehouse__container'>
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
        </section>

        <section className='inventory__container'>
            <div className='inventory__container--top'>
              <div className='inventory__container--item'>
                <p>INVENTORY ITEM</p>
                <p className='inventory__container--item--name'>Television <img src={ArrowRight}/></p>
              </div>  
              <div className='inventory__container--status'>
                <p>STATUS</p>
                <p>IN STOCK</p>
              </div>
            </div>
          <section className='inventory__container--bottom'>
              <div className='inventory__container--category'>
                  <p>CATEGORY</p>
                  <p>ELECTRONICS</p>
              </div>
              <div className='inventory__container--qty'>
                  <p>QTY</p>
                  <p>500</p>
              </div>
             
          </section> 
          <div className='inventory__container--icons'>
                <img src={Delete} />
                <img src={Edit} />
          </div>
        </section>

        </header> 
        
      
      </>
    )
}
}

export default WarehouseDetailsPage;