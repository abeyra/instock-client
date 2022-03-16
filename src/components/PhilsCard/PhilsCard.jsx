import './PhilsCard.scss'; 
import Search from '../Search';
import Button from '../Button';
import CardHeader from '../CardHeader';


export default function PhilsCard() {
    return (
        <>
        <div className="card-bg">
            <article className="card">
                <div className="card__tablet">
                    <CardHeader 
                    text="Warehouse"
                    />
                        <div className="card__cta">
                            <Search 
                            placeholder="Search.."/>
                            <Button 
                            text="warehouse"
                            />
                        </div>
                </div>
            </article>
        </div>
        </>
    )
}