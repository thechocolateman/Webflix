import logo from './logo.svg';
import './App.css';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
import {useCallback, useEffect, useState} from "react"
let arr = []
let isLoaded = false;
let firstRun = true;
let movieListSaved = false;
let movieList = [];

const categories = ["TV Dramas", "Trending Now", "Top Rated", "Comedy"]

//Function to get content from the API

 function App() {
  //Variables to store JSON to state
  const [genres, setGenres] = useState({})
  const [movies, setMovies] = useState()
  const [allMovies, setAllMovies] = useState({})

  function getContent(obj, url, key){
    
   fetch(`${url}api_key=${key}`)
    .then(data=>data.json())
    .then(json=>{
      if (obj == "genres"){
        setGenres(json.genres)
      }
      else{
        setMovies(json)
      }
      console.log("CALLED FUNCTION")
    })
  }

  //Get movies for each genre and store in state
  const getGenreMovies = useCallback =>(()=> {
    console.log("RUN")
    // genres.genres.map(()=>console.log("edsnkm"))
    // console.log("refdws")
  },[])

  // useEffect(()=>{
  //   console.log("RUNNNNN")
  //     getContent("genres","https://api.themoviedb.org/3/genre/movie/list?", "55c56b9f930280a2563491ffe49d383f")
  //     // console.log("EDX")

  //     // getGenreMovies()
  // }, [])



  useEffect(()=>{
    
    //Set an isloaded variable and sets to true once the function is called and saved to state 
    if(!isLoaded){
      getContent("genres","https://api.themoviedb.org/3/genre/movie/list?", "55c56b9f930280a2563491ffe49d383f")
      
    }
    else{

    }
    isLoaded = true
    // genres
    // genres.genres.map(genre=>arr.push(genre.name))
    // getContent("movies", "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35&", "55c56b9f930280a2563491ffe49d383f")
    // for (const item of arr){
    //   // console.log(item)
    // }return
    // return(console.log(arr))
  }, [])

  useEffect(()=>{

    //WORKAROUND TO GET THIS TO RUN ONCE. FIX IN FUTURE VERSIONS
    //If genre state isn't empty
    // if(firstRun){
      if(Object.keys(genres).length !== 0){
        // if(movieList === false){
          for(const item in genres){
            getMovies("movies", `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres[item].id}&`, "55c56b9f930280a2563491ffe49d383f")
            function getMovies(obj, url, key){
        
              fetch(`${url}api_key=${key}`)
              .then(data=>data.json())
              .then(json=>{
                let id = genres[item].id
                let result = json.results
                let val = [[id,result]]
                //  console.log(movieList)
                movieList.push(...val)
                // console.log(movieList.length)
              })
              movieListSaved = true
            }
          }
        // }
        }
      // }
  },[genres])
  
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />
      {/* Hero Banner */}
      {/* {console.log(movies)} */}
      <Banner />
      {/* Content Section */}
      <main>
        {isLoaded ? (
          (genres.map(genre=>(
            <div key={genre.name} className="movie__carousel">
            <div className="slider__container">
              <div className="movie__container">
                <h2>{genre.name}</h2>
              </div>
              <div className="slider">
                {console.log("MOCIEIKDMSNM", movies)}
                
                {/* {Object.keys(movies).length !== 0 ? movies.results.map(movie=><div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" /></div>) : console.log("NULLL")} */}
                <div className="next-navigation"><Icon 
                  className="arrow-next"
                  path={mdiChevronRight}
                  title="User Profile"
                  size={3}
                  color="#fff"
                />   </div>      
                      
              </div>
            </div>
          </div>)))
        ): console.log("HOW IS IT ", isLoaded)}
      </main>
    </div>
  );
}

export default App;
