/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'

const Upcoming = () => {
  const [comingup, setComingup] = useState([])

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5775063d28cc26a60e7e47301c5aa679')
      .then(res => res.json())
      .then(json => setComingup(json.results))
  }

  useEffect(() => {
    getMovie()
  }, [])

  console.log(comingup)

  return (
    <div>
      {comingup.map((movie) => (
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      ))}
    </div>
  )
}

export default Upcoming
