/* eslint-disable react/jsx-key */
import React from 'react'
import Homeupcoming from '../components/Upcoming/Homeupcoming'
import MoviesDisplay from '../components/Movies/MoviesDisplay'

const HomePage = () => {
  return (
    <div>
      <Homeupcoming />
      <MoviesDisplay />
    </div>
  )
}

export default HomePage
