import React from 'react'

const WatchLater = (props) => {
  const { favorite } = props
  return (
    <div>
      <h1>Next Movie to watch</h1>
      <p>{favorite}</p>
    </div>
  )
}

export default WatchLater
