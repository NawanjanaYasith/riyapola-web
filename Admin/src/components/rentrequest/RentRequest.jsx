import './RentRequest.css';
import deleteicon from "../../assets/bin.png";
import updateicon from "../../assets/pen.png";
import {useEffect, useState} from "react";
import axios from "axios";
export default function RentRequest(){
    const [allRequests, setAllRequests] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/getrequests')
            .then(function (response) {
                console.log(response);
                setAllRequests(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);

    const removeRequests=(id)=>{
        console.log("ID:", id); // Add this line to check the value of id

        axios.delete(`http://localhost:3000/removeRequests/${id}`,)
            .then(function (response) {
                setAllRequests((prevData) => prevData.filter( requests=> requests.id !== id));
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return(
        <div className={'list-requests'}>
            <h1>Customer Requests</h1>
            <div className={'list-requests-format-main'}>
                <p></p>
                <p>Car Name</p>
                <p>Renter Name</p>
                <p>phone Number</p>
                <p>Pick-up Location</p>
                <p>Pick-up Date</p>
                <p>Email</p>
                <p>Remove</p>

            </div>
            <div className={'list-requests-all-vehicle'}>
                <hr/>
                {allRequests.map((request,index)=>{
                    return<>
                        <div key={index} className={'list-requests-data-format-main list-requests-format'}>
                            <p></p>
                            <p >{request.car_name}</p>
                            <p>{request.name}</p>
                            <p>{request.phone_number}</p>
                            <p>{request.pickup_location}</p>
                            <p>{request.pickup_date}</p>
                            <p>{request.email}</p>
                            <img src={deleteicon} alt={''} className={'delete-icon'} onClick={() => { removeRequests(request.id) }} />
                        </div>
                        <hr/>
                    </>
                })}
            </div>

        </div>
    )
}