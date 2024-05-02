import Riyapolalogo from "../../assets/all-images/Riyapolalogo.png";
import './Navbar.css';
import {useState} from "react";
import {Link} from "react-router-dom";
export default function Navbar({}){
    const [menu,setMenu]=useState("home");

        return(
        <div className={'navbar'}>
            <img className={'nav-logo'} src={Riyapolalogo} alt={''}/>
            <ul className={'nav-menu'}>
                <Link to={'/home'}> <li onClick={()=>{setMenu("home")}}>Home{menu==="home" ? <hr/>:<></>}</li></Link>
                <Link to={'/about'}><li onClick={()=>{setMenu("about")}}>About{menu==="about" ? <hr/>:<></>}</li>
                </Link>
                <Link to={'/cars'}><li onClick={()=>{setMenu("cars")}}>Cars{menu==="cars" ? <hr/>:<></>}</li>
                </Link>
                <Link to={'/contact'}><li onClick={()=>{setMenu("contact")}}>Contact{menu==="contact" ? <hr/>:<></>}</li>
                </Link>
            </ul>
            <div className={'nav-reg-log'}>
                {localStorage.getItem('login') ? (
                    <button className={'nav-btn'} onClick={() => {localStorage.removeItem('login'); window.location.reload('/home')}}>Logout</button>
                ) : (
                    <Link to={'/login'}>
                        <button className={'nav-btn'}>Login</button>
                    </Link>
                )}
                <Link to={'/signup'}>
                    <button className={'nav-btn'}>SignUp</button>
                </Link>
            </div>
        </div>
    )
}