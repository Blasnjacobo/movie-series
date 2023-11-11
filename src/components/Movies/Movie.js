/* eslint-disable react/jsx-key */
/* eslint-disable no-lone-blocks */
import React from 'react'
// import ItemPage from '../../pages/ItemPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Movie = (props) => {
  console.log('entering Movie')
  console.log(props)
  const result = props.results
  // console.log(props.original_title)
  const star = <FontAwesomeIcon icon={faStar} style={{ color: '#ffea00' }} />
  // const handleItem = () => {
  //  { <ItemPage /> }
  // }
  return (
    <div>
      {result.map((movie) =>
        <div className='movie-section'>
          <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie poster generated' />
          <div className='movie-description'>
            <span className='movie-star'>{star} {movie.vote_average}</span>
            <h4 className='movie-title'>{movie.title}</h4>
            <p className='movie-year'>Year: {movie.release_date}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Movie
