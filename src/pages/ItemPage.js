import React from 'react'
import { useParams } from 'react-router-dom'

const ItemPage = () => {
  const { id, title, overview, voteAverage, voteCount, releaseDate, originalLanguage, adult, posterPath } = useParams()
  const itemImg = `https://image.tmdb.org/t/p/w500/${posterPath}.jpg`

  return (
    <div>
      {id}
      {title}
      {overview}
      {voteAverage}
      {voteCount}
      {releaseDate}
      {originalLanguage}
      {adult}
      {posterPath}
      <div>
        <img src={itemImg} alt='' />
      </div>
    </div>
  )
}

export default ItemPage
