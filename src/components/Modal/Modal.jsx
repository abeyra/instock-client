import { Component } from "react/cjs/react.development";
import './Modal.scss'
import axios from 'axios'

function Modal(props) {

        function handleClick(id){
            console.log('in the click')
            axios.delete('http://localhost:9000/warehouses/delete/'+id)
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

        const modalMessage = `Please confirm that youd like to delete the ${props.name} from the list of warehouses. You won't be able to undo this action.`
        console.log('In the Medal id: ', props.id)
        console.log('In the Medal name: ', props.name)

        return(
            <div className="modal" onClick={props.onClose}>
                <div className="modal__content" onClick={e => e.stopPropagation()}>
                    <h1>Delete {props.name} warehouse?</h1>
                    <p>{modalMessage}</p>
                    <button className="modal__button-cancel" onClick={props.onClose}>Cancel</button>
                    {/* <button className="modal__button-delete" onClick={() => {console.log(`Going to Delete ${props.id} using API`)}}>Delete</button> */}
                    <button className="modal__button-delete" onClick={() => handleClick(props.id)}>Delete</button>
                </div>
            </div>
        )

}
export default Modal