import React from 'react'

const Movie = (props) => {
  console.log('entering Movie')
  console.log(props.original_title)
  return (
    <div>
      <div className='movieTitle'>{props.original_title}</div>
    </div>
  )
}

export default Movie
