/* eslint-disable no-unused-vars */
import { useState } from 'react'
import LittleComing from './LittleComing'
import BigComing from './BigComing'
import { Link } from 'react-router-dom'

const Upcoming = ({ Data }) => {
  const [index, setIndex] = useState(0)
  console.log('fase initial upcoming function')
  console.log(Data)

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
      {console.log('before bigComing')}
      {console.log(Data)}
      {/* <BigComing Data={Data[index]} handleClick={handleClick} /> */}
      <BigComing Data={Data[index]} handleClick={handleClick} handleclickLeft={handleclickLeft} />
      <div className='upcoming-rightSection'>
        <Link
          className='linkItem'
          to={`/movie-series/movie/${Data[index + 1].title}/${Data[index + 1].overview}/${Data[index + 1].vote_average}/${Data[index + 1].vote_count}/${Data[index + 1].release_date}/${Data[index + 1].original_language}/${Data[index + 1].adult}/${Data[index + 1].poster_path.substring(1, ((Data[index + 1].poster_path.length) - 4))}`}
        >
          <h3 className='upcomingTitle'>Last release</h3>
          {/* <LittleComing Data={Data[index + 1]} /> */}
          <LittleComing Data={Data[index + 1]} />
        </Link>

        <Link
          className='linkItem'
          to={`/movie-series/movie/${Data[index + 2].title}/${Data[index + 2].overview}/${Data[index + 2].vote_average}/${Data[index + 2].vote_count}/${Data[index + 2].release_date}/${Data[index + 2].original_language}/${Data[index + 2].adult}/${Data[index + 2].poster_path.substring(1, ((Data[index + 2].poster_path.length) - 4))}`}
        >
          {/* <LittleComing Data={Data[index + 2]} /> */}
          <LittleComing Data={Data[index + 2]} />
        </Link>
        <Link
          className='linkItem'
          to={`/movie-series/movie/${Data[index + 3].title}/${Data[index + 3].overview}/${Data[index + 3].vote_average}/${Data[index + 3].vote_count}/${Data[index + 3].release_date}/${Data[index + 3].original_language}/${Data[index + 3].adult}/${Data[index + 3].poster_path.substring(1, ((Data[index + 3].poster_path.length) - 4))}`}
        >
          {/* <LittleComing Data={Data[index + 3]} /> */}
          <LittleComing Data={Data[index + 3]} />
        </Link>
      </div>
    </div>
  )
}

export default Upcoming
