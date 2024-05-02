import carData from "../../assets/data/carData.js"
import Vehicle from "../Vehicles/Vehicle.jsx";
import './CarCollection.css';
import {useEffect, useState} from "react";
import axios from "axios";
import instance from "../Services/AxiosOrders.jsx";

export default function CarCollection(){
    const [allvehicles, setAllVehicles] = useState([]);


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
    return(
        <div className={'collection'}>
            <div className={'collection-vehicles'}>
                {allvehicles.map((vehicle,i)=>{
                    return <Vehicle key={i}  image={vehicle.imgName} id={vehicle.id} brand={vehicle.brand} carName={vehicle.carName}  price={vehicle.price} speed={vehicle.speed}  automatic={vehicle.automatic} model={vehicle.model}/>
                })}
            </div>
        </div>
    )
}