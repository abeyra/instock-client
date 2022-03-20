import { Component } from 'react/cjs/react.development';
import './AddWarehouse.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import backArrow from '../../assets/icons/arrow_back-24px.svg';
import CardHeader from '../../components/CardHeader';

export default class AddWarehouse extends Component {
    state =  {
       warehouse: { contact: {} }
    }
    componentDidMount() {
      document.title = 'Add Warehouse'
      axios
      .get(`http://localhost:9000/warehouses/details`)
      // .get(`http://localhost:9000/warehouses/details/${warehouseId}`)
        .then(response => {
          this.setState({
              chosenWarehouse: response.data
              })
            })
            .catch(err => console.log(err))
      }

        handleSubmit = (event) =>{
        event.preventDefault()
        axios
            .post(`http://localhost:9000/warehouses/add`,{
                name:event.target.warehouseName.value,
                //id:uuidv4(),        
                address: event.target.address.value,
                city: event.target.city.value,
                country: event.target.country.value,
                contact: {
                    name: event.target.contact.name.value,
                    position: event.target.contact.position.value,
                    phone: event.target.contact.phone.value,
                    email: event.target.contact.email.value
                }
            })
            .then(res => {
                this.setState({warehouse:[res.data,...this.state.warehouse]})
            })
            .catch(err => console.log(err))
        event.target.reset()
    }
    render() {
    return (
        
        <>
            <div >
                {/* className="card__tablet" */}
                <div className='warehouse__info'>
                    <div className='warehouse__info--title'>
                        <img src={backArrow} alt='back arrow'/>
                        <CardHeader text={'Add Warehouse'} />
                        {/* text={this.state.warehouse.name} */}
                    </div>
                </div>
              </div>
              <form className='form-wrap' onSubmit={this.handleSubmit}>
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
                            <input type='text' name='contactName' placeholder='Contact Name'/>
                            <label className='contact-wrap__label'>Position</label>
                            <input type='text' name='contactPosition' placeholder='Position'/>
                            <label className='contact-wrap__label'>Phone Number</label>
                            <input type='text' name='contactPhone' placeholder='Phone Number'/>
                            <label className='contact-wrap__label'>Email</label>
                            <input type='text' name='contactEmail' placeholder='Email'/>
                        </div>
                    </section>
                </div>
                <div className='button-wrap'>
                    <button className='button-wrap__cancel'>Cancel</button>
                    <button className='button-wrap__save' type='submit'>Save</button>
                </div>
              </form>
        </>
 )
    }
}