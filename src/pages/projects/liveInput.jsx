import { useState } from "react";
import '../styles/projectlar.css'
function LiveInput(){
    const [matn, setMatn] = useState("");
    return(
        <div style={{ }} className="live_div project" >
            <h3 className="live_h1">jonli matn yozish</h3>
            <input 
                type="text" 
                value={matn} 
                onChange={(e) => setMatn(e.target.value)} 
                placeholder="Matn kiriting..."
                style={{backgroundColor:"white", fontFamily:"italic", border:"1px solid black", borderRadius:"5px", color:"black"}}
                className="live_inp"
            />
            <h4 style={{color:"green"}} className="live_matn">Siz yozgan matn: {matn}</h4>
        </div>
    )
}
export default LiveInput;