import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Kichik_Proyectlar/Homepage'
import "../src/App.css"
import Cuntact from './pages/Kichik_Proyectlar/Contact'
import About from './pages/Kichik_Proyectlar/about'
import Projectlar from './pages/Kichik_Proyectlar/Projectlar'
// import GetCountry from './pages/BigProjects/getcountry'
// import CurrencyConvertor from './pages/convertor'
// import MovieSearch from './pages/BigProjects/MovieSearch'
import Bignavbar from './pages/BigProjects/bignavber'
function App() {
  return (
    <BrowserRouter>
      <nav className='App_nav'>
          <Link to='/'         className='links'>Bosh sahifa</Link>
          <Link to='/about'    className='links'>About</Link>
          <Link to='/BigProjects' className='links'> Big Projects</Link>
          <Link to='/contact'  className='links'>Aloqada</Link>
          <Link to='/projects' className='links'>My Projects</Link>
      </nav>
      <div style={{padding:'20px'}}>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/BigProjects/*' element={<Bignavbar />} />
          {/* <Route path='/BigProjects' element={<Bignavbar />}/> */}
          <Route path='/contact' element={<Cuntact />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/projects' element={<Projectlar />}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App