/* eslint-disable react/jsx-key */
import { useState } from 'react'
import Homeupcoming from '../components/Upcoming/Homeupcoming'
import MoviesDisplay from '../components/Movies/MoviesDisplay'
import Header from '../components/navbar/Header'

const HomePage = () => {
  const [text, setText] = useState('')
  console.log(text)

  return (
    <div>
      <Header setText={setText} />
      <Homeupcoming />
      <h2 className='initial-description'> Popular on Blas Movieland</h2>
      <MoviesDisplay text={text} />
    </div>
  )
}

export default HomePage
