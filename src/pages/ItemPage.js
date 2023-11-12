import React from 'react'
import { useParams } from 'react-router-dom'

const ItemPage = () => {
  const { movie } = useParams()
  console.log(movie)

  return (
    <div>
      ItemPage
    </div>
  )
}

export default ItemPage
