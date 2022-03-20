import './ItemList.scss';
import Item from '../Item';
import Sort from '../../assets/Icons/sort-24px.svg';
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function ItemList({ list }) {

    const [show, setShow] = useState(false)
    const [ID, setID] = useState('')
    const [name, setName] = useState('')

    function handleClick(truefalse, id, itemName,){
        setShow(truefalse)
        setID(id)
        setName(itemName)
    }
    return (
        <>
        <Modal onClose={() => setShow(false)} show={show} id={ID} name={name} route='inventory'  />
        <section>
            <div className="field">
                <div className="field__section">
                    <h4 className="field__name">
                        Inventory item
                    </h4>
                    <img 
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="field__section">
                    <h4 className="field__name">
                        Category
                    </h4>
                    <img
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="field__section">
                    <h4 className="field__name">
                        Status
                    </h4>
                    <img 
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="field__section">
                    <h4 className="field__name">
                        QTY
                    </h4>
                    <img 
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                <div className="field__section">
                    <h4 className="field__name">
                        Warehouse
                    </h4>
                    <img 
                    className="field__icon"
                    src={Sort}
                    alt="Sort icon."
                    />
                </div>
                    <h4 className="field__name field__name--action">
                        Action
                    </h4>
            </div>
            
                <ul>
                    {list.map(inventory => {
                        return (
                            <Item
                            handleClick = {handleClick}
                            key={inventory.id}
                            id={inventory.id}
                            warehouseId={inventory.warehouseID}
                            warehouseName={inventory.warehouseName}
                            itemName={inventory.itemName}
                            category={inventory.category}
                            status={inventory.status}
                            quantity={inventory.quantity}
                            />
                        )
                    })
                    }
                </ul>
        </section>
        </>
    )
}