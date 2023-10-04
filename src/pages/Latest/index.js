import { useSelector } from "react-redux";
import Banner from "../../components/Banner";
import Modal from "../../features/modal";
import useGetData from "../../hooks/useGetData";
import { motion } from "framer-motion"
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import Card from "../../components/Card";


export default function LatestTemplate(){

    function ForwardArrow(){
        return(
            <div className="next-navigation">
                <Icon
                    className="arrow-next"
                    path={mdiChevronRight}
                    title="User Profile"
                    size={3}
                    onClick={(e)=>{
                        let translateValue = document.getElementsByClassName("slider")[0].style.transform.replace(/[^0-9\-.,]/g, '').split(',')[0]
                        // document.getElementsByClassName("slider")[0].style.marginLeft += `${document.getElementsByClassName("slider")[0].style.marginLeft -300}px`
                        document.getElementsByClassName("slider")[0].style.transform = `translateX(${translateValue - 400}px)`
                    }}
                    color="#fff" />
                    
            </div>
        )
    }
    useGetData("latest")
    const movieState = useSelector(state => state.movies.value)
    return(
    <div>
        {/* {console.log("STATE is", movieState)} */}
        {/* {movieState.map(item=>console.log(item["popular"]))} */}
        <Modal/>
        <main>
                <div className="movie__carousel">
                
                    
                        
                        <div className="slider__container">
                            
                                <div>
                                    <div className="movie__container">
                                    <h2>Popular</h2>
                                    </div>
                                </div>
                                <motion.div animate={{ x: 0, z:20 }} className="slider">

                                    {/* {movieCollection.map(item => item.map(val => 
                                        <Card imageUrl={val.backdrop_path} movie={val} />
                                    ))}  */}
                                    {movieState.map(movies=>movies["popular"].results.map(val=><Card imageUrl={val.backdrop_path} movie={val} />))}
                                    <ForwardArrow/>
                                    
                                </motion.div>
                        </div>
                        <div className="slider__container">
                            
                                <div>
                                    <div className="movie__container">
                                    <h2>Upcoming</h2>
                                    </div>
                                </div>
                                <motion.div animate={{ x: 0, z:20 }} className="slider">

                                    {/* {movieCollection.map(item => item.map(val => 
                                        <Card imageUrl={val.backdrop_path} movie={val} />
                                    ))}  */}
                                    {movieState.map(movies=>movies["upcoming"].results.map(val=><Card imageUrl={val.backdrop_path} movie={val} />))}
                                    <ForwardArrow/>
                                    
                                </motion.div>
                        </div>
                        <div className="slider__container">
                            
                                <div>
                                    <div className="movie__container">
                                    <h2>Top Rated</h2>
                                    </div>
                                </div>
                                <motion.div animate={{ x: 0, z:20 }} className="slider">

                                    {/* {movieCollection.map(item => item.map(val => 
                                        <Card imageUrl={val.backdrop_path} movie={val} />
                                    ))}  */}
                                    {movieState.map(movies=>movies["topRated"].results.map(val=><Card imageUrl={val.backdrop_path} movie={val} />))}
                                    <ForwardArrow/>
                                    
                                </motion.div>
                        </div>
                </div>
        </main>
    </div>)
}