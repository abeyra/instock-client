import './Card.scss'; 
import Search from '../Search';
import Button from '../Button';
import CardHeader from '../CardHeader';
import ItemList from '../ItemList';


export default function Card({ list }) {
    return (
        <>
        <article className="card">
            <div className="card__tablet">
                <CardHeader 
                text="Inventory" 
                />
                    <div className="card__cta">
                        <Search placeholder="Search..." 
                        />
                            <div className="card__btn">
                                <Button 
                                text="+ Add New Item" 
                                />
                            </div>
                    </div>
            </div>
                        <div className="card__list">
                            <ItemList 
                            list={list}
                            />  
                        </div>
        </article>
        </>
    )
}