import './Navbar.css'
import navlogo from '../../assets/Riyapolalogo.png'
import userlogo from '../../assets/users-61-64.png'
export default function Navbar(){
    return(
        <div className={'navbar'}>
            <div className={'nav-logo-div'}>
                <img src={navlogo} className={'nav-logo'}  alt={''}/>
                <label > Admin Panel</label>
            </div>
            <img src={userlogo} className={'user-logo'} alt={''}/>
        </div>
    )
}