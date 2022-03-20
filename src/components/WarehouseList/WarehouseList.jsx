import './WarehouseList.scss'; 
import Trash from '../../assets/Icons/delete_outline-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg'
import { Component } from 'react/cjs/react.production.min';
import axios from 'axios';
import Modal from '../Modal/Modal'
import { warehouseAPI } from '../../util/warehouseAPI';
import Chevron from '../../assets/Icons/chevron_right-24px.svg';
import Sort from '../../assets/Icons/sort-24px.svg';



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

    componentDidUpdate(){
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
                            {/* <div className='header__size'> */}
                            {/* <div className="warehouse-list__tablet2"> */}
                                <div className="warehouse-list">
                                    <div className="warehouse-list__1">
                                        <h4 className='warehouse-list__field'>
                                            Warehouse
                                        </h4>
                                            <div className="warehouse-list__link">    
                                                <p className='warehouse-list__record warehouse-list__record--link'>
                                                    {item.name}
                                                </p>
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
                                                {/* <img src={trash} alt='trash can icon' onClick={() => this.setState({showModal: true, id: item.id, name: item.name})} />
                                                <img className='header__edit' alt='edit pencil icon' src={edit}  /> */}
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
                            {/* </div> */}
                            </div>
                        )  
                    })} 
                </div>
            </div>  
        )
    }  
}