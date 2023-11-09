/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import seindfield from './seindfield.jpg'
import RightUpcoming from './RightUpcoming'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Upcoming = () => {
  const [comingup, setComingup] = useState([])

  const time = <FontAwesomeIcon icon={faCirclePlay} />
  const right = <FontAwesomeIcon icon={faAngleRight} size='2xl' />
  const left = <FontAwesomeIcon icon={faAngleLeft} size='2xl' />

  /* {comingup.map((movie) => (
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
  ))} */

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
    <div className='upcomingSection'>
      <div className='upcoming-main'>
        <div>
          <img
            src={seindfield}
            alt='randomly poster from upcoming movies'
            className='upcomingImg'
          />
          <span className='upcoming-mainleft'>{left}</span>
          <span className='upcoming-mainright'>{right}</span>
        </div>
        <div>
          <div className='upcoming-mainDescription'>
            <div className='upcoming-mainUpper'>
              <h1>Swifties in Film and TV</h1>
              <div className='upcoming-mainTime'>
                <span>{time}</span>
                <h3>2:34</h3>
              </div>
            </div>
            <p>If you've ever wondered which film and TV characters are Swifties, you're not alone. To mark the release of the concert film 'Taylor Swift: The Eras Tour.</p>
          </div>
        </div>
      </div>
      <RightUpcoming />
    </div>
  )
}

export default Upcoming
