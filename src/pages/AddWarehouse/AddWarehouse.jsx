import { Component } from 'react/cjs/react.development';
import './AddWarehouse.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import CardHeader from '../../components/CardHeader';
import { v4 as uuidv4 } from 'uuid'

export default class AddWarehouse extends Component {
    state =  {
       warehouse: { contact: {} }
    }

  
  validateInputs = () => {
    if(this.state.warehouseName !== "" 
    && this.state.warehouse.address !== ""
    && this.state.warehouse.city !== "" 
    && this.state.warehouse.country !== "" 
    && this.state.warehouse.contact.name !== "" 
    && this.state.warehouse.contact.position !== "" 
    && this.state.warehouse.contact.phone !== ""  
    && this.state.warehouse.contact.email !== "") {
    } else {
      alert("You must fill out all information")
      return false;
    }
      if(this.state.warehouse.contact.phone !== "" ) {
    }
      return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const validInputs = this.validateInputs();
        let id = uuidv4();
        
        if (validInputs) {
        axios.post(`http://localhost:9000/warehouses/add/${id}`, {
            name: this.state.warehouseName,
            address: this.state.warehouse.address,
            city: this.state.warehouse.city,
            country: this.state.warehouse.country,
            contact: {
                name: this.state.warehouse.contact.name,
                position: this.state.warehouse.contact.position,
                phone: this.state.warehouse.contact.phone,
                email: this.state.warehouse.contact.email,
                }
        })
        .then (res => {
            this.props.history.push(`/warehouses`)
            return this.props.onChangeHandler(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        } 
  }

    render() {
    return (
        
        <>
            <div >
                <div className='warehouse__info'>
                    <div className='warehouse__info--title'>
                        <img src={backArrow} alt='back arrow'/>
                        <CardHeader text={'Add Warehouse'} />
                    </div>
                </div>
              </div>
              <form className='form-wrap' onSubmit={(e) => this.handleSubmit(e)}>
                <div className='form-wrap__tablet'>
                    <section className='form-wrap__details'>
                        <h2 className='form-wrap__details--title'>Warehouse Details</h2>
                        <div className='form-wrap__details--wrap'>
                            <label className='form-wrap__details--label'>Warehouse Name</label>
                            <input type="text" name="warehouseName" placeholder="WareHouse Name"/>
                            <label className='form-wrap__details--label'>Street Address</label>
                            <input type="text" name='address' placeholder='Street Address'/>
                            <label className='form-wrap__details--label'>City</label>
                            <input type="text" name='city' placeholder='City'/>
                            <label className='form-wrap__details--label'>Country</label>
                            <input type='text' name='Country' placeholder='Country'/>
                        </div>
                    </section>
                    <section className='contact-wrap'>
                        <h2 className='contact-wrap__title'>Contact Details</h2>
                        <div className='contact-wrap__wrap'>
                            <label className='contact-wrap__label'>Contact Name</label>
                            <input type='text' name='contact.name' placeholder='Contact Name'/>
                            <label className='contact-wrap__label'>Position</label>
                            <input type='text' name='contact.position' placeholder='Position'/>
                            <label className='contact-wrap__label'>Phone Number</label>
                            <input type='text' name='contact.phone' placeholder='Phone Number'/>
                            <label className='contact-wrap__label'>Email</label>
                            <input type='text' name='contact.email' placeholder='Email'/>
                        </div>
                    </section>
                </div>
                <div className='button-wrap'>
                    <button className='button-wrap__cancel'>Cancel</button>
                    <button className='button-wrap__save' type='submit' onClick={(e) => this.handleSubmit(e)}>Add Warehouse</button>
                </div>
              </form>
        </>
 )
    }
}