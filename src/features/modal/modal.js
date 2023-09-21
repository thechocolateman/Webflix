import { useSelector, useDispatch } from "react-redux"
import { toggleModal } from "./modalSlice"
export const Modal = () =>{

    const modalState = useSelector(state => state.active.value)
    const selectedMovie = useSelector(state => state.active.selectedMovie)
    const dispatch = useDispatch()

    return(
        <div className={modalState === true ? `modal-active` : "modal-close"} >
            <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`}/>
            <button onClick={()=> {
                dispatch(toggleModal())
                console.log("after :", selectedMovie)
            }}>
                Close
            </button>
        </div>
    )
}
export default Modal