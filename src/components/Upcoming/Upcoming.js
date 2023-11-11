/* eslint-disable no-unused-vars */
import { useState } from 'react'
import LittleComing from './LittleComing'
import BigComing from './BigComing'

const Upcoming = ({ Data }) => {
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    console.log('clicked')
    if (index === 16) { setIndex(0) } else { setIndex(index + 1) }
  }

  const handleclickLeft = () => {
    console.log('clicked')
    if (index === 0) { setIndex(16) } else { setIndex(index - 1) }
  }
  console.log(index)

  console.log(Data)
  return (
    <div className='upcomingSection'>
      {/* <BigComing Data={Data[index]} handleClick={handleClick} /> */}
      <BigComing Data={Data[index]} handleClick={handleClick} handleclickLeft={handleclickLeft} />

      <div className='upcoming-rightSection'>
        <h3 className='upcomingTitle'>Last release</h3>
        {/* <LittleComing Data={Data[index + 1]} /> */}
        <LittleComing Data={Data[index + 1]} />

        {/* <LittleComing Data={Data[index + 2]} /> */}
        <LittleComing Data={Data[index + 2]} />

        {/* <LittleComing Data={Data[index + 3]} /> */}
        <LittleComing Data={Data[index + 3]} />
      </div>
    </div>
  )
}

export default Upcoming
