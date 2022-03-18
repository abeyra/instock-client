import './Details.scss'; 
import Button from '../Button';
import CardHeader from '../CardHeader';
// import WarehouseDetailsPage from '../../pages/WarehouseDetailsPage/WarehouseDetailsPage';



export default function Details() {
    return (
        <>
        <article className="card">
            <div className="card__tablet">
                <CardHeader 
                text='King West' />
                    <div className="card__cta">
                        <Button 
                        text="+ Add New Item" />
                    </div>
                {/* <WarehouseDetailsPage/> */}
                   
            </div>
        </article>
        </>
    )
}