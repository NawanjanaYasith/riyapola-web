import './Vehicle.css';
import {Col} from "reactstrap";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
export default function vehicle(props){
    return(

        <div className={'vehicle-container'}>
        <div className={'vehicle'}>
            <div >
                <img className={'vehicle-img'} src={props.image} alt={''}/>
            </div>
            <div className={'car-name'}>
                <p>{props.carName}</p>
            </div>
            <div className={'car-price'}>
                <p>${props.price}.00 / Day</p>
            </div>
            <div className={'car-automatic-speed-model'}>
                <p>{props.automatic}</p>
                <p>{props.speed}kmph</p>
                <p>{props.model}</p>
            </div>
            <div className={'rent-button-div'}>
                <Link to={`/cars/${props.carName}`}>
                    <button className={'car-rent-button'}><p className={'rent-text'}>Rent</p></button>
                </Link>
            </div>
        </div>
    </div>

)
}