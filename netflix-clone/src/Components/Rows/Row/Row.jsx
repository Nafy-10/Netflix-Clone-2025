import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  // Update isSmallScreen state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.title || movie?.name || movie?.original_name || ""
      )
        .then((url) => {
          if (!url) {
            alert("Trailer not found");
            return setTrailerUrl("");
          }
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => alert("Trailer not found"));
    }
  };

  // Close trailer if click outside the player on overlay
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("trailerOverlay")) {
      setTrailerUrl("");
    }
  };

  return (
    <>
      <div className={trailerUrl && isSmallScreen ? "row contentBlur" : "row"}>
        <h1>{title}</h1>
        <div className="row_posters">
          {movies.map((movie, index) => (
            <img
              key={index}
              onClick={() => handleClick(movie)}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title || "Movie poster"}
              className={`row_poster ${isLargeRow ? "row_posterLarge" : ""}`}
            />
          ))}
        </div>
      </div>

      {trailerUrl && isSmallScreen && (
        <div className="trailerOverlay" onClick={handleOverlayClick}>
          <div className="trailerPlayer">
            <YouTube
              videoId={trailerUrl}
              opts={{ height: "400", width: "100%", playerVars: { autoplay: 1 } }}
            />
          </div>
        </div>
      )}

      {trailerUrl && !isSmallScreen && (
        <div style={{ padding: "40px", maxWidth: "960px", margin: "auto" }}>
          <YouTube
            videoId={trailerUrl}
            opts={{ height: "400", width: "80%", playerVars: { autoplay: 1 } }}
          />
        </div>
      )}
    </>
  );
};

export default Row;

