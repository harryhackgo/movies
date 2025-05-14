import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Slider = () => {
  const swiperRef = useRef(null);
  const items = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
    "Slide 8",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const itemRefs = useRef([]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeIndex];
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeIndex]);

  const handleItemClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Items</h2>
        <ul className="flex flex-col gap-1.5 max-h-56 overflow-y-auto">
          {items.map((item, index) => (
            <li
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`cursor-pointer p-3 rounded shadow hover:bg-blue-100 transition ${
                activeIndex === index ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-4">
        <Swiper
          modules={[Navigation]}
          navigation
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={2}
          className="h-full"
          loop
          cssMode
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex justify-center items-center text-3xl font-semibold bg-blue-200 rounded-lg shadow-md">
                {item}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
