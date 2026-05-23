import { Routes, Route, Link } from 'react-router-dom'
import AnimeExplorer from './AnimeExplorer'
import GetCountry from './getcountry'
import MovieSearch from './MovieSearch'
import "../styles/Bigprojects.css"
import SearchBook from './SeartchBook'
function Bignavbar() {
  return (
    <div className='big_main'>
      <nav className='nav_big'>
          <Link to='/BigProjects/anime' className='links_big'>Anime Explorer</Link>
          <Link to='/BigProjects/country' className='links_big'>Country search</Link>
          <Link to='/BigProjects/movie' className='links_big'>Movie Search</Link>
          <Link to='/BigProjects/book' className='links_big'>Search Book</Link>
      </nav>
      <div style={{ padding: '20px' }}>

        <Routes>
          <Route index element={<AnimeExplorer />} />
          <Route path='anime' element={<AnimeExplorer />} />
          <Route path='country' element={<GetCountry />} />
          <Route path='movie' element={<MovieSearch />} />
          <Route path='book' element={<SearchBook />} />
        </Routes>
        {/* <Routes>
          <Route path='/anime' element={<AnimeExplorer />} />
          <Route path='/country' element={<GetCountry />} />
          <Route path='/movie' element={<MovieSearch />} />
        </Routes> */}
      </div>
    </div>
  )
}

export default Bignavbar;