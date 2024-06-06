import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieCard from './MovieCard';

function MovieRow({title, url}) {
  const [movie,setMovie] = useState([]);

  useEffect(()=>{
    axios.get(url).then((response) =>{
      setMovie(response.data.results)
    })
  },[url])  

  return (
    <>
     <h2 className='font-nsans-bold md:text-xl p-4'>{title}</h2>
     <div className="relative flex items-center">
      <div id='slider' className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
      {movie.map(movie=>(
        <MovieCard key={movie.id} movie={movie}/>
      ))}
      </div>
     </div>
    </>
  )
}

export default MovieRow
