/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
  const { text, movieData } = props
  console.log(movieData + ' movieData')
  console.log(text)
  console.log(typeof movieData + ' typeof movieData')
  return (
    <div className='allMovies-section'>
      {movieData.map((pages) => <Movie {...pages} text={text} />)}
    </div>
  )
}

export default MovieList
