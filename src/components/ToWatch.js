import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ToWatch = () => {
  const element = <FontAwesomeIcon icon={faStar} />
  return (
    <section>
      <h1 className='watchLater'>Watch Later List {element}</h1>
    </section>
  )
}

export default ToWatch
