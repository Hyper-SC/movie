import './app.css'

import Appinfo from "../appinfo/appinfo"
import Searchpanel from "../searchpanel/searchpanel"
import Appfilter from "../appfilter/appfilter"
import MovieList from '../movie-list/movieList'
import Moviesaddform from '../movies-add-form/movies-add-form'

const App = () => {
  return (
    <div className="app">
        <div className="content">
            <Appinfo />
            <div className='search-panel'>
                <Searchpanel />
                <Appfilter />
            </div>
            <MovieList />
            <Moviesaddform />
        </div>
    </div>
  )
}

export default App