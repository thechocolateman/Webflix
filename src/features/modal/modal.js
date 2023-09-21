import { useSelector, useDispatch } from "react-redux"
import { toggleModal } from "./modalSlice"
export const Modal = () =>{

    const modalState = useSelector(state => state.active.value)
    const selectedMovie = useSelector(state => state.active.selectedMovie)
    const dispatch = useDispatch()

    return(
        <div className={modalState === true ? `modal modal-active` : "modal-close"} >
            <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}/>
            
            <div className="movie-info">
                <h3>{selectedMovie.title}</h3>
                <p>{selectedMovie.overview}</p>
                <ul>
                    <li>Genre: </li>
                    <li>Release Date: {selectedMovie.release_date}</li>
                    <li>Average Vote: {selectedMovie.vote_average}</li>
                    <li>Language: {selectedMovie.original_language}</li>
                </ul>
            </div>
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