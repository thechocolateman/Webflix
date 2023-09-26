import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveGenres } from "../state/genres";
const API_KEY = "55c56b9f930280a2563491ffe49d383f"


//Returns the list of Genres from the API
export const useGetGenres =(contentType) =>{
    let dispatch = useDispatch()
    useEffect(()=>{
        // let genreList = ''
        // console.log("TV :", contentType)
        switch(contentType.toLowerCase()){
            case "tv":
                fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${API_KEY}`)
                    .then(data=>data.json())
                    .then(json=>dispatch(saveGenres(json)))
                break;
            case "movies":
                fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`)
                    .then(data=>data.json())
                    .then(json=>dispatch(saveGenres(json)))
                break;
        }
    }, [contentType, dispatch])

}
export default useGetGenres;