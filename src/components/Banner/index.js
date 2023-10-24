//FIX BUG WRONG IMAGE SHOWING
//FIX BANNER BEING CALLED MULTIPLE TIMES
//INCREASE LOAD SPEED
import { useSelector } from "react-redux"

// FUNCTION TO RETURN RANDOM movie to display in header
let movie = ''
let gotRandom = false; //Set to true once we get the random movie
function randomMovie(movieState){
    if(!gotRandom){
        let randomNum = Math.floor(Math.random() * (movieState.length))
        let len = movieState[randomNum]["results"].length-1
        movie = movieState[randomNum]["results"][len]
        gotRandom = true
    }
}

export default function Banner (){
    const movieState = useSelector(state => state.movies.value)
    // randomMovie(movieState)
    // let imageUrl = movie["backdrop_path"]
    return(
        Object.keys(movieState).length > 2 && movie !== undefined ? (
            <section className="hero__banner" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie["backdrop_path"]})`}}>
                {randomMovie(movieState)}

                <div className="wrapper">
                    <div className="detail__container">
                        {/* {console.log("4rjdknejned")} */}
                        <h1>{movie["title"] !== undefined ? movie["title"] : movie["name"]}</h1>
                        <p>{movie["overview"]}</p> 
                        <div className="action-btns">
                        <button className='play-btn'>Play</button>
                        <button className='more-info-btn secondary'>More Info</button>
                        </div>
                    </div> 
                    {/* <img className='hero__img' src="" /> */}
                </div>
                <div className="banner__shadow"></div>
            </section>
            // console.log("SUP", movieState[2]["results"][0]["backdrop_path"])
        ):"Loading"
    )
}
