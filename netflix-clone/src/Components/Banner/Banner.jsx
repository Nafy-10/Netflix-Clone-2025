// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../../utils/requests';
import axios from '../../utils/axios';
import "./Banner.css";

// const API_KEY = process.env.REACT_APP_API_KEY;
const Banner = () => {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        const fetchData = async () => {
          try {
            const request = await axios.get(`${requests.FetchNetflixOriginals}?api_key=${API_KEY}`); // Corrected
            console.log(request);
            setMovie(
              request.data.results[
                Math.floor(Math.random() * request.data.results.length)
              ]
            );
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
      }, [fetchData]);
      
    function truncate(str,n) {
        return str?.length > n ? str.substr(0, n-1) + "..." :str;
    }


      return (
        <>
          <div
            className='Banner'
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
      
          >
            <div className='banner_contents'>
              <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className='banner_button'>
                <button className='banner_button play'>Play</button>
                <button className='banner_button'>My List</button>
              </div>
              <h1 className='banner_discription'>{truncate(movie?.overview, 200)}</h1>
            </div>
            <div className='banner_fadeBottom' />
          </div>
        </>
      );
    }
export default Banner;