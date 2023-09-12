import logo from './logo.svg';
import './App.css';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import {useEffect, useState} from "react"
let arr = []

const categories = ["TV Dramas", "Trending Now", "Top Rated", "Comedy"]

//Function to get content from the API

 function App() {
  //Variables to store JSON to state
  const [genres, setGenres] = useState({})
  const [movies, setMovies] = useState({})

  function getContent(obj, url, key){
    
    fetch(`${url}api_key=${key}`)
    .then(data=>data.json())
    .then(json=>{
      // newnew = item
      // getGenres(item)
      if (obj == genres){
        setGenres(json)
      }
      else{
        setMovies(json)
      }
      
    })
  }


  useEffect(()=>{
    getContent(genres,"https://api.themoviedb.org/3/genre/movie/list?", "55c56b9f930280a2563491ffe49d383f")
    getContent(movies, "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=&", "55c56b9f930280a2563491ffe49d383f")
  }, [])
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />
      {/* Hero Banner */}
      {console.log(movies)}
      <Banner />
      {/* Content Section */}
      <main>
      {Object.keys(genres).length !== 0 ? (genres.genres.map(genre=>(
      <div key={genre.name} className="movie__carousel">
      <div className="slider__container">
        <div className="movie__container">
          <h2>{genre.name}</h2>
        </div>
        <div className="slider">
          {Object.keys(movies).length !== 0 ? movies.results.map(movie=><div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" /></div>) : console.log("NULLL")}
          <div className="next-navigation"><Icon 
            className="arrow-next"
            path={mdiChevronRight}
            title="User Profile"
            size={3}
            color="#fff"
          />   </div>      
                
        </div>
      </div>
    </div>))):""}
      </main>
    </div>
  );
}

export default App;
