import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faBookmark } from '@fortawesome/free-solid-svg-icons'

const Movie = (props) => {
  const result = props.results
  const text = props.text
  const star = <FontAwesomeIcon icon={faStar} style={{ color: '#ffea00' }} />
  const Bookmark = <FontAwesomeIcon className='bookmark-movie' icon={faBookmark} size='2xl' style={{ color: 'white' }} />

  return (
    <div className='general-movies-section'>
      {result.map((movie) =>
        movie.title.toLowerCase().includes(text) &&
          <div className='movie-section' key={movie.id}>
            {console.log(movie)}
            <Link
              className='linkItem'
              to={`/movie-series/movie/${movie.title}/${movie.overview}/${movie.vote_average}/${movie.vote_count}/${movie.release_date}/${movie.original_language}/${movie.adult}/${movie.poster_path ? movie.poster_path.substring(1, movie.poster_path.length - 4) : ''}`}
            >
              <div className='icon-container'>
                <img className='movie-image' src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'default-image-url.jpg'} alt={`${movie.title} poster`} />
                {(movie.release_date.substring(0, 4) === '2023') &&
                  <div className='bookmark-container'>{Bookmark}</div>}
              </div>
              <div className='movie-description'>
                <span className='movie-star'>{star} {movie.vote_average}</span>
                <h4 className='movie-title'>{movie.title}</h4>
                <p className='movie-year'>Year: {movie.release_date}</p>
              </div>
            </Link>
          </div>
      )}
    </div>
  )
}

export default Movie
