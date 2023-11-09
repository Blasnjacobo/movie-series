import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const LittleComing = ({ Data }) => {
  const globe = <FontAwesomeIcon icon={faGlobe} />

  return (
    <div className='upcomingMovie'>
      <div>
        <img className='upcoming-littlePic' src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`} alt='random upcoming movie generated' />
      </div>
      <div className='upcoming-TimeTitleS'>
        <div className='upcoming-Time'>
          <span style={{ color: 'white' }}>{globe}</span>
          <h4>{Data.original_language}</h4>
        </div>
        <h4>{Data.original_title}</h4>
        <p style={{ color: 'gray' }}>Release Date: {Data.release_date}</p>
        <p style={{ color: 'gray' }}>Vote average: {Data.vote_average}</p>
        <p style={{ color: 'gray' }}>Vote count: {Data.vote_count}</p>
      </div>
    </div>
  )
}

export default LittleComing
