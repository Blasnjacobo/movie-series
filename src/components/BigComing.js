import React from 'react'
import { faCheckToSlot, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BigComing = ({ Data }) => {
  const slot = <FontAwesomeIcon icon={faCheckToSlot} style={{ color: '#ffffff' }} />
  const right = <FontAwesomeIcon icon={faAngleRight} size='2xl' />
  const left = <FontAwesomeIcon icon={faAngleLeft} size='2xl' />
  console.log(Data)
  return (
    <div className='upcoming-main'>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`}
          alt='randomly poster from upcoming movies'
          className='upcomingImg'
        />
        <span className='upcoming-mainleft'>{left}</span>
        <span className='upcoming-mainright'>{right}</span>
      </div>
      <div>
        <div className='upcoming-mainDescription'>
          <div className='upcoming-mainUpper'>
            <h1>{Data.original_title}</h1>
            <div className='upcoming-mainTime'>
              <span>{slot}</span>
              <h3>Vote Average: {Data.vote_average}</h3>
            </div>
          </div>
          <p>{Data.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default BigComing
