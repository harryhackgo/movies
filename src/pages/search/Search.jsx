import React, { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieView from "../../components/movie-view/MovieView";
import { useFetch } from "../../hooks/useFetch";
import Empty from "../../components/empty/Empty";

const Search = () => {
  const [search, setSearch] = useState("");
  const { data } = useFetch("/discover/movie");

  const filteredMovies = useMemo(() => {
    if (!data?.results) return [];
    return data.results.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  return (
    <>
      <div className="container mx-auto py-12 flex justify-center items-center">
        <div className="p-5 bg-content rounded-bl-[12px] rounded-tl-[12px]">
          <FaSearch className="text-primary " />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(() => e.target.value)}
          className="py-4 pr-30 bg-content outline-none placeholder-text text-white"
          placeholder="Search"
        />
      </div>
      {filteredMovies == [] ? <Empty /> : <MovieView data={filteredMovies} />}
    </>
  );
};

export default Search;
