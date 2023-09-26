import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import { useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import {useGetGenres} from "../../hooks/useGetGenres";
import { useSelector } from "react-redux";
let movieCollection = []

function getMoviesFromGenre(series, id){
    // movieCollection = movies.filter(movie => movie[0] === id)
    movieCollection = (Object.values(series).filter(show => show["id"] === id).map(item => item.results))
    // for (const show in series){
    //     console.log("fkjdf", series[show].filter())
    // }
    // movieCollection = movies.results.filter(movie => movie[0] === id)
}



const TvTemplate = (props) =>{
    useGetGenres("tv")
    useGetData("tv")
    const genreState = useSelector(state => state.genres.value)
    const tvState = useSelector(state => state.tvSeries.value)
    // console.log(genreState.genres.length)
    // tvState.length > 0 ? console.log("TV", tvState) : console.log("ejkjke")
    
    return(
        <div>
            {/* {console.log("rfedsx", genreState.genres.length)} */}
            {/* Navigation */}
            {/* <Navbar/> */}
            {/* Hero Banner */}
            <Banner />
            {/* Content Section */}
            <main>
                {/* {console.log(props.movies)} */}
                <div className="movie__carousel">
                    {Object.keys(genreState).length !== 0? genreState.genres.map(genre=>(
                        <div className="slider__container">
                            <div className="movie__container">
                                <h2>{genre.name}</h2>
                                {/* {console.log(genre.id)} */}
                            </div>
                            <div className="slider">
                                {/* Pass movie arrays and ID to return data from API */}
                                {tvState.length > 1 ? getMoviesFromGenre(tvState, genre.id) : ''}
                                {/* {console.log(movieCollection)} */}
                                {/* {movieCollection.map(item => item[1].map(val => <Card imageUrl={val.backdrop_path} movie={val} />))}  */}
                                {movieCollection.map(item => item.map(val => <Card imageUrl={val.backdrop_path} movie={{"title": val.name}} />))} 
        
                                <div className="next-navigation">
                                    <Icon
                                        className="arrow-next"
                                        path={mdiChevronRight}
                                        title="User Profile"
                                        size={3}
                                        color="#fff" />
                                </div>
                            </div>
                        </div>
                    )
                    
                    
                    ) : console.log("NO")}
                </div>
            </main>
        </div>
    )
}

export default TvTemplate