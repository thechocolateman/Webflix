import Banner from "../../components/Banner";
import useGetData from "../../hooks/useGetData";
import {useGetGenres} from "../../hooks/useGetGenres";
import { useSelector } from "react-redux";
import BasePage from "../BasePage";
import Modal from "../../features/modal";
import Navbar from "../../components/Navbar";

let movieCollection = []



const TvTemplate = (props) =>{
    useGetGenres("tv")
    useGetData("tv")
    const genreState = useSelector(state => state.genres.value)
    const tvState = useSelector(state => state.tvSeries.value)
    // console.log(genreState.genres.length)
    // tvState.length > 0 ? console.log("TV", tvState) : console.log("ejkjke")
    
    return(
        <div>
            {console.log("rfedsx", tvState)}
            {/* Navigation */}
            <Navbar/>
            <Modal/>
            {/* Hero Banner */}
            <Banner />
            {/* Content Section */}
            <BasePage genreState={genreState} movieState={tvState}/>
        </div>
    )
}

export default TvTemplate