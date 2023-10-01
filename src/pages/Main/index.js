import Card from "../../components/Card";

import Icon from '@mdi/react';
import React from "react";
import {lazy, Suspense} from "react"
import { mdiChevronRight } from '@mdi/js';
import useGetData from "../../hooks/useGetData";
import {useGetGenres} from "../../hooks/useGetGenres";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"

let movieCollection = []

function getMoviesFromGenre(series, id){
    movieCollection = (Object.values(series).filter(show => show["id"] === id).map(item => item.results))
    // console.log("COLL", movieCollection)
}

//Template for before the page loads
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

const MainTemplate =() =>{
    useGetGenres("movies")
    useGetData("movies")
    const genreState = useSelector(state => state.genres.value)
    const movieState = useSelector(state => state.movies.value)
    
    return(
        <div>
            {/* Navigation */}
            {/* Hero Banner */}
            {/* <Banner/> */}
            {/* Content Section */}
            <main>
                <div className="movie__carousel">
                
                    {Object.keys(genreState).length !== 0? genreState.genres.map((genre, index)=>(
                        
                        <div className="slider__container">
                            
                            {movieState.length > 1 ? (
                                <div>
                                    <div className="movie__container">
                                    <h2>{genre.name}</h2>
                                    {/* <div style={{width:"100px", height: "30px",marginBottom: "0.5em", backgroundColor: "rgb(50 50 50)"}}></div> */}
                                    </div>
                                    <motion.div animate={{ x: 0, z:20 }} className="slider">
                                        {/* Pass movie arrays and ID to return data from API */}
                                        {getMoviesFromGenre(movieState, genre.id)}
                                        {/* {movieState.length > 1 ? (
                                            console.log(" ")
                                        ) : <div>Loading</div>} */}
                                        
                                        
                                        {movieCollection.map(item => item.map(val => 
                                            <Card imageUrl={val.backdrop_path} movie={val} />
                                        ))} 
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
                                    </motion.div>
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
            </main>
        </div>
    )
}

export default MainTemplate