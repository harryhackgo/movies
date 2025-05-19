import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlay } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { NavLink } from "react-router-dom";

const SwiperTest = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const url = import.meta.env.VITE_IMAGE_URL;
  // useEffect(() => {
  //   const getAllDetails = () => {
  //     try {
  //       const details = data?.map(({ id }) => {
  //         const { data } = useFetch(`/movie/${id}`);
  //         return data;
  //       });
  //       console.log(details);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getAllDetails();
  // }, [data]);

  // Create a new hook where you can pass on array of id and it will return all the details of the movies with those ids.

  return (
    <div className="max-w-full 2xl:w-8/10 2xl:mx-auto mx-2">
      <Swiper
        modules={[Thumbs, Autoplay]}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2 rounded-[12px]"
        autoplay={{ delay: 5000 }}
      >
        {data?.map((movie) => (
          <SwiperSlide key={movie.id} className="relative text-white">
            <img src={url + movie.backdrop_path || movie.poster_path} />
            <div className="absolute bottom-6 left-1/2 translate-x-[-50%] flex flex-col gap-4 justify-center items-center">
              <h2 className="text-3xl ">{movie.title}</h2>
              <p className="text-[14px]">
                {movie.release_date.split("-")[0]} • Comedy • 1h 32m •{" "}
                {movie.original_language.toUpperCase()} • 6+
              </p>
              <NavLink to={`/movie/${movie.id}`}>
                <button className="w-[380px] h-[52px] bg-white text-primary rounded-[12px] flex items-center justify-center gap-1.5 hover:text-white hover:bg-primary transition-colors duration-300">
                  <FaPlay />
                  Watch
                </button>
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
        ;
      </Swiper>
      <div className="w-1/2 mx-auto relative">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          <div className="">
            {data?.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className="rounded-[12px] overflow-hidden"
              >
                <img src={url + movie.backdrop_path} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="custom-prev absolute left-[-60px] top-1/2 -translate-y-1/2  w-10 h-10 rounded-full bg-content text-primary flex items-center justify-center shadow-md cursor-pointer">
          <FaChevronLeft />
        </div>
        <div className="custom-next absolute right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-content text-primary flex items-center justify-center shadow-md cursor-pointer">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SwiperTest);
