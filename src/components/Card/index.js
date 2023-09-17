import Icon from "@mdi/react";
import { mdiPlay,mdiPlus, mdiThumbUpOutline, mdiChevronDown } from '@mdi/js';


export default function Card(props){
    return(
        <div className='carousel__img__container' 
            onMouseEnter={(e)=>{e.target.querySelector(".modal__container").style.display="flex"}
            }
            onMouseLeave={(e)=>e.target.querySelector(".modal__container").style.display="none"}
            >
            <img src={`https://image.tmdb.org/t/p/original/${props.imageUrl}`} alt="" />
            <div className="modal__container">
                <div  className="play-icon" ><Icon path={mdiPlay} color="black" size={1} /></div>
                <div className="add-icon"><Icon  path={mdiPlus} color="white" size={1} /></div>
                <div className="thumbs-icon"><Icon  path={mdiThumbUpOutline} color="white" size={0.8} /></div>
                <div className="down-icon"><Icon  path={mdiChevronDown} color="white" size={1} /></div>
            </div>
        </div>)
}