import "../../App.css";
import { useSelector } from "react-redux";
import useGetData from "../../hooks/useGetData";
import useGetGenres from "../../hooks/useGetGenres";
import { useEffect } from "react";
import Card from "../../components/Card";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let searchQuery = urlParams.get("q");

let movieArr = [];
let results = [];

function compileMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    //Add results to the movie array
    movieArr.push(...movies[i].results);
  }
}

function getResults(searchQuery) {
  results = [...movieArr.filter((movie) => movie.title.includes(searchQuery))];
  console.log("RESULT", results);
  // return results;
}

export default function Search(props) {
  useGetGenres("movies");
  useGetData("movies");
  const movieState = useSelector((state) => state.movies.value);
  const searchState = useSelector((state) => state.searchQuery.value);

  useEffect(() => {
    if (movieState.length == 15) {
      compileMovies(movieState);
    } else {
    }
  }, [movieState]);

  useEffect(() => {
    console.log("QUERY", searchQuery);
    // console.log("MOV", movieArr);
    searchQuery = searchState;
    getResults(searchQuery);
  }, [searchState]);

  return (
    <div class="movie__carousel">
      <h2>Searching for {searchQuery}</h2>
      {console.log("SHOW", results)}
      {results.map((result) => (
        <div>{result.title}</div>
      ))}
    </div>
  );
}
