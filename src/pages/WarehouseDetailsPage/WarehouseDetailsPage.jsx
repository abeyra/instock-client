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
        chosenWarehouse: [],
        contact: []
    }
    getWarehouseById = (id) => {
      axios
      .get(`http://localhost:9000/warehouses/${id}`)
        .then(response => {   
          this.setState({
              chosenWarehouse: response
              })
              console.log(response)
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
      document.title = 'WarehouseDetails'
      axios
      .get('http://localhost:9000/warehouses')
        .then(response => {  
          this.setState({
            chosenWarehouse: response.data
          })
          const warehouseId = this.props.match.params.warehouseId || response.data.id
       

          this.getWarehouseById(warehouseId);
        })
        .catch(err => console.log(err))
        
    }
    componentDidUpdate(prevProps, prevState) {
      const warehouseId = this.props.match.params.id || this.state.chosenWarehouse[0];

      if(prevState.chosenVideo && prevState.chosenVideo.id !== warehouseId) {
        this.getVideoById(warehouseId)
      }
    }

      
    render () {
    return (
        <>
        {/* <HeaderPage/> */}
        {/* {chosenWarehouse.item.map(item => (
           <header>
            <img src={ArrowBack} />
            <h1>{item.name}</h1>
            <img src={Edit}/>
        </header> 
        ))} */}
        {console.log('cao')}
      
      </>
    )
}
}

export default WarehouseDetailsPage;