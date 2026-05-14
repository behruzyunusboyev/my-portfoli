import "../styles/kub.css"
import '../styles/homrpage.css'
import rasm1 from '../rasmlar/homepage_img.jpg'
import rasm2 from '../rasmlar/profil.jpg'
// import rasm2 from "../pages/rasmlar/ptichka.jpg.png"
import { FaUser, FaMapMarkerAlt, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
function Homepage() {
    return(
        <div className='homepage1'>
            <div className="main_cub">
            <div className="cube">
                <div className="top cube_matn">HTML</div>
                <div className="box">
                    <span style={{ "--i": 0 }} className="cube_matn">NODE</span>
                    <span style={{ "--i": 1 }} className="cube_matn">JAVASCRIPT</span>
                    <span style={{ "--i": 2 }} className="cube_matn">CSS</span>
                    <span style={{ "--i": 3 }} className="cube_matn">REACT</span>
                </div>
                <div className="buttom cube_matn" >HTML</div>
            </div>
        </div>
            <div className="homepage">
                <img src={rasm2} alt="Rasm" className='rasm1' />
            <div className="matn">
            <div className="matn2">
                <h1 id='h11'>Salom, Behruz Yunusboyev</h1>
            <p id='kasb'>Men frontend dasturchiman</p>
            </div>
            <h1 className='malum'>Malumotlarim :</h1>
            <div className="home_items">
                <div className="home_item">
                {/* <img src={rasm2} alt="" className='rasm2' /> */}
                <FaUser size='30' color='white' />
                <h1>Yoshim :</h1>
                <p>16 da</p>
            </div>
            <div className="home_item">
                <FaMapMarkerAlt size='30' color='white'/>
                {/* <img src={rasm2} alt="" className='rasm2' /> */}
                <h1>Manzil :</h1>
                <p>O'zbekisto, Xorazm</p>
            </div>
            <div className="home_item">
                <FaBriefcase size='30' color='white'/>
                {/* <img src={rasm2} alt="" className='rasm2' /> */}
                <h1>Tajriba :</h1>
                <p>1.5 yil frontend devlopment</p>
            </div>
            <div className="home_item">
                <FaProjectDiagram size='30' color='white'/>
                {/* <img src={rasm2} alt="" className='rasm2' /> */}
                <h1>loyhalar :</h1>
                <p>Bir necha kichik loyhalar ishlagan man</p>
            </div>
            </div>
            <p>loyhalardan birini projects bo'limida ko'rishingiz mumkin</p>
            </div>
            </div>
        
        </div>
    )
}
export default Homepage