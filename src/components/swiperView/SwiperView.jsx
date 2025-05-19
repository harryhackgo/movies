import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FaRegStar } from "react-icons/fa";

import "./style.css";

import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SwiperView = ({ data }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-20 pb-[118px]">
      <div className="container pt-[50px] flex justify-between items-center pb-5 ">
        <p className="text-white  text-[20px]">This week</p>
        <NavLink to={"/movies"}>
          <button className="text-primary flex items-center gap-2 cursor-pointer">
            Show all <FaChevronRight />
          </button>
        </NavLink>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next2",
          prevEl: ".custom-prev2",
        }}
        className="mySwiper3"
      >
        {data?.map((movie) => (
          <SwiperSlide
            className="rounded-[12px] overflow-hidden relative flex flex-col border"
            key={movie.id}
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <NavLink to={`/movie/${movie.id}`}>
              <img
                src={url + movie.poster_path}
                alt=""
                className="rounded-[12px]"
              />
            </NavLink>
            <div className="text-white text-left w-full">
              <h2 className="text-[20px] font-[500] pt-3 pb-2">
                {movie.title}
              </h2>
              <p className="flex items-center gap-1 text-[15px] text-[#828282]">
                <FaRegStar /> {Math.round(movie.vote_average * 10) / 10}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-prev2 absolute left-[20px] top-1/2 -translate-y-1/2  w-10 h-10 rounded-full bg-content text-primary flex items-center justify-center shadow-md cursor-pointer">
        <FaChevronLeft />
      </div>
      <div className="custom-next2 absolute right-[20px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-content text-primary flex items-center justify-center shadow-md cursor-pointer">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default React.memo(SwiperView);
