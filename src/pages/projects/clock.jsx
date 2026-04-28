import { useEffect, useState } from "react";
import '../styles/projectlar.css'
function Clock(){
    
    const [kun, setkun]= useState(new Date().toLocaleDateString())
    
    useEffect(()=>{
        const interval2=setInterval(()=>{
            setkun(new Date().toLocaleDateString())
            // console.log("vaqt yangilandi")
        },1000);
        return () => clearInterval(interval2)
    }, [])
    
    const [vaqt, setVaqt]= useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        const interval=setInterval(()=>{
            setVaqt(new Date().toLocaleTimeString())
            // console.log("vaqt yangilandi")
        },1000);
        return () => clearInterval(interval)
    }, [])
    
function rcolor(){
    const cant = document.querySelector('#cant')
    const matn = document.querySelector('#matn')
    const soat = document.querySelector('#soat')
    const kun = document.querySelector('#kun')
    const r1 = Math.floor(Math.random()* 255)
    const r2 = Math.floor(Math.random()* 255)
    const r3 = Math.floor(Math.random()* 255)
    let color= `rgba(${r1}, ${r2}, ${r3}, 0.5)`
    let color2=`rgb(${r2}, ${r3}, ${r1})`
    let color3=`rgb(${r3}, ${r2}, ${r1})`
    cant.style.backgroundColor= color;
    cant.style.boxShadow=`0 0 40px ${color2}`
    matn.style.color= color2;
    soat.style.color=color3;
    kun.style.color=color3;
}
    
    return(
        <div id="cant" className="clock_div project">
            <h1 id="matn">Hozirgi vaqt</h1>
            <h2 id="soat" style={{fontSize:"58px", color:"#61dafb", fontWeight:"700"}}>{vaqt}</h2>
            <h2 id="kun"  style={{fontSize:"58px", color:"#61dafb", fontWeight:"700"}}>{kun}</h2>
            <button onClick={rcolor} className="clock_btn">color</button>
        </div>
    )
}
export default Clock