import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Projects from './pages/Proyects'
import Homepage from './pages/Homepage'
import "../src/App.css"
import Cuntact from './pages/Contact'
import About from './pages/about'
import Projectlar from './pages/Projectlar'
function App() {
  return (
    <BrowserRouter>
      <nav className='App_nav'>
          <Link to='/'         className='links'>Bosh sahifa</Link>
          <Link to='/about'    className='links'>About</Link>
          <Link to='/project' className='links'>Project</Link>
          <Link to='/contact'  className='links'>Aloqada</Link>
          <Link to='/projects' className='links'>My Projects</Link>
      </nav>
      <div style={{padding:'20px'}}>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/project' element={<Projects/>}/>
          <Route path='/contact' element={<Cuntact />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/projects' element={<Projectlar />}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App