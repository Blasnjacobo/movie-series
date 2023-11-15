/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Upcoming from './Upcoming'
// import useLocalStorage from './useLocalStorage'

const Homeupcoming = () => {
  const [Data, setData] = useState(window.localStorage.getItem('Data'))
  console.log('fase initial homecomming function')

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=5775063d28cc26a60e7e47301c5aa679')
      .then(res => res.json())
      .then(json => setData(json.results))
    window.localStorage.setItem('Data', Data)
  }

  useEffect(() => {
    console.log('fase useEffect before function')
    console.log(Data)
    getMovie()
    console.log('fase useEffect after function')
  }, [])

  console.log('before return')
  return (
    <div>
      {console.log('fase during return')}
      {console.log(Data)}
      {console.log(typeof Data)}
      {/* <Upcoming Data={Data} /> */}
      {((typeof Data !== 'string') && (Data.length > 0) && (Data.length !== null)) && <Upcoming Data={Data} />}
    </div>
  )
}

export default Homeupcoming
