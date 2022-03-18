import { Component } from "react/cjs/react.development";
import './Modal.scss'

function Modal(props) {

        if (!props.show){
            return null
        }

        return(
            <div className="modal">
                <div className="modal__content">
                    <button className="modal__button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        )

}
export default Modal