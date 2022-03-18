import './Item.scss';
import Trash  from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import Chevron from '../../assets/icons/chevron_right-24px.svg';

export default function Item({ itemName, category, status, quantity, warehouseName  }) {
    return (
        <>
        <div className="list__tablet">
            <li className="list">
                <div className="list__1">
                    <h4 className="list__field">
                        Inventory Item
                    </h4>
                        <div className="list__link">
                            <h3 className="list__record list__record--link">
                                {itemName}
                            </h3>
                            <img
                            className="list__link--icon" 
                            src={Chevron}
                            alt="Chevron icon."
                            />
                        </div>
                            <h4 className="list__field">
                                Category
                            </h4>
                            <h3 className="list__record list__record--category">
                                {category}
                            </h3>  
                </div>
                    <div className="list__2">
                        <h4 className="list__field">
                            Status
                        </h4>
                            <div className="list__stock-tablet">
                                <h3 className="list__record list__record--stock">
                                    {status}
                                </h3>
                            </div>
                                <h4 className="list__field">
                                    Qty
                                </h4>
                                <h3 className="list__record list__record--qty">
                                    {quantity}
                                </h3>
                                <h4 className="list__field">
                                    Warehouse
                                </h4>
                                <h3 className="list__record list__record--warehouse">
                                    {warehouseName}
                                </h3>
                    </div>

                <div className="list__icons-div--tab">
                    <div className="list__icons">
                        <img className="list__delete" 
                        src={Trash} 
                        alt="Delete icon."
                        />
                    </div>
                        <div className="list__icons--2">
                            <img className="list__edit" 
                            src={Edit} 
                            alt="Edit icon."
                            />
                        </div>
                </div>
            </li>
            <div className="list__icons-div">
                    <div className="list__icons">
                        <img className="list__delete" 
                        src={Trash} 
                        alt="Delete icon."
                        />
                    </div>
                        <div className="list__icons--2">
                            <img className="list__edit" 
                            src={Edit} 
                            alt="Edit icon."
                            />
                        </div>
                </div>
        </div>
        </>
    )
}