import { useSelector } from "react-redux";
import useGetData from "../../hooks/useGetData";
import useGetGenres from "../../hooks/useGetGenres";
import { movieArr } from ".";

export default function Search() {
  function compileMovies(movies) {
    for (let i = 0; i < movies.length; i++) {
      //Add results to the movie array
      movieArr.push(movies[i].results);
      // console.log(movieArr);
      console.log(movies[i].results);
    }
  }

  useGetGenres("movies");
  useGetData("movies");
  const movieState = useSelector((state) => state.movies.value);
  return (
    <div>{movieState.length == 15 ? compileMovies(movieState) : "Loading"}</div>
  );
}
