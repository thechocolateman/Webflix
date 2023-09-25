import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import useGetData from "../../hooks/useGetData";
let movieCollection = []


function getMoviesFromGenre(movies, id){
    // movieCollection = movies.filter(movie => movie[0] === id)
    
    movieCollection = movies.filter(movie => movie[0] === id)
}

const MainTemplate = (props) =>{
    // useGetData("movies")
    return(<div>
        {/* Navigation */}
        <Navbar/>
        {/* Hero Banner */}
        <Banner />
        {/* Content Section */}
        <main>
            {/* {console.log(props.movies)} */}
            <div className="movie__carousel">
                {props.genres.length > 0 ? props.genres.map(genre => (<div className="slider__container">
                    <div className="movie__container">
                        <h2>{genre.name}</h2>
                    </div>
                    <div className="slider">
                        {/* Pass movie arrays and ID to return data from API */}
                        {props.movies.length > 1 ? getMoviesFromGenre(props.movies, genre.id) : ''}
                        {movieCollection.map(item => item[1].map(val => <Card imageUrl={val.backdrop_path} movie={val} />))}

                        <div className="next-navigation">
                            <Icon
                                className="arrow-next"
                                path={mdiChevronRight}
                                title="User Profile"
                                size={3}
                                color="#fff" />
                        </div>
                    </div>
                </div>)) : <div>EMPTY</div>}
            </div>
        </main>
    </div>)
}

export default MainTemplate