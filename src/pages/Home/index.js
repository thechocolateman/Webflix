import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
let movieCollection = []

function getMoviesFromGenre(movies, id){
    movieCollection = movies.filter(movie => movie[0] === id)
}

const Home = (props) =>{
    return(
        <div>
            {/* Navigation */}
            <Navbar />
            {/* Hero Banner */}
            <Banner />
            {/* Content Section */}
            <main>            
                {/* {console.log(props.movies)} */}
                <div className="movie__carousel">
                {/* {console.log(movies)} */}
                {props.genres.length > 0 ? props.genres.map(genre => (<div className="slider__container">    
                        <div className="movie__container">
                            <h2>{genre.name}</h2>
                            {/* {console.log(genre.id)} */}
                        </div>
                        <div className="slider">
                            {/* Pass movie arrays and ID to return data from API */}
                            {getMoviesFromGenre(props.movies,genre.id)}
                            {movieCollection.map(item => item[1].map(val=><div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/original/${val.backdrop_path}`} alt="" /></div>))}
                                
                            {/* <div className='carousel__img__container'><img src={``} alt="" /></div>
                            <div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/original//9m161GawbY3cWxe6txd1NOHTjd0.jpg`} alt="" /></div>
                            <div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/original//9m161GawbY3cWxe6txd1NOHTjd0.jpg`} alt="" /></div>
                            <div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/original//9m161GawbY3cWxe6txd1NOHTjd0.jpg`} alt="" /></div>
                            <div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/original//9m161GawbY3cWxe6txd1NOHTjd0.jpg`} alt="" /></div>
                            <div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/original//9m161GawbY3cWxe6txd1NOHTjd0.jpg`} alt="" /></div>
                            <div className='carousel__img__container'><img src={`https://image.tmdb.org/t/p/original//9m161GawbY3cWxe6txd1NOHTjd0.jpg`} alt="" /></div> */}
                            <div className="next-navigation">
                                <Icon 
                                className="arrow-next"
                                path={mdiChevronRight}
                                title="User Profile"
                                size={3}
                                color="#fff"
                                />   
                            </div>    
                        </div>
                    </div>)): <div>EMPTY</div>}
                </div>
            </main>
        </div>
    )
}

export default Home