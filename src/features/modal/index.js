import { useSelector, useDispatch } from "react-redux"
import Icon from "@mdi/react";
import { mdiPlay,mdiPlus, mdiThumbUpOutline, mdiClose, mdiChevronDown } from '@mdi/js';
import { closeModal } from "./modalSlice"
import { motion } from "framer-motion"

export const Modal = () =>{

    const modalState = useSelector(state => state.active.value)
    const genreState = useSelector(state => state.genres.value)
    const selectedMovie = useSelector(state => state.active.selectedMovie)
    const dispatch = useDispatch()
    const variants = {
        open: { opacity: 1, x: "-50%", y: "-50%", z:"50%"  },
        closed: { opacity: 0 },
        transition: {duration: 5}
      }

    return(
        <div 
        style={modalState === true? {display: "block"} : {display: "none"}}
        className="modal__overlay">
        <motion.div  
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 5 }}
        animate={modalState === true? "open" : "closed"}
        variants={variants}
        className="modal modal-active">
        {/* // className={modalState === true ? `modal modal-active` : "modal-close"} > */}
            <div className="modal__action__container">
            <div className="bottom__shadow"></div>
                <img src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`}/>
                <div className="overlay__btns">
                    <button className="overlay-play-icon"><Icon path={mdiPlay} color="black" size={1} onClick={()=>console.log("clicked")}/><strong>Play</strong></button>
                    {/* <div className="overlay-play-icon" ><Icon path={mdiPlay} color="white" size={3} onClick={()=>console.log("clicked")}/></div> */}
                    <div className="overlay-add-icon"><Icon  path={mdiPlus} color="white" size={1} onClick={()=>console.log("clicked")}/></div>
                    <div className="overlay-thumbs-icon"><Icon  path={mdiThumbUpOutline} color="white" size={2} onClick={()=>console.log("clicked")}/></div>
                </div>
                <div className="modal__close__btn">
                <Icon path={mdiClose} onClick={()=> {
                    dispatch(closeModal())
                    console.log("after :", selectedMovie)
                }} />
            </div>
            </div>
            
            

            <div className="movie-info">
                <h2>{selectedMovie.title}</h2>
                <p>{selectedMovie.overview}</p>
                <ul>
                    <li>Genre: {Object.keys(genreState).length > 1 ? selectedMovie.genre_ids : "" }</li>
                    {/* {console.log("MODAL", genreState.genres)} */}
                    <li>Release Date: {selectedMovie.release_date}</li>
                    <li>Average Vote: {selectedMovie.vote_average}</li>
                    <li>Language: {selectedMovie.original_language}</li>
                </ul>
            </div>
            
        </motion.div>
        </div>
    )
}
export default Modal