/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import MovieList from './MovieList'

const MoviesDisplay = () => {
  const [movieData, setMoviedata] = useState(window.localStorage.getItem('Data'))
  // console.log('fase inicio')

  useEffect(() => {
    // console.log('fase effect')
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Nzc1MDYzZDI4Y2MyNmE2MGU3ZTQ3MzAxYzVhYTY3OSIsInN1YiI6IjY1NGJlMGIyNTMyYWNiNTMzOWZlNjIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Axt69fPJjbo55Mx5ufNpWHxOkDQRWpeB_gRGKrBC_Xk'
      }
    }
    Promise.all([
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${1}&sort_by=popularity.desc`, options),
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${2}&sort_by=popularity.desc`, options),
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${3}&sort_by=popularity.desc`, options),
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${4}&sort_by=popularity.desc`, options),
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${5}&sort_by=popularity.desc`, options),
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${6}&sort_by=popularity.desc`, options),
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${7}&sort_by=popularity.desc`, options),
      fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=${8}&sort_by=popularity.desc`, options)
    ])
      .then(([r1, r2, r3, r4, r5, r6, r7, r8]) => Promise.all(([r1.json(), r2.json(), r3.json(), r4.json(), r5.json(), r6.json(), r7.json(), r8.json()])))
      .then(([r1, r2, r3, r4, r5, r6, r7, r8]) => setMoviedata({
        pag1: r1,
        pag2: r2,
        pag3: r3,
        pag4: r4,
        pag5: r5,
        pag6: r6,
        pag7: r7,
        pag8: r8
      }))
    window.localStorage.setItem('Data', movieData)
  }, [])
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
