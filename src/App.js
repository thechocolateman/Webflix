import logo from './logo.svg';
import './App.css';
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner"
const categories = ["TV Dramas", "Trending Now", "Top Rated", "Comedy"]

const movieData = {
  categories: {
    "TV Dramas":{
      "Movie 1":{
        name:"",
        image:"",
        category:"",
        seasons:"",
        match:""
      },
      "Movie 2":{
        name:"",
        image:"",
        category:"",
        seasons:"",
        match:""
      },
      "Movie 3":{
        name:"",
        image:"",
        category:"",
        seasons:"",
        match:""
      },
      "Movie 4":{
        name:"",
        image:"",
        category:"",
        seasons:"",
        match:""
      },
    }, 
    "Trending Now":{
      
    }, 
    "Top Rated":{}, 
    "Comedy":{}
  }
}

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
              categories.map(((category) =>(
                <div className="movie__carousel">
                  <div className="slider__container">
                    <div className="movie__container">
                      <h2>{category}</h2>
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
