/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable quotes */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-lone-blocks */
import React from 'react'
import { Link } from 'react-router-dom'
// import ItemPage from '../../pages/ItemPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import ItemPage from '../../pages/ItemPage'

const Movie = (props) => {
  console.log('entering Movie')
  console.log(props)
  const result = props.results
  // console.log(props.original_title)
  const star = <FontAwesomeIcon icon={faStar} style={{ color: '#ffea00' }} />

  return (
    <div>
      {result.map((movie) =>
        <div className='movie-section'>
          <Link
            className='linkItem'
            to={`/movie-series/movie/${movie.title}/${movie.overview}/${movie.vote_average}/${movie.vote_count}/${movie.release_date}/${movie.original_language}/${movie.adult}/${movie.poster_path.substring(1, ((movie.poster_path.length) - 4))}`}
          >
            <img className='movie-image' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie poster generated' />
            <div className='movie-description'>
              <span className='movie-star'>{star} {movie.vote_average}</span>
              <h4 className='movie-title'>{movie.title}</h4>
              <p className='movie-year'>Year: {movie.release_date}</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Movie
