import Clock from './clock'
import Counter from './Counter'
import LiveInput from './liveInput'
import Weather from './weather'
import '../styles/projectlar.css'
import Hikmatlar from '../Kichik_Proyectlar/hikmatlar'
import SearchBook from './SeartchBook'
import Translator from './Translate'
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
            {/* <SearchBook /> */}
            <Translator />
        </div>
    )
}
export default Projectlar