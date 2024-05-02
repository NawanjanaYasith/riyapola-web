import './Sidebar.css';
import {Link} from "react-router-dom";
import addvehicle from '../../assets/plus.png'
import vehicle from '../../assets/car (2).png'

export default function Sidebar(){
    return(
        <div className={'sidebar'}>
            <Link to={'/addvehicle'} style={{textDecoration:"none"}} >
                <div className={'sidebar-item'}>
                    <img src={addvehicle} alt={''} className={'addvehicle-img'}/>
                    <p>Add Vehicle</p>
                </div>
            </Link>
            <Link to={'/listvehicle'}  style={{textDecoration:"none"}}>
                <div className={'sidebar-item'}>
                    <img src={vehicle} alt={''}  className={'vehiclelist-img'}/>
                    <p>Vehicle List</p>
                </div>
            </Link>
            <Link to={'/rentrequests'}  style={{textDecoration:"none"}}>
                <div className={'sidebar-item'}>
                    <img src={vehicle} alt={''}  className={'vehiclelist-img'}/>
                    <p>Rent Requests</p>
                </div>
            </Link>
            <Link to={'/messages'}  style={{textDecoration:"none"}}>
                <div className={'sidebar-item'}>
                    <img src={vehicle} alt={''}  className={'vehiclelist-img'}/>
                    <p>Messages</p>
                </div>
            </Link>
        </div>



)
}