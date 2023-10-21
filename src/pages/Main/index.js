import React from "react";
import useGetData from "../../hooks/useGetData";
import {useGetGenres} from "../../hooks/useGetGenres";
import { useSelector } from "react-redux";
import Modal from "../../features/modal"
import Banner from "../../components/Banner"
import BasePage from "../BasePage"
import Navbar from "../../components/Navbar/Navbar";

//Template for before the page loads

const MainTemplate =() =>{
    useGetGenres("movies")
    useGetData("movies")
    const genreState = useSelector(state => state.genres.value)
    const movieState = useSelector(state => state.movies.value)
    
    return(
        <div>
            <Modal/>
            {/* <Navbar /> */}
            <Banner/>
            <BasePage genreState={genreState} movieState={movieState}/>
            
        </div>
    )
}

export default MainTemplate