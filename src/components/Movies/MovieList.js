/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import Movie from './Movie'

const MovieList = ({ movieData }) => {
  // console.log('entering ListMovie')
  const pag1 = (movieData.pag1.results)
  const pag2 = (movieData.pag2.results)
  const pag3 = (movieData.pag3.results)
  const pag4 = (movieData.pag4.results)
  const pag5 = (movieData.pag5.results)
  const pag6 = (movieData.pag6.results)
  console.log(pag1)
  return (
    <div className='pag1-section'>
      {pag1.map((movie) => <Movie {...movie} />)}
      {pag2.map((movie) => <Movie {...movie} />)}
      {pag3.map((movie) => <Movie {...movie} />)}
      {pag4.map((movie) => <Movie {...movie} />)}
      {pag5.map((movie) => <Movie {...movie} />)}
      {pag6.map((movie) => <Movie {...movie} />)}
    </div>
  )
}

export default MovieList
