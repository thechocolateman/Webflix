import { useSelector } from "react-redux";
import Modal from "../../features/modal";
import useGetData from "../../hooks/useGetData";
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import BasePage from "../BasePage";


export default function LatestTemplate(){
    useGetData("latest")
    const movieState = useSelector(state => state.movies.value)
    return(
    <div key={"rfder4t5gfr"}>
        <Modal/>
        {/*  */}
        <BasePage movieState={movieState} page="latest"/>
    </div>)
}