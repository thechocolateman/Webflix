import "../../App.css";
import { useSelector } from "react-redux";
import useGetData from "../../hooks/useGetData";
import useGetGenres from "../../hooks/useGetGenres";
import { useEffect } from "react";
import Card from "../../components/Card";
import { saveSearch, getResults } from "../../state/search";
import { useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import { useState } from "react";

//To get URL search params
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let searchQuery = urlParams.get("q");
let loading = false;

let movieArr = [];

function compileMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    //Add results to the movie array
    console.log("MOVVIIE", movie.results);

    movieArr.push(...movies[i].results);
  }
  movieArr = movieArr
    .map((e) => e["id"])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((obj) => movieArr[obj])
    .map((e) => movieArr[e]);
  console.log("UNIQUE", movieArr);
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Search(props) {
  useGetGenres("movies");
  useGetData("movies");
  const movieState = useSelector((state) => state.movies.value);
  const searchState = useSelector((state) => state.searchQuery.value);
  const [results, filterResults] = useState([]);
  const dispatch = useDispatch();

  //When movie is loaded
  useEffect(() => {
    if (movieState.length == 15) {
      compileMovies(movieState);
      // getResults(searchQuery);
    }
  }, [movieState]);

  //Typing
  useEffect(() => {
    loading = true;
    filterResults([
      ...movieArr.filter((movie) => movie.title.includes(searchState)),
    ]);

    // [...movieArr.filter((movie) => console.log(...movieArr["id"]))];

    console.log("RESULTS ARE ");

    loading = false;
  }, [searchState]);

  useEffect(() => {
    console.log("RESULTS CHANGED");
  }, [results]);

  return !loading ? (
    <div class="search__container">
      <h1>{results.length}</h1>
      <h4>More to explore: {results.map((result) => `${result.title} | `)}</h4>
      <div className="search__movie__container">
        {results.map((result) => (
          <Card
            itemKey={`${result.id}`}
            imageUrl={result.backdrop_path}
            movie={{ title: result.title }}
          />
        ))}
        {/* </Carousel> */}
      </div>
    </div>
  ) : (
    "Loading"
  );
}
