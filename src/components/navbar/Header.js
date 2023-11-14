import React from 'react'
import Search from './Search'
import ToWatch from './ToWatch'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (props) => {
  const { setText } = props
  const ticket = <FontAwesomeIcon icon={faTicket} style={{ color: '#ffffff' }} />
  return (
    <section className='Navbar-section'>
      <h1 id='logo'>Blas Movieland {ticket}</h1>
      <div id='search'>
        <Search setText={setText} />
      </div>
      <span id='divide' />
      <ToWatch />
    </section>
  )
}

export default Header
