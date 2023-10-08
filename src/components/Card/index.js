// TODO 
// Add Genres to redux
// 


import Icon from "@mdi/react";
import { mdiPlay,mdiPlus, mdiThumbUpOutline, mdiChevronDown } from '@mdi/js';
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/modal/modalSlice";
import { activeMovie } from "../../features/movies/movieSlice";
import { useState } from "react";
import { motion } from "framer-motion"




export default function Card(props){
    const [activeUrl, setUrl] = useState('')

    // const modalState = useSelector(state => state.active.value)
    // const activeMovieState = useSelector(state => state.movie.value)

    function getVideo(action, id){
        switch (action){
            case "add":
                let url = ''
                fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=55c56b9f930280a2563491ffe49d383f`)
                .then(res => res.json())
                .then(json => setUrl(`https://www.youtube.com/watch?v=${json.results[0].key}`))
                .catch(err => console.error('error:' + err));
                break;
            case "remove":
                setUrl("")
                break;
        }
    }

    const dispatch = useDispatch()

    return(
        <motion.div key={props.itemKey} id={`movie-${props.itemKey}`} className={`carousel__img__container`}
            whileHover={{
                scale: 1.5,
                transition: { duration: 0.4 },
            }}
            onHoverStart={(e)=>{
                (e.target.className === "carousel__img__container")? e.target.querySelector(".modal__container").style.display="flex" : console.log("erfde")
            // console.log(e.target)}
                try {
                    document.getElementsByClassName("next-navigation")[0].style.display="block"
                    // console.log(props.movie.id)
                    getVideo("add", props.movie.id)
                    
                    document.getElementById(`movie-${props.itemKey}`).innerHTML += `<iframe width=420 height=315
                    src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'></iframe>`
                } catch (error) {
                    
                }
            }}
            
            onHoverEnd={(e)=>{
                e.target.className === "carousel__img__container" ? e.target.querySelector(".modal__container").style.display="none" : console.log(e.target.className)
                try{
                    document.getElementsByClassName("next-navigation")[0].style.display="none"
                    getVideo("remove", props.movie.id)
                }
                catch{}
            }}
            >
            <img src={`https://image.tmdb.org/t/p/original/${props.imageUrl}`} style={{display: "none"}} alt="" />
            <div className="modal__container">
                <div className="card__actions">
                    <div  className="play-icon" ><Icon path={mdiPlay} color="black" size={1} onClick={()=>console.log("clicked")}/></div>
                    <div className="add-icon"><Icon  path={mdiPlus} color="white" size={1} onClick={()=>console.log("clicked")}/></div>
                    <div className="thumbs-icon"><Icon  path={mdiThumbUpOutline} color="white" size={0.8} onClick={()=>console.log("clicked")}/></div>
                    <div className="down-icon"><Icon  path={mdiChevronDown} color="white" size={1} onClick={(e)=>{
                        dispatch(openModal(props.movie))
                        // console.log("CLOSEST : ", e.currentTarget.parentElement.closest(".modal__container"))
                        e.currentTarget.parentElement.closest(".modal__container").style.display="block"
                        }}/></div>
                </div>
                <p>{props.movie.title !== undefined ? props.movie.title : props.movie.name}</p>
                <div className="movie__tags">
                    <div className="tag">Comedy</div>
                    <div className="tag">Romance</div>
                </div>
            </div>
        </motion.div>)
}