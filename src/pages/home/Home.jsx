import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieView from "../../components/movie-view/MovieView";
import Categories from "../../components/categories/Categories";
import Swiper from "swiper";
import SwiperTest from "../../components/swiper/Swiper";
import SwiperView from "../../components/swiperView/SwiperView";

const Home = () => {
  const { data: all } = useFetch("/discover/movie");
  const { data: popular } = useFetch("/movie/popular");
  return (
    <div>
      {/* <Categories /> */}
      <SwiperTest data={popular?.results} />
      <SwiperView data={all?.results} />
      {/* <MovieView data={all?.results} /> */}
    </div>
  );
};

export default React.memo(Home);
