import React from 'react'
import Filter from './components/Filter'
import Search from './components/Search'
import ToWatch from './components/ToWatch'

const Header = () => {
  return (
    <section className='Navbar-section'>
      <h1 id='logo'>Blas IMDb</h1>
      <div id='search'>
        <Filter />
        <Search />
      </div>
      <span id='divide' />
      <ToWatch />
    </section>
  )
}

export default Header
