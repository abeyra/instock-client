import { Component } from 'react/cjs/react.development';
import './EditWarehouse.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import CardHeader from '../../components/CardHeader';
import Search  from '../../components/Search/Search';
import Button from '../../components/Button/Button';

export default class Inventory extends Component {
    state =  {
       warehouse: { contact: {} }
    }
    

    // componentDidMount() {
    //   document.title = 'Warehouse Details'
    //   const warehouseId = this.props.match.params.id
    //   axios
    //   .get(`http://localhost:9000/warehouses/${warehouseId}`)
    //   // .get(`http://localhost:9000/warehouses/details/${warehouseId}`)
    //     .then(response => {   
    //       this.setState({
    //           chosenWarehouse: response.data
    //           })
    //         })
    //         .catch(err => console.log(err))
    //   }


    render() {
    return (
        <>
            <div >
                {/* className="card__tablet" */}
                <div className='warehouse__info'>
                    <div className='warehouse__info--title'>
                        <img src={ArrowBack}/>
                        <CardHeader text={'Hello'} />
                        {/* text={this.state.warehouse.name} */}
                    </div>
                </div>
              </div>
              <form className='form-wrap'>
                <div className='form-wrap__tablet'>
                    <section className='form-wrap__details'>
                        <h2 className='form-wrap__details--title'>Warehouse Details</h2>
                        <div className='form-wrap__details--wrap'>
                            <label className='form-wrap__details--label'>Warehouse Name</label>
                            <input/>
                            <label className='form-wrap__details--label'>Street Address</label>
                            <input/>
                            <label className='form-wrap__details--label'>City</label>
                            <input/>
                            <label className='form-wrap__details--label'>Country</label>
                            <input/>
                        </div>
                
                    </section>
                    <section className='contact-wrap'>
                        <h2 className='contact-wrap__title'>Contact Details</h2>
                        <div className='contact-wrap__wrap'>
                            <label className='contact-wrap__label'>Contact Name</label>
                            <input/>
                            <label className='contact-wrap__label'>Position</label>
                            <input/>
                            <label className='contact-wrap__label'>Phone Number</label>
                            <input/>
                            <label className='contact-wrap__label'>Email</label>
                            <input/>
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