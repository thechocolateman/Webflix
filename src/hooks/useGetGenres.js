import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { saveGenres } from "../state/genres";
const API_KEY = "55c56b9f930280a2563491ffe49d383f"


//Returns the list of all Genres from the API. UseGetData hook then gets all movies for the genres gathered below
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
                fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&without_id=99&api_key=${API_KEY}`)
                    .then(data=>data.json())
                    .then(json=>{
                        
                        //REMOVE DOCUMENTARIES, MUSIC AND ROMANCE GENRES FROM THE LIST TO PREVENT DISPLAYING
                        //THERE'S A BUG IN THE API THAT ALLOWS ADULT CONTENT TO DISPLAY DESPITE PASSING IN A QUERY TO FILTER OUT ADULT MOVIES
                        let filtered_json = json.genres.filter(item => item.name !== "Documentary" && item.name !== "Romance" && item.name !== "Music" && item.name !== "Adventure")
                        dispatch(saveGenres({"genres": filtered_json}))
                    })
                break;
        }
    }, [contentType, dispatch])

}
export default useGetGenres;