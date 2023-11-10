/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Upcoming from './Upcoming'

const Homeupcoming = () => {
  const [Data, setData] = useState([])

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5775063d28cc26a60e7e47301c5aa679')
      .then(res => res.json())
      .then(json => setData(json.results))
  }

  useEffect(() => {
    getMovie()
  }, [onclick])

  return (
    <div>
      <Upcoming Data={Data} />
    </div>
  )
}

export default Homeupcoming
