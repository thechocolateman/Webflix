import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import Modal from "../../features/modal";
import useGetData from "../../hooks/useGetData";

export default function LatestTemplate(){
    useGetData("latest")
    const movieState = useSelector(state => state.movies.value)
    return(
    <div>
        {console.log("STATE is", movieState)}
        <Modal/>
    </div>)
}