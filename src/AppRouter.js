import React from 'react'
import Header from './components/navbar/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ItemPage from './pages/ItemPage'

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/movie-series' element={<HomePage />} />
        <Route path='/movie-series/movie/:movie' element={<ItemPage />} />
      </Routes>

    </>
  )
}

export default AppRouter
