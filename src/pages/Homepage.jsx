import '../pages/styles/homrpage.css'
import rasm1 from '../pages/homepage_img.jpg'
import rasm2 from "../pages/ptichka.jpg.png"
function Homepage() {
    return(
        <div className='homepage1'>
            <div className="homepage">
                <img src={rasm1} alt="Rasm" className='rasm1' />
            <div className="matn">
            <div className="matn2">
                <h1 id='h11'>Salom, Behruz Yunusboyev</h1>
            <p id='kasb'>Men frontend dasturchiman
            </p>
            </div>
            <h1 className='malum'>Malumotlarim :</h1>
            <div className="home_items">
                <div className="home_item">
                <img src={rasm2} alt="" className='rasm2' />
                <h1>Yoshim :</h1>
                <p>16 da</p>
            </div>
            <div className="home_item">
                <img src={rasm2} alt="" className='rasm2' />
                <h1>Manzil :</h1>
                <p>O'zbekisto, Xorazm</p>
            </div>
            <div className="home_item">
                <img src={rasm2} alt="" className='rasm2' />
                <h1>Tajriba :</h1>
                <p>1.5 yil frontend devlopment</p>
            </div>
            <div className="home_item">
                <img src={rasm2} alt="" className='rasm2' />
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