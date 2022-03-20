import './Modal.scss'
import axios from 'axios'
import close from '../../assets/icons/close-24px.svg'

function Modal(props) {

        let firstMsg='';
        let locationMsg ='';

        function handleClick(id, route){
            let url=''
            if (route === 'warehouse') url='http://localhost:9000/warehouses/delete/'
            if (route === 'inventory') url='http://localhost:9000/inventories/delete/'
            console.log('This is the route', route)
            axios.delete(url+id)
            .then((response) => {
                console.log(response.data)
                props.onClose()
            })
            .catch(e => {
                console.log(e)
            })
        }

        if (!props.show){
            return null
        }

        if (props.route === 'warehouse') firstMsg = `the ${props.name}`
        if (props.route === 'inventory') firstMsg = `${props.name}`
        
        if (props.route === 'warehouse') locationMsg = `the list of warehouses`
        if (props.route === 'inventory') locationMsg = `inventory list`

        const modalMessage = `Please confirm that youd like to delete ${firstMsg} from the ${locationMsg}. You won't be able to undo this action.`

        return(
            <div className="modal" onClick={props.onClose}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <div className='modal__content-close'><img onClick={props.onClose} src={close} alt="Close X Icon"/></div>
                    <h2>Delete {props.name} warehouse?</h2>
                    <p>{modalMessage}</p>
                    
                    <div className='modal__buttons-container'>
                        <ul className="modal__buttons">
                            <li><button className="modal__button-cancel" onClick={props.onClose}>Cancel</button></li>
                            <li><button className="modal__button-delete" onClick={() => handleClick(props.id, props.route)}>Delete</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        )

}
export default Modal