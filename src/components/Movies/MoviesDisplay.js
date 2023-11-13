/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import MovieList from './MovieList'

const MoviesDisplay = () => {
  const [movieData, setMoviedata] = useState([])
  // console.log('fase inicio')

  useEffect(() => {
    console.log('fase effect')
    const arr = []
    for (let i = 1; i <= 20; i++) {
      arr.push(i)
    }
    const fetchData = async (index) => {
      const initialData = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${index}&sort_by=popularity.desc`, options)
      const jsonResponse = await initialData.json()
      setMoviedata(previousState => [...previousState, jsonResponse])
      console.log(' fase inside fetch')
    }

    console.log('fase final effect')
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzc1MDYzZDI4Y2MyNmE2MGU3ZTQ3MzAxYzVhYTY3OSIsInN1YiI6IjY1NGJlMGIyNTMyYWNiNTMzOWZlNjIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Axt69fPJjbo55Mx5ufNpWHxOkDQRWpeB_gRGKrBC_Xk'
      }
    }
    arr.forEach(index => fetchData(index))
  }, [])
  console.log(movieData)
  // console.log('fase antes de return')
  return (
    <div className='moviesDisplay-section'>
      {/* {console.log('fase return')} */}
      {/* {(movieData !== 'null') && <MovieList movieData={movieData} />} */}
      {(movieData !== 'null') && <MovieList movieData={movieData} />}
    </div>
  )
}

export default MoviesDisplay
