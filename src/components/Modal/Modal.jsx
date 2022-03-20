import './Modal.scss'
import axios from 'axios'
import close from '../../assets/Icons/close-24px.svg';

function Modal(props) {

        let firstMsg='';
        let locationMsg ='';
        let headerMsg = '';

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

        if (props.route === 'warehouse') firstMsg = `${props.name}`
        if (props.route === 'inventory') firstMsg = `${props.name}`
        
        if (props.route === 'warehouse') locationMsg = `the list of warehouses`
        if (props.route === 'inventory') locationMsg = `inventory list`

        if (props.route === 'warehouse') headerMsg = `Warehouse`
        if (props.route === 'inventory') headerMsg = `Inventory Item`

        const modalMessage = `Please confirm that you\'d like to delete ${firstMsg} from the ${locationMsg}. 
        You won't be able to undo this action.`

        const modalHeader = `Delete ${props.name} ${headerMsg} ?`

        return(
            <div className="modal" onClick={props.onClose}>
                <div className="modal__content" 
                onClick={e => e.stopPropagation()}>
                    <div className='modal__content-close'>
                        <img onClick={props.onClose} src={close} alt="Close X Icon"/>
                    </div>
                        <h1 className="modal__header">
                            {modalHeader}
                        </h1>
                        <p className="modal__message">
                            {modalMessage}
                        </p>
                        
                        <div className='modal__buttons-container'>
                            <div className="modal__buttons">
                                <button className="modal__button-cancel" 
                                onClick={props.onClose}>
                                    Cancel
                                </button>
                                <button className="modal__button-delete" 
                                onClick={() => handleClick(props.id, props.route)}>
                                    Delete
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        )

}
export default Modal