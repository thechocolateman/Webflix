import { useSelector } from "react-redux";
import Modal from "../../features/modal";
import useGetData from "../../hooks/useGetData";
import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import BasePage from "../BasePage";
import { motion } from "framer-motion";
import Card from "../../components/Card";

export default function LatestTemplate() {
  function ForwardArrow() {
    return (
      <div className="next-navigation">
        <Icon
          className="arrow-next"
          path={mdiChevronRight}
          title="User Profile"
          size={3}
          onClick={(e) => {
            let translateValue = document
              .getElementsByClassName("slider")[0]
              .style.transform.replace(/[^0-9\-.,]/g, "")
              .split(",")[0];
            // document.getElementsByClassName("slider")[0].style.marginLeft += `${document.getElementsByClassName("slider")[0].style.marginLeft -300}px`
            document.getElementsByClassName(
              "slider"
            )[0].style.transform = `translateX(${translateValue - 400}px)`;
          }}
          color="#fff"
        />
      </div>
    );
  }
  useGetData("latest");
  const movieState = useSelector((state) => state.movies.value);
  const categoryState = useSelector((state) => state.categories.value);
  return (
    <div key={"rfder4t5gfr"}>
      <Modal />
      {/*  */}
      <BasePage movieState={movieState} page="latest" />
      {console.log("CAT ", categoryState)}
      <main className="new__popular__page">
        <div className="movie__carousel">
          <div className="slider__container">
            <div className="movie__container">
              <h2>Popular</h2>
            </div>
            <motion.div
              animate={{ x: 0, z: 20 }}
              className="slider"
              key="43234re"
            >
              {Object.keys(categoryState).length !== 0
                ? categoryState[0]["popular"].results.map((val) => (
                    <Card imageUrl={val.backdrop_path} movie={val} />
                  ))
                : ""}
              <ForwardArrow />
            </motion.div>
          </div>

          <div className="slider__container">
            <div className="movie__container">
              <h2>Top Rated</h2>
            </div>
            <motion.div animate={{ x: 0, z: 20 }} className="slider">
              {Object.keys(categoryState).length !== 0
                ? categoryState[0]["topRated"].results.map((val) => (
                    <Card imageUrl={val.backdrop_path} movie={val} />
                  ))
                : ""}
              <ForwardArrow />
            </motion.div>
          </div>
          <div className="slider__container">
            <div className="movie__container">
              <h2>Upcoming</h2>
            </div>
            <motion.div animate={{ x: 0, z: 20 }} className="slider">
              {Object.keys(categoryState).length !== 0
                ? categoryState[0]["upcoming"].results.map((val) => (
                    <Card imageUrl={val.backdrop_path} movie={val} />
                  ))
                : ""}
              <ForwardArrow />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
