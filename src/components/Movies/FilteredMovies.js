import React from 'react'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'

const FilteredMovies = (props) => {
  const { movies } = props
  console.log(movies)
  // const star = <FontAwesomeIcon icon={faStar} style={{ color: '#ffea00' }} />
  return (
    <div>
      <div className='movie-section'>
        <h1>{movies[0].title}</h1>
      </div>
    </div>
  )
}

export default FilteredMovies
