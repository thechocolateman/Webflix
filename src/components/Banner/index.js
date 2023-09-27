import { useSelector } from "react-redux"

export default function Banner (){
    const movieState = useSelector(state => state.movies.value)
    let imageUrl = movieState[4]["results"][0]["backdrop_path"]
    return(
        movieState.length > 15 ? (
            <section className="hero__banner" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${imageUrl})`}}>
                <div className="wrapper">
                    <div className="detail__container">
                        <h1>{movieState[4]["results"][0]["title"]}</h1>
                        <p>{movieState[4]["results"][0]["overview"]}</p>
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
        ) : "fede"
        
    )
}