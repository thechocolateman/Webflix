import './App.css';

import MainTemplate from "./pages/Main"
import { useEffect, useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
// import {  } from 'react-router';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import Splash from './pages/Splash';
// import Router from './Router';
import { useLocation } from 'react-router';
import TvTemplate from './pages/TV';

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
  // const movieState = useSelector(state => state.movie.value)
  // function getContent(obj, url, key){
    
  //  fetch(`${url}api_key=${key}`)
  //   .then(data=>data.json())
  //   .then(json=>{
  //     if (obj === "genres"){
  //       setGenres(json.genres)
  //     }
  //     else{
  //       setMovies(json)
  //     }
  //   })
  // }

  // function getMovieContent(data,id){
  //   let returnedData = []
  //   data.filter(row => {
  //     //IDs from API
  //     if(row[0] === id){
  //       // return row[1]
  //       returnedData.push(row[1])
  //     }
  //   })
  //   // console.log(returnedData)
  //   return returnedData
  // }

  function test(){}

  function Main(){
    return(
      <MainTemplate /> 
    )
  }
  function TvSeries(){
    return(<TvTemplate/>)
  }

  
  return (
    <div>
        <Navbar/>
        <Routes>
                {/* <Route index element={<Home />} /> */}
              <Route path="/splash" element={<Splash />} key={Date.now()}/>
              <Route path="/" element={<Main />} key={Date.now()} />
              <Route path="/home" element={<MainTemplate />} key={Date.now()}/>
              <Route path="/movies" element={<MainTemplate />} key={Date.now()}/>
              <Route path="/tvseries" element={<TvTemplate />} key={Date.now()}/>
              {/* <Route path="*" element={<Splash />} /> */}
              {/* </Route> */}
              {/* <Route exact path="/about" element={<About/>}/> */}
              
        </Routes>
        </div>
  );
}

export default App;
