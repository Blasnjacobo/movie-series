// import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const ItemPage = (props) => {
  const { title, overview, voteAverage, voteCount, releaseDate, originalLanguage, adult, posterPath } = useParams()
  const Bookmark = <FontAwesomeIcon className='bookmark-movie' icon={faBookmark} size='2xl' style={{ color: 'white' }} />

  return (
    <div className='items-section' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${posterPath}.jpg)` }}>
      <div className='item-description'>
        <div className='title-watchList'>
          <h1 className='item-title'>{title}</h1>
        </div>
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
        <div className='button-bookmark'>
          <button className='goback-button'><a className='go-back' href='/movie-series'>Go back to the main page</a></button>
          {console.log(releaseDate.substring(0, 4))}
          {(releaseDate.substring(0, 4) === '2023') && <h2 className='Itempage-bookmark'>Watch a brand new movie {Bookmark}</h2>}
        </div>

      </div>
    </div>
  )
}

export default ItemPage
