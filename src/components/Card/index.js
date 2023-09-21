import Icon from "@mdi/react";
import { mdiPlay,mdiPlus, mdiThumbUpOutline, mdiChevronDown } from '@mdi/js';
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../features/modal/modalSlice";
import { activeMovie } from "../../features/movies/movieSlice";

export default function Card(props){
    // const modalState = useSelector(state => state.active.value)
    // const activeMovieState = useSelector(state => state.movie.value)
    const dispatch = useDispatch()

    return(
        <div className='carousel__img__container' 
            onMouseEnter={(e)=>
                e.target.className === "carousel__img__container" ? e.target.querySelector(".modal__container").style.display="flex" : 'null'
                // console.log("props: ", props)
            
            }
            
            onMouseLeave={(e)=>e.target.className === "carousel__img__container" ? e.target.querySelector(".modal__container").style.display="none" : console.log(e.target.className)}
            >
            <img src={`https://image.tmdb.org/t/p/original/${props.imageUrl}`} alt="" />
            <div className="modal__container active">
                <div className="card__actions">
                    <div  className="play-icon" ><Icon path={mdiPlay} color="black" size={1} onClick={()=>console.log("clicked")}/></div>
                    <div className="add-icon"><Icon  path={mdiPlus} color="white" size={1} onClick={()=>console.log("clicked")}/></div>
                    <div className="thumbs-icon"><Icon  path={mdiThumbUpOutline} color="white" size={0.8} onClick={()=>console.log("clicked")}/></div>
                    <div className="down-icon"><Icon  path={mdiChevronDown} color="white" size={1} onClick={()=>{
                        dispatch(toggleModal(props.movie))
                        }}/></div>
                </div>
                <p>{props.movie.title}</p>
                {/* {console.log("MOV", props.movie)} */}
                {/* <div className="movie__info">
                    <div className="match">99%</div>
                    <div className="age">TV-14</div>
                    <div className="duration">2hr 38mins</div>
                </div> */}
                <div className="movie__tags">
                    <div className="tag">Comedy</div>
                    <div className="tag">Romance</div>
                </div>
            </div>
        </div>)
}