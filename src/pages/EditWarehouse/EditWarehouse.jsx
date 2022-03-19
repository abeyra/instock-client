import { Component } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';
import './EditWarehouse.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import CardHeader from '../../components/CardHeader';
import { get } from 'lodash';

export default class Inventory extends Component {
  
  state = {
    warehouse:{ contact: {}},
  }

    componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`http://localhost:9000/warehouses/${id}`)
    .then(res => {
      this.setState({
        warehouse: res.data,
      });
    })
    .catch(err => {
    console.log("error", err)
    })
    }

    validateEmail = () => {
    let emailError = "";
    if (!this.state.warehouse.contact.email.includes("@")) {
      emailError = "Incorrect Email";
      alert("Please use valid email")
    }
    if (emailError) {
      this.setState({ emailError });
      return false
    }
    return true;
  }
  
  validateInputs = () => {
    if(this.state.warehouse.name !== "" 
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
  
    onSave = (e) => {
    const { value, name } = e.target;
    e.preventDefault();
   
    if (name.includes("contact")) {
    
      const contactField = name.split('.')[1];
      this.setState({
        warehouse: {...this.state.warehouse,
        contact: {...this.state.warehouse.contact,[contactField]: value,},
        },
        });
    } else {
      this.setState({
        warehouse: {...this.state.warehouse,[name]: e.target.value,}
        });
    }
    }

    handleSubmit = (e) => {
    e.preventDefault();
    
    const validEmail = this.validateEmail();
    const validInputs = this.validateInputs();
    let id = this.props.match.params.id;
    
    if (validEmail && validInputs) {
      axios.put(`http://localhost:9000/warehouses/edit/${id}`, {
        name: this.state.warehouse.name,
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
        this.props.history.push(`/warehouses/${id}`)
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
                <div className='warehouse__edit'>
                    <div className='warehouse__edit--title'>
                        <Link to ={`/details/${this.state.warehouse.id}`}>
                        <img src={ArrowBack}/>
                        </Link>
                        <CardHeader text={'Edit Warehouse'} />
                    </div>
                </div>
              </div>
              <form className='form-wrap' onSubmit={(e) => this.handleSubmit(e)}>
                <div className='form-wrap__tablet'>
                    <section className='form-wrap__details'>
                        <h2 className='form-wrap__details--title'>Warehouse Details</h2>
                        <div className='form-wrap__details--wrap'>
                            <label className='form-wrap__details--label' htmlFor='name'>Warehouse Name</label>
                            <input onChange={this.onSave} name="name" defaultValue={this.state.warehouse.name}/>
                            <label className='form-wrap__details--label' htmlFor='address'>Street Address</label>
                            <input onChange={this.onSave} name="address" defaultValue={this.state.warehouse.address}/>
                            <label className='form-wrap__details--label' htmlFor='city'>City</label>
                            <input onChange={this.onSave} name="city" defaultValue={this.state.warehouse.city}/>
                            <label className='form-wrap__details--label' htmlFor='country'>Country</label>
                            <input onChange={this.onSave} name="country" defaultValue={this.state.warehouse.country}/>
                        </div>
                    </section>
                    <section className='contact-wrap'>
                        <h2 className='contact-wrap__title'>Contact Details</h2>
                        <div className='contact-wrap__wrap'>
                            <label className='contact-wrap__label' htmlFor='contact.name'>Contact Name</label>
                            <input onChange={this.onSave} name="contact.name" defaultValue={this.state.warehouse.contact.name}/>
                            <label className='contact-wrap__label' htmlFor='contact.position'>Position</label>
                            <input onChange={this.onSave} name="contact.position" defaultValue={this.state.warehouse.contact.position}/>
                            <label className='contact-wrap__label' htmlFor='contact.phone'>Phone Number</label>
                            <input onChange={this.onSave} name="contact.phone" defaultValue={this.state.warehouse.contact.phone}/>
                            <label className='contact-wrap__label' htmlFor='contact.email'>Email</label>
                            <input onChange={this.onSave} name="contact.email" defaultValue={this.state.warehouse.contact.email}/>
                        </div>
                    
                    </section>
                </div>
                <div className='button-wrap'>
                    <button className='button-wrap__cancel'>Cancel</button>
                    <button className='button-wrap__save'>Save</button>
                </div>
              </form>
            
        </>
 
 )
    }
}
