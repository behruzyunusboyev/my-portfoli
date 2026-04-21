import github_icon from "../pages/github_icon.jpg"
import email_icon from "../pages/email_icon.jpg"
import tg_icon from "../pages/tg_icon.jpg"
import "../pages/styles/contact.css"
import { useRef } from "react"
function Cuntact(){
    const refs = useRef([])

    const nushalash = (index) => {
        const text= refs.current[index].innerText
        navigator.clipboard.writeText(text)
    }
    return(
        <div className="cuntact_div" style={{marginTop:'70px'}}>
            <h1 id="main_h1">Men bilan aloqa</h1>
            <div className="yollar">
                <img src={github_icon} alt="github_icon" />
                <h1>Git Hub:</h1>
                <p ref={(el) => (refs.current[0] = el) } onClick={() => nushalash(0)}>behruzyunusboyev</p>
            </div>
            <div className="yollar">
                <img src={email_icon} alt="email_icon" />
                <h1>Email:</h1>
                <p id="emailp" ref={(el) => (refs.current[1] = el) } onClick={() => nushalash(1)}>behruzyunusboyev9@gmail.com</p>
            </div>
            <div className="yollar">
                <img src= {tg_icon} alt="" />
                <h1>Telegram:</h1>
                <p ref={(el) => (refs.current[2] = el) } onClick={() => nushalash(2)}>t.me/Be1ruz_1310</p>
            </div>
        </div>
    )
}
export default Cuntact