// import React from "react";
// import { useParams } from "react-router-dom";
// import { useFetch } from "../../hooks/useFetch";
// import MovieView from "../../components/movie-view/MovieView";

// const url = import.meta.env.VITE_IMAGE_URL;
// const SingleMovie = () => {
//   const { id } = useParams();
//   const { data } = useFetch(`/movie/${id}`);
//   console.log(data);
//   const { data: images } = useFetch(`/movie/${id}/images`);
//   const { data: similar } = useFetch(`/movie/${id}/similar`);

//   return (
//     <div className="container mx-auto text-white">
//       <div className="">
//         <img src={url + data?.backdrop_path} alt="" />
//       </div>
//       <div>
//         <h1 className="text-4xl">{data?.title}</h1>
//         <p>{data?.overview}</p>
//         <p>{data?.vote_average}</p>
//         <strong>{data?.budget?.toLocaleString()} USD</strong>
//       </div>
//       <div className="grid grid-cols-5">
//         {images?.backdrops?.slice(0, 20)?.map((image) => (
//           <img src={url + image.file_path} alt="" key={image.file_path} />
//         ))}
//       </div>
//       <div>
//         <h3 className="text-2xl font-semibold">Similar</h3>
//         <MovieView data={similar?.results?.slice(0, 4)} />
//       </div>
//     </div>
//   );
// };

// export default SingleMovie;

import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import MovieView from "../../components/movie-view/MovieView";

const url = import.meta.env.VITE_IMAGE_URL;

const SingleMovie = () => {
  const { id } = useParams();
  const { data } = useFetch(`/movie/${id}`);
  const { data: images } = useFetch(`/movie/${id}/images`);
  const { data: similar } = useFetch(`/movie/${id}/similar`);

  if (!data)
    return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 text-white space-y-10">
      <div className="relative w-full max-h-[500px] overflow-hidden rounded-xl shadow-lg">
        <img
          src={url + data.backdrop_path}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-6 w-full">
          <h1 className="text-5xl font-bold">{data.title}</h1>
          <p className="text-lg italic">{data.tagline}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-4">
          <h2 className="text-3xl font-semibold">Overview</h2>
          <p className="leading-relaxed text-gray-300">{data.overview}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span>
              <strong>Status:</strong> {data.status}
            </span>
            <span>
              <strong>Release:</strong> {data.release_date}
            </span>
            <span>
              <strong>Runtime:</strong> {data.runtime} min
            </span>
            <span>
              <strong>Language:</strong>{" "}
              {data.spoken_languages?.map((l) => l.english_name).join(", ")}
            </span>
            <span>
              <strong>Genres:</strong>{" "}
              {data.genres?.map((g) => g.name).join(", ")}
            </span>
            <span>
              <strong>Country:</strong>{" "}
              {data.production_countries?.map((c) => c.name).join(", ")}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <img
            src={url + data.poster_path}
            alt={data.title}
            className="rounded-lg w-full object-cover shadow-md"
          />
          <div className="text-lg">
            <p>
              <strong>Rating:</strong> {data.vote_average.toFixed(1)} / 10 (
              {data.vote_count} votes)
            </p>
            <p>
              <strong>Budget:</strong> {data.budget.toLocaleString()} USD
            </p>
            <p>
              <strong>Revenue:</strong> {data.revenue.toLocaleString()} USD
            </p>
            {data.homepage && (
              <a
                href={data.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-400 underline hover:text-blue-300"
              >
                Official Website
              </a>
            )}
          </div>
        </div>
      </div>

      {images?.backdrops?.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.backdrops.slice(0, 8).map((image) => (
              <img
                key={image.file_path}
                src={url + image.file_path}
                alt="Gallery"
                className="rounded-md object-cover w-full h-40"
              />
            ))}
          </div>
        </div>
      )}

      {similar?.results?.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Similar Movies</h3>
          <MovieView data={similar.results.slice(0, 4)} />
        </div>
      )}
    </div>
  );
};

export default SingleMovie;
