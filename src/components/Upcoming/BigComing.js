/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { faCheckToSlot, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const BigComing = ({ Data, handleClick, handleclickLeft }) => {
  const slot = <FontAwesomeIcon icon={faCheckToSlot} style={{ color: '#ffffff' }} />
  const right = <FontAwesomeIcon icon={faAngleRight} size='2xl' />
  const left = <FontAwesomeIcon icon={faAngleLeft} size='2xl' />

  return (
    <div className='upcoming-main'>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`}
          alt='randomly poster from upcoming movies'
          className='upcomingImg'
        />
        <span className='upcoming-mainright' onClick={handleClick}>{right}</span>
        <span className='upcoming-mainleft' onClick={handleclickLeft}>{left}</span>
      </div>
      <div>
        <Link
          className='linkItem'
          to={`/movie-series/movie/${Data.title}/${Data.overview}/${Data.vote_average}/${Data.vote_count}/${Data.release_date}/${Data.original_language}/${Data.adult}/${Data.poster_path.substring(1, ((Data.poster_path.length) - 4))}`}
        >
          <div className='upcoming-mainDescription'>
            <div className='upcoming-mainUpper'>
              <h1>{Data.original_title}</h1>
              <div className='upcoming-mainTime'>
                <span>{slot}</span>
                <h3>Vote Average: {Data.vote_average}</h3>
              </div>
            </div>
            <p className='upcoming-overview'>{Data.overview}</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default BigComing
