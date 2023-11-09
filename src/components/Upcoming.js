import React from 'react'
import LittleComing from './LittleComing'
import BigComing from './BigComing'

const Upcoming = ({ Data }) => {
  console.log(Data)
  return (
    <div className='upcomingSection'>
      <BigComing Data={Data[0]} />
      <div className='upcoming-rightSection'>
        <h3 className='upcomingTitle'>Upcoming</h3>
        <LittleComing Data={Data[1]} />
        <LittleComing Data={Data[2]} />
        <LittleComing Data={Data[3]} />
      </div>
    </div>
  )
}

export default Upcoming
