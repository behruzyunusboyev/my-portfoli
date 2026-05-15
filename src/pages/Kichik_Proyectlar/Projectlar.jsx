import Clock from '../projects/clock'
import Counter from '../projects/Counter'
import LiveInput from '../projects/liveInput'
import Weather from '../projects/weather'
import '../styles/projectlar.css'
import Hikmatlar from './hikmatlar'
// import Products from './projects/products'
function Projectlar(){
    return(
        <div className="main_projects" >
            <Clock className='project'/>
            <Counter className='project'/>
            <Weather />
            <Hikmatlar />
            <LiveInput className='project'/>
            {/* <Products /> */}
        </div>
    )
}
export default Projectlar