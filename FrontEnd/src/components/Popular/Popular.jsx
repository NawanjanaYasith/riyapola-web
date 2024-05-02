import './Popular.css';
import popularCarData from '../../assets/data/popular.js'
import Vehicle from "../Vehicles/Vehicle.jsx";
import {useEffect, useState} from "react";
import instance from "../Services/AxiosOrders.jsx";
export default function Popular(){
    const [popularVehicles, setPopularVehicles] = useState([]);

    useEffect(() => {
        instance.get('http://localhost:3000/getpopularvehicle')
            .then(function (response) {
                console.log(response);
                setPopularVehicles(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);
    return(
        <div className={'popular'}>
            <h1>Popular Vehicles</h1>
            <hr/>
            <div className={'popular-vehicles'}>
                {popularVehicles.map((vehicle,i)=>{
                    return <Vehicle key={i}  image={vehicle.imgName} id={vehicle.id} brand={vehicle.brand} carName={vehicle.carName}  price={vehicle.price} speed={vehicle.speed}  automatic={vehicle.automatic} model={vehicle.model}/>
                })}
            </div>
        </div>
    )
}