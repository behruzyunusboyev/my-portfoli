import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Projects from './pages/Proyects'
import Homepage from './pages/Homepage'
import "../src/App.css"
import Cuntact from './pages/Contact'
import About from './pages/about'
import Projectlar from './pages/Projectlar'
import GetCountry from './pages/getcountry'
import CurrencyConvertor from './pages/convertor'
import MovieSearch from './MovieSearch'
function App() {
  return (
    <BrowserRouter>
      <nav className='App_nav'>
          <Link to='/'         className='links'>Bosh sahifa</Link>
          <Link to='/about'    className='links'>About</Link>
          <Link to='/project' className='links'>Project</Link>
          <Link to='/contact'  className='links'>Aloqada</Link>
          <Link to='/projects' className='links'>My Projects</Link>
          <Link to='/convertor' className='links'>Currency Convertor</Link>
          <Link to='/movies' className='links'>Movie Search</Link>
      </nav>
      <div style={{padding:'20px'}}>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/project' element={<GetCountry />}/>
          <Route path='/contact' element={<Cuntact />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/projects' element={<Projectlar />}/>
          <Route path='/convertor' element={<CurrencyConvertor />}/>
          <Route path='/movies' element={<MovieSearch />}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App