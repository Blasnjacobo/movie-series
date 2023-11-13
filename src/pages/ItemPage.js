import React from 'react'
import { useParams } from 'react-router-dom'

const ItemPage = () => {
  const { title, overview, voteAverage, voteCount, releaseDate, originalLanguage, adult, posterPath } = useParams()

  return (
    <div className='items-section' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${posterPath}.jpg)` }}>
      <div className='item-description'>
        <h1 className='item-title'>{title}</h1>
        <br />
        <h2 className='item-overview'>{overview}</h2>
        <div className='items-info'>
          <div className='vote-items'>
            <h3>Vote Average: {voteAverage}</h3>
            <h3>Vote Count: {voteCount}</h3>
          </div>
          <div className='extraInfo-items'>
            <h3>Release Date: {releaseDate}</h3>
            <h3>Original Language: {originalLanguage}</h3>
          </div>
        </div>
        <h3 className='adultsonly-items'>Adults only: {adult}</h3>
        <button className='goback-button'><a className='go-back' href='/movie-series'>Go back to the main page</a></button>
      </div>
    </div>
  )
}

export default ItemPage
