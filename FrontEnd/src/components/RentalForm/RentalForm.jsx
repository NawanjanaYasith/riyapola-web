import './RentalForm.css'
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
export default function RentalForm(){

    return(
        <div className={'rent-from'}>
            <div className={'label-div'}>
                <label style={{marginRight:35}} htmlFor="pickUpLocation">Pick-up Location:</label>
                <label style={{marginLeft:120}} htmlFor="pickUpDate">Pick-up Date:</label>
                <label style={{marginLeft:60}} htmlFor="pickUpTime">Pick-up Time:</label>
                <label style={{marginLeft:50}} htmlFor="dropOffDate">Drop-Off Date:</label>
                <label style={{marginLeft:45}} htmlFor="dropOffTime">Drop-Off Time:</label>
            </div>
            <div className={'input-fields'}>
                <div>
                    <input className={'pickUp-loaction-field'} type={"text"} sx={{backgroundColor:'white',borderRadius:'20'}} placeholder={'Pick-up Location'}/>
                </div>
                <div>
                    <input className={'pickUp-date-field'} type={"date"} placeholder={'Pick-up Date'} sx={{backgroundColor:'white'}} />
                </div>
                <div>
                    <input className={'pickUp-time-field'} type={"time"} sx={{backgroundColor:'white'}} placeholder={'Time'}/>
                </div>
                <div>
                    <input className={'dropoff-date-field'} type={'date'} sx={{backgroundColor:'white'}} placeholder={'Drop-Off Date'}/>
                </div>
                <div>
                    <input className={'dropoff-time-field'} type={'time'} sx={{backgroundColor:'white'}} placeholder={'Time'}/>
                </div>
            </div>
            <div className={'button-container'}>
                <Link to={'/cars'}><button className={'findcar-button'}>Find Car</button>
                </Link>
            </div>
        </div>
    )
}