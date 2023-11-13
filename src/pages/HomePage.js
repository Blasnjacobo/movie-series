/* eslint-disable react/jsx-key */
import React from 'react'
import Homeupcoming from '../components/Upcoming/Homeupcoming'
import MoviesDisplay from '../components/Movies/MoviesDisplay'

const HomePage = () => {
  return (
    <div>
      <Homeupcoming />
      <h2 className='initial-description'> Popular on Blas Movieland</h2>
      <MoviesDisplay />
    </div>
  )
}

export default HomePage
