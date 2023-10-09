
import Icon from '@mdi/react';
import {lazy, Suspense} from "react"
import Card from "../../components/Card";
import { mdiChevronRight } from '@mdi/js';
import { motion } from "framer-motion"
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
let movieCollection = []

function getMoviesFromGenre(series, id){
    movieCollection = (Object.values(series).filter(show => show["id"] === id).map(item => item.results))
    // console.log("COLL", movieCollection)
}

function EmptyStateCard(){
    return(
     <div className="template-container">
     <Card movie={{"title":"d"}}/>
     <Card movie={{"title":"d"}}/>
     <Card movie={{"title":"d"}}/>
     <Card movie={{"title":"d"}}/>
     <Card movie={{"title":"d"}}/>
     <Card movie={{"title":"d"}}/>
     <Card movie={{"title":"d"}}/>
     <Card movie={{"title":"d"}}/>
 </div>
    )
 }

 function ForwardArrow(){
    return(
    <div className="next-navigation">
        <Icon
            className="arrow-next"
            path={mdiChevronRight}
            title="User Profile"
            size={3}
            onClick={(e)=>{
                let translateValue = document.getElementsByClassName("slider")[0].style.transform.replace(/[^0-9\-.,]/g, '').split(',')[0]
                // document.getElementsByClassName("slider")[0].style.marginLeft += `${document.getElementsByClassName("slider")[0].style.marginLeft -300}px`
                document.getElementsByClassName("slider")[0].style.transform = `translateX(${translateValue - 400}px)`
            }}
            color="#fff" />
        
    </div>
    )
 }
 const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function BasePage(props){
    let genreState = props.genreState
    let movieState = props.movieState

    return(
        //All other pages iterate based off of genres that are fetched from the API. 

        props.page == "latest" ? <div>Latest</div> : (

        <main>
            <div className="movie__carousel">
                {Object.keys(genreState).length !== 0? genreState.genres.map((genre, index)=>(
                    <div className="slider__container" key={genre.id}>
                        {movieState.length > 1 ? (
                            <div>
                                <div className="movie__container">
                                    <h2>{genre.name}</h2>
                                </div>
                                <Carousel 
                                    responsive={responsive} 
                                    // animate={{ x: 0, z:20 }} 
                                    className="slider"
                                    containerClass="slider"
                                    slidesToSlide={6}
                                    sliderClass="row__container"
                                    // ref={el => (this.Carousel = el)} 
                                    // additionalTransfrom={-20 * 5}
                                    // customTransition="all .5"
                                    // transitionDuration={500}
                                >
                                    {/* Pass movie arrays and ID to return data from API */}
                                    {getMoviesFromGenre(movieState, genre.id)}
                                    
                                    {movieCollection.map(item => item.map((val) =>(
                                    <Card itemKey={`${genre.id}-${val.id}`} imageUrl={val.backdrop_path} movie={val} />
                                    )))} 
                                    <ForwardArrow/>
                                </Carousel>
                            </div>
                                
                                // getMoviesFromGenre(movieState, genre.id)
                                ) : (
                                    <div>
                                        <div className="movie__container">
                                        <div style={{width:"100px", height: "30px",marginBottom: "0.5em", backgroundColor: "rgb(50 50 50)"}}></div>
                                        </div>
                                        <EmptyStateCard/>
                                    </div>
                            )}
                        
                        
                    </div>
                )
                
                
                ) : <EmptyStateCard/>}
            </div>
    </main>)
    )
}