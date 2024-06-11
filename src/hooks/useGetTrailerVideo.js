// import React from 'react'
// import { API_OPTIONS } from '../services/movieServices';
// import {MovieTrailer} from '../context/TrailerContext';


// const useGetTrailerVideo = async (movieId) => {
//     const {setTrailer} = MovieTrailer();
//             if (movieId) {
//                 const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
//                 const json = await data.json();
//                 const filteredData = json.results.filter(item => item.type === "Trailer");
//                 const trailerData = filteredData.length ? filteredData[0] : json.results[0];
//                 setTrailer(trailerData);
//             }
// }

// export default useGetTrailerVideo
