import './styles/about.css'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function About(){
    return(
        <div id='about_main'>
            <h1>Men Behruz Yunusboyev</h1>
            <p>Hozirda 16 yoshdaman, O'zekiston Xorazmdagi Alxorazmiy loyhasida oqiman. 
            1.5 yilldan beri frontend devloperlik sohasini organib kelaman.Shu kungacha bir nechta
             kichik loyhalarda ishlagan man. Men blan ishlashni hohlasangiz contact bolimida bog'laning </p>
             <div className="icons">
                <a href="https://www.instagram.com/_.behruz._13.10/?next="><FaInstagram size={50} color="pink" /></a>
                <a href="t.me/Be1ruz_1310"><FaTelegram  size={50} color="skyblue" /></a>
                <a href="https://mail.google.com/mail/u/0/"><MdEmail     size={50} color='#EA4335' /></a>
                <a href="https://github.com/behruzyunusboyev"><FaGithub    size={50} color="white" /></a>
                <a href=""><FaFacebook  size={50} color="blue" /></a>
             </div>
        </div>
    )
}
export default About