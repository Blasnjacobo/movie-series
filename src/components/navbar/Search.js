/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Search = (props) => {
  const { setText } = props

  const handleChange = (event) => {
    const search = event.target.value
    setText(search)
  }

  return (
    <div>
      <input
        className='input-navbar'
        type='text'
        name='search'
        placeholder='Type your movie name'
        onChange={handleChange}
      />
    </div>
  )
}

export default Search
