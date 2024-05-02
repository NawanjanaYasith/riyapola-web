import DriveImage from "../DriveImage/DriveImage.jsx";
import Footer from "../Footer/Footer.jsx";
import {useParams} from "react-router-dom";
import carData from "../../assets/data/carData.js";
import './CarDetails.css';
import {useEffect, useState} from "react";
import axios from "axios";
import instance from "../Services/AxiosOrders.jsx";


export default function CarDetails(){
    const[errors,setErrors]=useState({})
    const {id}=useParams();
    const [allvehicles, setAllVehicles] = useState([]);
    const singleCarItem=allvehicles.find((vehicle)=>vehicle.carName===id) || {};
    const[rentalData,setRentalData]=useState({
        car_name:'',
        name:'',
        email:'',
        phone_number:'',
        pickup_location:'',
        pickup_date:'',
        pickup_time:'',
        drop_off_location:'',
        drop_off_date:'',
        drop_off_time:'',
        additional_info:''
    })
    useEffect(() => {
        instance.get('http://localhost:3000/getvehicledata')
            .then(function (response) {
                console.log(response);
                setAllVehicles(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);

    const handleRentData=(e)=>{
        e.preventDefault();
        const validationErrors={};
        if(!rentalData.car_name.trim()){
            validationErrors.car_name="car name is required"
        }
        if(!rentalData.name.trim()){
            validationErrors.name="name is required"
        }
        if(!rentalData.email.trim()){
            validationErrors.email="email is required"
        }
        if(!rentalData.phone_number.trim()){
            validationErrors.phone_number="phone number is required"
        }
        if(!rentalData.pickup_location.trim()){
            validationErrors.pickup_location="pick-up location is required"
        }
        if(!rentalData.pickup_date.trim()){
            validationErrors.pickup_date="pick-up date is required"
        }
        if(!rentalData.pickup_time.trim()){
            validationErrors.pickup_time="pick-up time is required"
        }
        if(!rentalData.drop_off_location.trim()){
            validationErrors.drop_off_location="drop-0ff location is required"
        }
        if(!rentalData.drop_off_time.trim()){
            validationErrors.drop_off_time="drop-off time is required"
        }
        if(!rentalData.drop_off_date.trim()){
            validationErrors.drop_off_date="drop-off date is required"
        }
        setErrors(validationErrors);
        if(localStorage.getItem('login')){
            if(Object.keys(validationErrors).length ===0){
                instance.post(`/rentcar`,rentalData)
                    .then(function (response) {
                        console.log(response)
                        document.querySelectorAll('input').forEach(input => input.value = '');
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                alert("Submitted successfully....")
            }else{
                alert("Submission fails")
            }
        }else{
            alert("Log into user account")
        }
    }
    return(
        <div>
            <div className={'carDetails-container'}>
                <div className={'carDetails-left'}>
                    <img className={'carDetails-image'} src={singleCarItem.imgName} alt={''}/>
                </div>
                <div className={'carDetails-right'}>
                    <h2>{singleCarItem.carName}</h2>
                    <h5>${singleCarItem.price}.00 / Day </h5>
                    <p>{singleCarItem.description}</p>
                    <div className={'cardetails-other'}>
                        <h1>{singleCarItem.model}</h1>
                        <h1>{singleCarItem.automatic}</h1>
                        <h1>{singleCarItem.speed}kmph</h1>
                    </div>
                    <div className={'cardetails-other2'}>
                        <h1>{singleCarItem.gps}</h1>
                        <h1>{singleCarItem.seatType}</h1>
                        <h1>{singleCarItem.brand}</h1>
                    </div>
                </div>
            </div>
            <form onSubmit={handleRentData}>
                <div className={'main-div-bookinginfo'} style={{display:"flex",justifyContent:"center"}}>
                    <div className={'booking-information-container'}>
                        <h2>Booking Information</h2>
                        <div className={'booking-information'}>
                            <div>
                                <label>Car Name</label>
                                <input type={'text'} placeholder={'Car Name'} onChange={e=>setRentalData({...rentalData,car_name: e.target.value})}/>
                                {errors. car_name && <span>{errors. car_name}</span>}
                            </div>
                            <div>
                                <label>Full Name</label>
                                <input type={'text'} placeholder={'Full Name'} onChange={e=>setRentalData({...rentalData,name: e.target.value})}/>
                                {errors.name && <span>{errors.name}</span>}
                            </div>
                            <div>
                                <label>Email</label>
                                <input type={'email'} placeholder={'Email'} onChange={e=>setRentalData({...rentalData,email: e.target.value})}/>
                                {errors.email && <span>{errors.email}</span>}
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type={'number'} placeholder={'Phone Number'} onChange={e=>setRentalData({...rentalData,phone_number: e.target.value})}/>
                                {errors.phone_number && <span>{errors.phone_number}</span>}
                            </div>
                            <div>
                                <label>Pick-up Location</label>
                                <input type={'text'} placeholder={'Pick-up Location'} onChange={e=>setRentalData({...rentalData,pickup_location: e.target.value})}/>
                                {errors.pickup_location && <span>{errors.pickup_location}</span>}
                            </div>
                            <div>
                                <label>Pick-up Date</label>
                                <input type={'date'} placeholder={'Pick-up Date'} onChange={e=>setRentalData({...rentalData,pickup_date: e.target.value})}/>
                                {errors.pickup_date && <span>{errors.pickup_date}</span>}
                            </div>
                            <div>
                                <label>Pick-up Time</label>
                                <input type={'time'} placeholder={'Pick-up Time'} onChange={e=>setRentalData({...rentalData,pickup_time: e.target.value})}/>
                                {errors.pickup_time && <span>{errors.pickup_time}</span>}
                            </div>
                            <div>
                                <label>Drop-off Location</label>
                                <input type={'text'} placeholder={'Drop-off Location'} onChange={e=>setRentalData({...rentalData,drop_off_location: e.target.value})}/>
                                {errors.drop_off_location && <span>{errors.drop_off_location}</span>}
                            </div>
                            <div>
                                <label>Drop-off Date</label>
                                <input type={'date'} placeholder={'Drop-off Date'} onChange={e=>setRentalData({...rentalData,drop_off_date: e.target.value})}/>
                                {errors.drop_off_date && <span>{errors.drop_off_date}</span>}
                            </div>
                            <div>
                                <label>Drop-off Time</label>
                                <input type={'time'} placeholder={'Drop-off Time'} onChange={e=>setRentalData({...rentalData,drop_off_time: e.target.value})}/>
                                {errors.drop_off_time && <span>{errors.drop_off_time}</span>}
                            </div>
                        </div>
                        <label className={'additonalinfo-text'}>Additional Information</label>
                        <input className={'inputfor-write'} type={'text'} onChange={e=>setRentalData({...rentalData,additional_info: e.target.value})}/>
                        <div className={'reserve-btn-div'} >
                            <button type={"submit"} className={'reserve-button'}>Reserve</button>
                        </div>
                    </div>
                </div>
            </form>
            <Footer/>
        </div>
    )
}