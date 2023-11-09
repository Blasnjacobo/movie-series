import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import seindfield from './seindfield.jpg'

const RightUpcoming = () => {
  const time = <FontAwesomeIcon icon={faCirclePlay} />
  return (
    <div>
      <div className='upcoming-rightSection'>
        <h3 className='upcomingTitle'>Upcoming</h3>
        <div>
          {/* FIRST MINI UPCOMING */}
          <div className='upcomingMovie'>
            <div>
              <img className='upcoming-littlePic' src={seindfield} alt='random upcoming movie generated' />
            </div>
            <div className='upcoming-TimeTitleS'>
              <div className='upcoming-Time'>
                <span style={{ color: 'white' }}>{time}</span>
                <h4>2:46</h4>
              </div>
              <h4>Las aventuras de bill y mandy</h4>
              <p style={{ color: 'gray' }}>Release Date: 2023-10-25</p>
              <p style={{ color: 'gray' }}>Vote average: 8.179</p>
              <p style={{ color: 'gray' }}>Original language: en </p>
            </div>
          </div>
          {/* SECOND MINI UPCOMING */}
          <div className='upcomingMovie'>
            <div>
              <img className='upcoming-littlePic' src={seindfield} alt='random upcoming movie generated' />
            </div>
            <div className='upcoming-TimeTitleS'>
              <div className='upcoming-Time'>
                <span style={{ color: 'white' }}>{time}</span>
                <h4>2:46</h4>
              </div>
              <h4>Las aventuras de bill y mandy</h4>
              <p style={{ color: 'gray' }}>Release Date: 2023-10-25</p>
              <p style={{ color: 'gray' }}>Vote average: 8.179</p>
              <p style={{ color: 'gray' }}>original language: en </p>
            </div>
          </div>
          {/* THIRD MINI UPCOMING */}
          <div className='upcomingMovie'>
            <div>
              <img className='upcoming-littlePic' src={seindfield} alt='random upcoming movie generated' />
            </div>
            <div className='upcoming-TimeTitleS'>
              <div className='upcoming-Time'>
                <span style={{ color: 'white' }}>{time}</span>
                <h4>2:46</h4>
              </div>
              <h4>Las aventuras de bill y mandy</h4>
              <p style={{ color: 'gray' }}>Release Date: 2023-10-25</p>
              <p style={{ color: 'gray' }}>Vote average: 8.179</p>
              <p style={{ color: 'gray' }}>original language: en </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightUpcoming
