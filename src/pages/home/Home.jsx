import React from "react";
import { useFetch } from "../../hooks/useFetch";
import MovieView from "../../components/movie-view/MovieView";

const Home = () => {
  const { data, error, loading } = useFetch("/discover/movie");

  console.log(data);
  return (
    <div>
      <MovieView data={data?.results} />
    </div>
  );
};

export default React.memo(Home);
