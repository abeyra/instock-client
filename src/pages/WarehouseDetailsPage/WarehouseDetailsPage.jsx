import './WarehouseDetailsPage.scss';
import React from 'react';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import axios from 'axios';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Edit from '../../assets/Icons/edit-24px.svg'
// import HeaderPage from '../../components/HeaderPage.jsx'

class WarehouseDetailsPage extends Component {
    state = {
        chosenWarehouse: {}
        //contact: []
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
              <h1 className='warehouse_info--title'><img src={ArrowBack}/>{this.state.chosenWarehouse.name}</h1>
              
              <img src={Edit}/>
          </div>
        <section className='warehouse__container'>
            <div className='warehouse__consta'>
                <p>WAREHOUSE ADDRESS:</p>
                <span>{this.state.chosenWarehouse.address + ', '}</span>
                <span>{this.state.chosenWarehouse.name + ', '}</span>
                <span>{this.state.chosenWarehouse.country}</span>
            </div>
          <section className='warehouse__contact'>
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
        </header> 
        
      
      </>
    )
}
}

export default WarehouseDetailsPage;