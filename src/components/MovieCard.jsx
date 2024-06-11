import React, { useState } from 'react'
import { API_OPTIONS, createImageUrl } from '../services/movieServices';
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { doc, arrayUnion, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { UserAuth } from '../context/AuthContext';
import { MovieTrailer } from '../context/TrailerContext';

function MovieCard({movie}) {
  const [like, setLike] = useState(false);
    const {title, backdrop_path, poster_path} = movie;
    const {user} = UserAuth();
    const {setTrailer, setMovie} = MovieTrailer();

    const markFavMovie = async () =>{
      const userEmail = user?.email;

      if(userEmail){
        const userDoc = doc(db,"users", userEmail);
        setLike(!like);
        await updateDoc(userDoc, {
          favMovies: arrayUnion({...movie})
        })
      }else{
        alert("Login to save movies!")
      }
    }

    const handleClick = (movie) =>{
      const getMovieVideos = async () => {
        if (movie.id) {
          setMovie(movie)
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos`, API_OPTIONS);
            const json = await data.json();
            const filteredData = json.results.filter(item => item.type === "Trailer");
            const trailerData = filteredData.length ? filteredData[0] : json.results[0];
            setTrailer(trailerData);
        }
    };
    getMovieVideos();
    }
  return (
    <div className='relative w-[360px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
        <img className='w-full h-44 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, "w500")} alt={title} />
        <div className="absolute top-0 left-0 w-full h-44 bg-black/80 opacity-0 hover:opacity-100">
        <p onClick={()=>handleClick(movie)} className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>
          {movie.title}
        </p>
        <p onClick={markFavMovie}>
          {like ? <FaHeart size={20} className='absolute top-2 left-2 text-gray-300' /> : <FaRegHeart size={20} className='absolute top-2 left-2 text-gray-300' />}</p>
        </div>
    </div>
  )
}

export default MovieCard
