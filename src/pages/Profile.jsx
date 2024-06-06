import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { createImageUrl } from '../services/movieServices';
import {arrayRemove,doc,onSnapshot,updateDoc} from 'firebase/firestore';
import { useEffect, useState } from 'react';

function Profile() {
  const [movies,setMovies] = useState([]);
  const {user} = UserAuth();

useEffect(()=>{
  onSnapshot(doc(db, "users", `${user?.email}`), (doc) =>{
    if(doc.data()) setMovies(doc.data().favMovies);
  })
},[user?.email]);

const slider = (offset) =>{
  const slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + offset;
}

const handleRemoveFavMovie = async (movie) =>{
  const userDoc = doc(db, "users", user.email);
  await updateDoc(userDoc, {
    favMovies: arrayRemove(movie),
  })
}

  return (
    <>
    <div>
      <div>
        <img
        className='block w-full h-[500px] object-cover'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[500px]'/>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>
            My Movies
          </h1>
          <p className='font-nsans-light text-gray-400 text-lg'>
            {user.email}
          </p>
        </div>
      </div>

      <h2 className='font-nsans-bold md:text-xl p-4 text-white'>Fav Movies</h2>
     <div className="relative flex items-center group">
      <MdChevronLeft
      onClick={()=>slider(-500)}
      className='bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={40}/>
      <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
      {movies.map((movie)=>(
         <div key={movie.id} className='relative w-[360px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
         <img className='w-full h-36 block object-cover object-top' src={createImageUrl(movie.backdrop_path ?? movie.poster_path, "w500")} alt={movie.title} />
         <div className="absolute top-0 left-0 w-full h-36 bg-black/80 opacity-0 hover:opacity-100">
         <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>
           {movie.title}
         </p>
         <AiOutlineClose
         onClick={() => handleRemoveFavMovie(movie)}
         size={20} className='absolute top-2 right-2'/>
         </div>
     </div>
      ))}
      </div>
      <MdChevronRight
      onClick={()=>slider(500)}
      className='bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer' size={40}/>
     </div>

    </div>
    </>
  )
} 

export default Profile
