import './App.css';

import Home from "./pages/Home"
import { useEffect, useState} from "react"
import Modal from './features/modal/modal';
import { movieSlice } from './features/movies/movieSlice';
import { saveMovie } from './features/movies/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

// let arr = []
let isLoaded = false;
let finishedLoading = false;
// let movieListSaved = false;
let movieList = [];

//Function to get content from the API

function App() {
  //Variables to store JSON to state
  const [genres, setGenres] = useState({})
  const [movies, setMovies] = useState({})
  const dispatch = useDispatch()
  const movieState = useSelector(state => state.movie.value)
  // const [allMovies, setAllMovies] = useState({})
  // const modalState = useSelector(state => state.active.value)


  function getContent(obj, url, key){
    
   fetch(`${url}api_key=${key}`)
    .then(data=>data.json())
    .then(json=>{
      if (obj === "genres"){
        setGenres(json.genres)
      }
      else{
        setMovies(json)
      }
    })
  }

  useEffect(()=>{
    
    //Set an isloaded variable and sets to true once the function is called and saved to state 
    if(!isLoaded){
      getContent("genres","https://api.themoviedb.org/3/genre/movie/list?", "55c56b9f930280a2563491ffe49d383f")
    }
    isLoaded = true
  }, [genres])

  useEffect(()=>{

    //WORKAROUND TO GET THIS TO RUN ONCE. FIX IN FUTURE VERSIONS
    //If genre state isn't empty
    if(!finishedLoading){
      if(Object.keys(genres).length !== 0){
        // if(movieList === false){
          for(const item in genres){
            const getMovies = (obj, url, key) =>{
              fetch(`${url}api_key=${key}`)
              .then(data=>data.json())
              .then(json=>{
                let id = genres[item].id
                let result = json.results
                let val = [[id,result]]
                //  console.log(movieList)
                movieList.push(...val)
                setMovies(movieList)
                // console.log(movies)
                dispatch(saveMovie(movieList))
              })            
            }
            getMovies("movies", `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genres[item].id}&`, "55c56b9f930280a2563491ffe49d383f")
            
            finishedLoading = true
          }
        // }
        }
        
      }
  },[genres, movies])
  
  

  function getMovieContent(data,id){
    let returnedData = []
    data.filter(row => {
      //IDs from API
      if(row[0] === id){
        // return row[1]
        returnedData.push(row[1])
      }
    })
    // console.log(returnedData)
    return returnedData
  }

  return (
    <div className="App">
      {/* FIX MODAL SO IT DOESN"T SHOW UNLESS CLICKING THE MOVIE BUTTON and then add data*/}
      <Modal />
      {movieState.length > 0 ? <Home genres={genres} movies={movies} /> : <div>Loading</div>}
    </div>
  );
}

export default App;
