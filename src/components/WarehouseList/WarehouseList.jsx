import './WarehouseList.scss'; 
import Trash from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg'
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom';
import { warehouseAPI } from '../../util/warehouseAPI';
import Chevron from '../../assets/icons/chevron_right-24px.svg';
import Sort from '../../assets/icons/sort-24px.svg';
import { Link } from 'react-router-dom';

export default class WarehouseList extends Component {
    state = {
        warehouse: [],
        showModal: false,
    }
    
    componentDidMount(){
        axios.get(warehouseAPI)
            .then((response) => {
                this.setState({warehouse: response.data})  
            })
    }
    
    render() {
        
        if (this.state.warehouse === []){
            return <h1>Loading....</h1>
        }
        return (
                
            <div>
                <Modal onClose={() => this.setState({showModal: false})} show={this.state.showModal} id={this.state.id} name={this.state.name} route='warehouse'/>
                <section>
            <div className="warehouse-field">
                <div className="warehouse-field__section warehouse-field__section--tab-warehouse">
                    <h4 className="warehouse-field__name">
                        Warehouse
                    </h4>
                    <img 
                    className="warehouse-field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="warehouse-field__section warehouse-field__section--tab-address">
                    <h4 className="warehouse-field__name">
                        Address
                    </h4>
                    <img
                    className="warehouse-field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="warehouse-field__section warehouse-field__section--tab-name">
                    <h4 className="warehouse-field__name">
                        Contact Name
                    </h4>
                    <img 
                    className="warehouse-field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="warehouse-field__section warehouse-field__section--tab-info">
                    <h4 className="warehouse-field__name">
                        Contact Information
                    </h4>
                    <img 
                    className="warehouse-field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                    <h4 className="warehouse-field__name warehouse-field__name--action">
                        Actions
                    </h4>
            </div>
                </section>
                
                <div className='header'>
                    {this.state.warehouse.map((item) => {
                        return(
                            <div className='header__container' key={item.id}>
                                <div className="warehouse-list">
                                    <div className="warehouse-list__1">
                                        <h4 className='warehouse-list__field'>
                                            Warehouse
                                        </h4>
                                            <div className="warehouse-list__link"> 
                                            <Link to="">
                                                <p className='warehouse-list__record warehouse-list__record--link'>
                                                    {item.name}
                                                </p>
                                                </Link>
                                                <img
                                                className="warehouse-list__link--icon" 
                                                src={Chevron}
                                                alt="Chevron icon."
                                                />
                                            </div>
                                                <h4 className='warehouse-list__field'>
                                                    Address
                                                </h4>
                                                <p className='warehouse-list__record warehouse-list__record--address'>
                                                    {item.address}, {item.city}, {item.country}
                                                </p>
                                    </div>
                                            <div className="warehouse-list__2">
                                                <h4 className='warehouse-list__field'>
                                                    Contact Name
                                                </h4>
                                                <p className='warehouse-list__record warehouse-list__record--name'>
                                                    {item.contact.name}
                                                </p>
                                                <h4 className='warehouse-list__field'>
                                                    Contact Information
                                                </h4>
                                                <p className='warehouse-list__record warehouse-list__record--info'>
                                                    {item.contact.phone} {item.contact.email}
                                                </p>
                
                                           </div>
                                           <div className="warehouse-list__icons-div--tab">
                                                <div className="warehouse-list__icons">
                                                    <img className="warehouse-list__delete" 
                                                    src={Trash} 
                                                    alt="Delete icon."
                                                    onClick={() => this.setState(
                                                        {showModal: true, id: item.id, name: item.name}
                                                    )}
                                                    />
                                                </div>
                                                    <div className="warehouse-list__icons--2">
                                                        <img className="warehouse-list__edit" 
                                                        src={Edit} 
                                                        alt="Edit icon."
                                                        />
                                                    </div>
                                            </div>
                                           
                                </div> 
                                <div className="warehouse-list__icons-div">
                                                <div className="warehouse-list__icons">
                                                    <img className="warehouse-list__delete" 
                                                    src={Trash} 
                                                    alt="Delete icon."
                                                    onClick={() => this.setState(
                                                        {showModal: true, id: item.id, name: item.name}
                                                    )}
                                                    />
                                                </div>
                                                    <div className="warehouse-list__icons--2">
                                                        <img className="warehouse-list__edit" 
                                                        src={Edit} 
                                                        alt="Edit icon."
                                                        />
                                                    </div>
                                            </div>          
                           
                            </div>
                    
                    <Modal onClose={() => this.setState({showModal: false})} show={this.state.showModal} id={this.state.id} name={this.state.name} route='warehouse'/>
                    <div className='header'>
                       {this.state.warehouse.map((item) => {
                           return(
                             <Link to={`/details/${item.id}`} >
                                 <div className='header__container' key={item.id}>

                                <div className='header__size'>
                                    <h3 className='list__field'>WAREHOUSE</h3>
                                    <p className='list__record'>{item.name}</p>
                                    <h3 className='list__field'>ADDRESS</h3>
                                    <p className='list__record'>{item.address}, {item.city}, {item.country}</p>
                                    <img src={trash} alt='trash can icon' onClick={() => this.setState({showModal: true, id: item.id, name: item.name})} />
                                </div>
                                <div className='header__size'>
                                    <h3 className='list__field'>CONTACT NAME</h3>
                                    <p className='list__record'>{item.contact.name}</p>
                                    <h3 className='list__field'>CONTACT INFORMATION</h3>
                                    <p className='list__record'>{item.contact.phone} {item.contact.email}</p>
                                    <img className='header__edit' alt='edit pencil icon' src={edit}  />
                                </div>    
                            </div> </Link>  
                           )  
                       })} 
                       
                       
                    </div>
                        )  
                    })} 
                </div>
            </div>  
        )
    }  
}