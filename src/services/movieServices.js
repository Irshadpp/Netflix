const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
}

export const createImageUrl = (filename, size) =>{
    return `https://image.tmdb.org/t/p/${size}/${filename}`
}

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTM1MWEzYzY0NjQ1ODZmNjdmNzEzY2ZjZmQyZjBlZSIsInN1YiI6IjY2NjE0YWNlZTFiNjk3MjM0ZDAwYmQ3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j9oUqdivsdpY-lf1GMVqdAaaw89eMNyYs-0J2UqAxRg'
    }
  };

export default endpoints;