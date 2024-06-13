import { useEffect, useState } from "react"
import axios from 'axios';
import endpoints, { API_OPTIONS, createImageUrl } from "../util/movieServices";
import {MovieTrailer,} from '../context/TrailerContext'
import ShimmerBanner from "./ShimmerBanner";

function Banner() {
    const {movie, setMovie, trailer, setTrailer} = MovieTrailer();
    useEffect(()=>{
        axios.get(endpoints.popular).then((response)=>{
            const movie = response.data.results;
            const randomMovie = movie[Math.floor(Math.random() * movie.length)];
            setMovie(randomMovie);
        });
        },[])
        
        useEffect(() => {
          const getMovieVideos = async () => {
              if (movie.id) {
                  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, API_OPTIONS);
                  const json = await data.json();
                  const filteredData = json.results.filter(item => item.type === "Trailer");
                  const trailerData = filteredData.length ? filteredData[0] : json.results[0];
                  setTrailer(trailerData);
              }
          };
          getMovieVideos();
      }, [movie]); 
        
    
    const truncate = (str, length) =>{
        if(!str) return "";
        return str.length > length ? str.slice(0, length) + "..." : str;
    }

    if(Object.keys(trailer).length === 0)  return (
      <ShimmerBanner/>
    );

    const {title, backdrop_path, release_date, overview} = movie;

  return (
    <div className="w-full h-[550px] lg:h-[600px] relative overflow-hidden">
        <div className="w-full h-full">
    <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r  from-black">
     
      {
        trailer ? (
          <iframe
        className='w-screen h-[620px]'
        src={`https://www.youtube.com/embed/${trailer?.key ? trailer.key : ''}?autoplay=1&mute=1`}
        allow='autoplay; encrypted-media'
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
    ></iframe>
        ) : (
            <img
        className="w-full h-full object-cover object-top"
        src={createImageUrl(backdrop_path, "original")}
        alt={title}
      /> 
        )
      }
      
      <div className="absolute w-full top[10%] lg:top-[25%] p-4 md:p-8">
        <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
        <div className="mt-8 mb-4">
            <button className="border bg-gray-300 text-white py-2 px-5 rounded-sm">Play</button>
            <button className="border border-grey-300 py-2 px-5 ml-4 rounded-sm">Watch Later</button>
        </div>
        <p className="text-gray-400 text-sm">{release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-grey-200">{truncate(overview, 165)}</p>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Banner
