import React from "react";
import Card from "./Card";
import { Slider } from "../slider/slider";
import SwiperTest from "../swiper/Swiper";

const MovieView = ({ data }) => {
  return (
    <>
      {/* <Slider /> */}
      {/* <SwiperTest /> */}
      <div className="container mx-auto grid grid-cols-4 gap-5">
        {data?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default React.memo(MovieView);
