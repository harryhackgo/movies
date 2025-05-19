import React from "react";
import { FaBookmark, FaRegBookmark, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/mainContext";

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();

  const [state, dispatch] = useStateValue();
  return (
    <div className="text-white">
      <div className="relative">
        <img
          onClick={() => navigate(`/movie/${item.id}`)}
          className="object-cover rounded-[12px]"
          loading="lazy"
          src={url + item.poster_path}
          alt=""
        />
        <button
          onClick={() => dispatch({ type: "SAVED", payload: item })}
          className="absolute p-2 z-10 top-0 right-0 cursor-pointer shadow-gray-500 shadow-2xl"
        >
          {state.saved.some(({ id }) => id === item.id) ? (
            <FaBookmark />
          ) : (
            <FaRegBookmark />
          )}
        </button>
      </div>
      <div>
        <h2 className="text-[20px] font-[500] pt-3 pb-2">{item.title}</h2>
        <p className="flex items-center gap-1 text-[15px] text-[#828282]">
          <FaRegStar /> {Math.round(item.vote_average * 10) / 10}
        </p>
      </div>
    </div>
  );
};

export default React.memo(Card);
