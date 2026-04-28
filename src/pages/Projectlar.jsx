import Clock from './projects/clock'
import Counter from './projects/Counter'
import LiveInput from './projects/liveInput'
import './styles/projectlar.css'
// import Products from './projects/products'
function Projectlar(){
    return(
        <div className="main_projects" >
            <Clock className='project'/>
            <Counter className='project'/>
            <div className='element3'><LiveInput className='project'/></div>
            {/* <Products /> */}
        </div>
    )
}
export default Projectlar