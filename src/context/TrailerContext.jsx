import { createContext, useContext, useState } from "react";

const TrailerContext = createContext();

export const TrailerContextProvider = ({children}) =>{
    const [movie,setMovie] = useState({});
    const [trailer, setTrailer] = useState({});
    return <TrailerContext.Provider value={{trailer,setTrailer,movie,setMovie}}>{children}</TrailerContext.Provider>
}

export const MovieTrailer = () =>{
    return useContext(TrailerContext);
}