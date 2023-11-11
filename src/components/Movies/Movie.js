/* eslint-disable no-lone-blocks */
import React from 'react'
import ItemPage from '../../pages/ItemPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Movie = (props) => {
  console.log('entering Movie')
  console.log(props.original_title)
  const star = <FontAwesomeIcon icon={faStar} style={{ color: '#ffea00' }} />
  const handleItem = () => {
    { <ItemPage /> }
  }
  return (
    <div className='movie-section'>
      <div>
        <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} alt='movie poster generated' />
      </div>
      <div onClick={handleItem} className='movie-description'>
        <span className='movie-star'>{star} {props.vote_average}</span>
        <h4 className='movie-title'>{props.title}</h4>
        <p className='movie-year'>Year: {props.release_date}</p>
      </div>
    </div>
  )
}

export default Movie
