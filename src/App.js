import logo from './logo.svg';
import './App.css';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
const categories = ["TV Dramas", "Trending Now", "Top Rated", "Comedy"]
let genres = {}

fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=55c56b9f930280a2563491ffe49d383f")
.then(data=>data.json())
.then(item=>{
  genres=item
  console.log("JKJMN", Object.values(genres))
})

fetch("https://api.themoviedb.org/3/discover/movie?api_key=55c56b9f930280a2563491ffe49d383f&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=action?api_key=55c56b9f930280a2563491ffe49d383f", {method: 'GET', headers: {accept: 'application/json'}})
.then(data=>data.json())
.then(item=>{
  console.log(item)
})

// consol e.log("NAME: ", document.querySelector(".slider__container")).addEventListener("hover", ()=>console.log("Hover"))

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />
      {/* Hero Banner */}
      
      <Banner />
      {/* Content Section */}
      <main>
            {
              Object.values(genres)[0].map(((category) =>(
                <div className="movie__carousel">
                  <div className="slider__container">
                    <div className="movie__container">
                      <h2>{category.name}</h2>
                    </div>
                    <div className="slider">
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div>
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div>
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div>
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div>
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div>
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div>                  
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div>                  
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div>                  
                      <div className='carousel__img__container'><img src="../images/manifest.jpeg" alt="" /></div> 
                      <div className="next-navigation"><Icon 
                        className="arrow-next"
                        path={mdiChevronRight}
                        title="User Profile"
                        size={3}
                        color="#fff"
                      />   </div>      
                            
                    </div>
                  </div>
                </div>
              )))
              }
      </main>
    </div>
  );
}

export default App;
