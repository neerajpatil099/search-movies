import React from 'react'
import { nanoid } from 'nanoid'

export default function MovieCard({movie}) {
  return (
    <div className='movie' id={nanoid()} >
    <div>
    <p>{movie.Year}</p>
    </div>
    <div>
      <img src={movie.Poster !== 'NA'? movie.Poster : 'https://via.placeholder.com/400' } alt={movie.Title} ></img>
    </div>
    <div>
      <span>{movie.Type}</span>
      <h3>{movie.Title}</h3>
    </div>
  </div>
  )
}
