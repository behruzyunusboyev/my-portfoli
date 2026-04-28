import { use, useState } from "react";
import '../styles/projectlar.css'
function Counter() {
    const [son, setSon] = useState(0);
    const h22= document.getElementById("h22");
    const error1 = document.querySelector(".error1");
    const oshirish = () => {
        setSon(son +1);
    }
    const kamaytrish = () => {
        if(son > 0){
            setSon(son -1);
        }else{
            error1.innerHTML = "Siz 0 dan kichik son kiritolmaysiz";
            h22.style.color = "red";
        }
    }
    const [daraja, drson] = useState(0);
    const dr1 = () => {
        drson(daraja + 1);
        
    }
    const daraja2 = () => {
        drson(daraja - 1);
    }
    return(
        <div id="divv" className="project">
            <h4 className="error1"></h4>
            <h2 id="h22">hozirgi sanoq : {son}<sup>{daraja}</sup>={Math.pow(son, daraja)}</h2>
            <div className="btndiv" >
            <div className="btn12">
            <button onClick={oshirish}          className="btns" >Oshirish</button>
            <button onClick={kamaytrish}        className="btns" >kamaytrish</button>
            </div>  
            <div className="btn12">
            <button onClick={dr1}               className="btns" >daraja(+)</button>
            <button onClick={daraja2}           className="btns" >daraja(-)</button>
            </div>
            <button onClick={() => {setSon(0)}} className="btns" >nollash</button>

            </div>
        </div>
    )
}
// onClick={daraja2}
export default Counter;