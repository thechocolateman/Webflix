import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import {useGetGenres} from "../../hooks/useGetGenres";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"

let movieCollection = []

function getMoviesFromGenre(series, id){
    movieCollection = (Object.values(series).filter(show => show["id"] === id).map(item => item.results))
}

function MainTemplate(){
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
                    {Object.keys(genreState).length !== 0? genreState.genres.map(genre=>(
                        <div className="slider__container">
                            <div className="movie__container">
                                <h2>{genre.name}</h2>
                            </div>
                            <motion.div animate={{ x: 40 }} className="slider">
                                {/* Pass movie arrays and ID to return data from API */}
                                {movieState.length > 1 ? getMoviesFromGenre(movieState, genre.id) : <div>Loading</div>}
                                {movieCollection.map(item => item.map(val => <Card imageUrl={val.backdrop_path} movie={val} />))} 
        
                                <div className="next-navigation">
                                    <Icon
                                        className="arrow-next"
                                        path={mdiChevronRight}
                                        title="User Profile"
                                        size={3}
                                        onClick={(e)=>{
                                            
                                            document.getElementsByClassName("slider")[0].style.marginLeft += `${document.getElementsByClassName("slider")[0].style.marginLeft + 300}px`
                                            console.log('NUM', document.getElementsByClassName("slider")[0].style.marginLeft)
                                        }}
                                        color="#fff" />
                                        
                                </div>
                            </motion.div>
                        </div>
                    )
                    
                    
                    ) : <div>Loading</div>}
                </div>
            </main>
        </div>
    )
}

export default MainTemplate