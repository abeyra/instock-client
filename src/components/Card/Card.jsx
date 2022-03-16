import './Card.scss'; 
import Search from '../Search';
import Button from '../Button';
import CardHeader from '../CardHeader';


export default function Card() {
    return (
        <>
        <article className="card">
            <div className="card__tablet">
                <CardHeader 
                text="Inventory" />
                    <div className="card__cta">
                        <Search placeholder="Search..." />
                        <Button 
                        text="+ Add New Item" />
                    </div>
            </div>
        </article>
        </>
    )
}