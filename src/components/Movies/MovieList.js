/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import Movie from './Movie'

const MovieList = ({ movieData }) => {
  console.log(movieData)
  return (
    <div className='allMovies-section'>
      {movieData.map((movie) => <Movie {...movie} />)}
    </div>
  )
}

export default MovieList
