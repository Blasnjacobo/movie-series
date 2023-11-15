import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ToWatch = () => {
  const element = <FontAwesomeIcon style={{ color: 'white' }} icon={faBookmark} />
  return (
    <section>
      <Link
        className='watchLater'
        to='/movie-series/movie/watchList'
      >
        <h1>Library including movies from this year {element}</h1>
      </Link>
    </section>
  )
}

export default ToWatch
