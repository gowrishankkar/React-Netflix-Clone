import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURl, setTrailerURl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    console.log(movie);
    if (trailerURl) {
      setTrailerURl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || "")
        .then((url) => {
          console.log("url", url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURl(urlParams.get("v"));
        })
        .catch((error) => console.log("error", error));
    }
  };
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_largePoster"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      <Youtube videoId={trailerURl} opts={opts} />
    </div>
  );
}

export default Row;
