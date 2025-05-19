import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list");

  const array = genres.split("-").slice(1);
  return (
    <div className="container mx-auto py-3 flex gap-6 overflow-auto text-white mt-3 mb-10">
      {data?.genres?.map((genre) => (
        <div
          onClick={() => handleChangeGenre(genre.id.toString())}
          className={`${
            array.includes(genre.id.toString()) ? "bg-primary text-white" : ""
          } text-nowrap cursor-pointer select-none px-4 py-2 rounded-2xl border border-primary`}
          key={genre.id}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Genres);
