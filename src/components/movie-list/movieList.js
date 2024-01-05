import './movieList.css'
import Movielistitem from '../movie-list-item/movie-list-item'
const MovieList = () => {
  return (
    <div className='movie-list'>
        <Movielistitem />
        <Movielistitem />
        <Movielistitem />
        <Movielistitem />
    </div>
  )
}

export default MovieList