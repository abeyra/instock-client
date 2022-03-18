import './ItemList.scss';
import Item from '../Item';
import Sort from '../../assets/icons/sort-24px.svg';



export default function ItemList({ list }) {
    return (
        <>
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