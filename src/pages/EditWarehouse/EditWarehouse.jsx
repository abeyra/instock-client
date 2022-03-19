import { Component } from 'react/cjs/react.development';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './EditWarehouse.scss';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import CardHeader from '../../components/CardHeader';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';

export default class Inventory extends Component {
    // state =  {
    //    warehouse: { contact: {} }
    // }
 

    render() {
         if (this.state.warehouse !== {}) {
    return (
        <>
            <div >
                {/* className="card__tablet" */}
                <div className='warehouse__info'>
                    <div className='warehouse__info--title'>
                        <Link to ={`/details/${this.state.warehouse.id}`}>
                        <img src={ArrowBack}/>
                        </Link>
                        <CardHeader text={'Hello'} />
                        {/* text={this.state.warehouse.name} */}
                    </div>
                </div>
              </div>
              <form className='form-wrap' onSubmit={(e) => this.handleSubmit(e)}>
                <div className='form-wrap__tablet'>
                    <section className='form-wrap__details'>
                        <h2 className='form-wrap__details--title'>Warehouse Details</h2>
                        <div className='form-wrap__details--wrap'>
                            <label className='form-wrap__details--label'>Warehouse Name</label>
                            <input onChange={this.onSaveEdits} />
                            <label className='form-wrap__details--label'>Street Address</label>
                            <input onChange={this.onSaveEdits} />
                            <label className='form-wrap__details--label'>City</label>
                            <input onChange={this.onSaveEdits} />
                            <label className='form-wrap__details--label'>Country</label>
                            <input onChange={this.onSaveEdits} />
                        </div>
                
                    </section>
                    <section className='contact-wrap'>
                        <h2 className='contact-wrap__title'>Contact Details</h2>
                        <div className='contact-wrap__wrap'>
                            <label className='contact-wrap__label'>Contact Name</label>
                            <input onChange={this.onSaveEdits} />
                            <label className='contact-wrap__label'>Position</label>
                            <input onChange={this.onSaveEdits} />
                            <label className='contact-wrap__label'>Phone Number</label>
                            <input onChange={this.onSaveEdits} />
                            <label className='contact-wrap__label'>Email</label>
                            <input onChange={this.onSaveEdits} />
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
}