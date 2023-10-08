
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveTvSeries } from "../state/tv";
import { saveMovie } from "../features/movies/movieSlice";
const API_KEY = "55c56b9f930280a2563491ffe49d383f"
let postArray = []

//React hook to get data from the API
export default function useGetData(contentType){
    
    const genreState = useSelector(state => state.genres.value)
    const movieState = useSelector(state => state.movies.value)
    let dispatch = useDispatch();
    useEffect(()=>{
        switch(contentType.toLowerCase()){
            case "tv":
                for(const element in genreState){
                    genreState[element].map(item=>item.id).map(id=>{
                        fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&with_original_language=en&watch_region=us&language=en-US&page=1&with_genres=${id}&sort_by=popularity.desc&api_key=${API_KEY}`)
                        .then(data=>data.json())
                        .then(json=>dispatch(saveTvSeries({id: id, results: json.results})))
                    })
                }
            case "movies":
                for(const element in genreState){
                    // console.log(genreState[element])
                    genreState[element].map(item=>item.id).map(id=>{
                        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&with_original_language=en&watch_region=us&language=en-US&without_genres=99&page=1&with_genres=${id}&sort_by=popularity.desc&api_key=${API_KEY}`)
                        .then(data=>data.json())
                        .then(json=>{
                            // console.log("SAVED")
                            dispatch(saveMovie({id: id, results: json.results}))})
                    })
                }
                break;
            case "latest":
                Promise.all([
                    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`),
                    fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`),
                    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`)
                ])
                .then(async data => {
                    // console.log(await data[0].json(), await data[1].json(), await data[2].json())
                    dispatch(saveMovie({
                        popular: await data[0].json(),
                        upcoming: await data[1].json(),
                        topRated: await data[2].json()
                    }))
                })
        }
    },[contentType, dispatch, genreState])
}
      
