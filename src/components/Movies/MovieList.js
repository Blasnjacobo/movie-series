/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import Movie from './Movie'

const MovieList = ({ movieData }) => {
  // console.log('entering ListMovie')
  const pag1 = (movieData.pag1.results)
  console.log(pag1)
  return (
    <div>
      {pag1.map((movie) => <Movie {...movie} />)}
    </div>
  )
}

export default MovieList
