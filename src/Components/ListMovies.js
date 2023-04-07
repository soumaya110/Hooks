import  {movies } from "../Data/DataMovies";
import React from 'react'
import MovieCard from "./MovieCard";

function ListMovies() {
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",margin:"auto"}}>
      {movies.map((movie)=><MovieCard movie={movie}/>)}
    </div>
  )
}

export default ListMovies
