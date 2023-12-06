/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ItemPage from './pages/ItemPage'
import WatchLater from './pages/WatchLater'

const AppRouter = () => {
  const [favorite, setFavorite] = useState(window.localStorage.getItem('Data'))
  const handleClick = (title) => {
    setFavorite(title)
    window.localStorage.setItem('Data', favorite)
  }
  console.log(favorite)
  return (
    <>
      <Routes>
        <Route path='/movie-series' element={<HomePage />} />
        <Route path='/movie-series/movie/:title/:overview/:voteAverage/:voteCount/:releaseDate/:originalLanguage/:adult/:posterPath' element={<ItemPage handleClick={handleClick} />} />
        <Route path='/movie-series/movie/watchList' element={<WatchLater favorite={favorite} />} />
      </Routes>

    </>
  )
}

export default AppRouter
