import { useSelector, useDispatch } from "react-redux"
import { toggleModal } from "./modalSlice"
export const Modal = () =>{

    const modalState = useSelector(state => state.active.value)
    const dispatch = useDispatch()

    return(
        <div className="modal">
            Modal
            <button onClick={()=> {
                dispatch(toggleModal())
                console.log(modalState)
            }}>
                Close
            </button>
        </div>
    )
}
export default Modal