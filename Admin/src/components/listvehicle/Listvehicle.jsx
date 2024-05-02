import './Listvehicle.css'
import {useEffect, useState} from "react";
import axios from "axios";
import deleteicon from '../../assets/bin.png'
import updateicon from '../../assets/pen.png'
export default function Listvehicle(){
    const [allvehicles, setAllVehicles] = useState([]);
    const [updateState, setUpdateState] = useState(-1);
    const [newVehicleValues,setNewVehicleValues]=useState({
        carName:'',
        brand:'',
        model:'',
        price:'',
        speed:'',
        automatic:'',
        available:'',
        gps:'',
        seatType:'',
        description:''
    });


    useEffect(() => {
        axios.get('http://localhost:3000/getvehicledata')
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
    const removeVehicle=(id)=>{
        axios.delete(`http://localhost:3000/removevehicle/${id}`,)
            .then(function (response) {
                setAllVehicles((prevData) => prevData.filter( vehicle=> vehicle.id !== id));
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const updateVehicleState=(id)=>{
        setUpdateState(id)
    }

    const handleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:3000/updatevehicle/${updateState}`,newVehicleValues)
            .then(function (response) {
                console.log(response);
                setUpdateState(-1)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    return(
        <div className={'list-vehicle'}>
            <h1>All Product List</h1>
            <div className={'list-vehicle-format-main'}>
                <p>Car</p>
                <p>Car Name</p>
                <p>Car Brand</p>
                <p>Car Model</p>
                <p>Price</p>
                <p>Speed</p>
                <p>Automatic</p>
                <p>Available</p>
                <p>Remove</p>
                <p>Update</p>
            </div>
            <div className={'list-vehicle-all-vehicle'}>
                <form>
                    {allvehicles.map((vehicle,index)=>{
                        return<>
                            {updateState === vehicle.id ? (
                                <div className={'update-fields'}>
                                    <img style={{width:67}} src={vehicle.imgName}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,carName: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,brand: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,model: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,price: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,speed: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,automatic: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,available: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,gps: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,seatType: e.target.value})}/>
                                    <input type={'text'}   onChange={e=>setNewVehicleValues({...newVehicleValues,description: e.target.value})}/>
                                    <button onClick={handleUpdate} >Update</button>
                                </div>
                            ) : (
                                <div key={index} className={'list-vehicle-format-main list-vehicle-format'}>
                                    <img src={vehicle.imgName} alt={''} className={'car-image'} />
                                    <p>{vehicle.carName}</p>
                                    <p>{vehicle.brand}</p>
                                    <p>{vehicle.model}</p>
                                    <p>{vehicle.price}</p>
                                    <p>{vehicle.speed}km</p>
                                    <p>{vehicle.automatic}</p>
                                    <p>{vehicle.available}</p>
                                    <img src={deleteicon} alt={''} className={'delete-icon'} onClick={() => { removeVehicle(vehicle.id) }} />
                                    <img src={updateicon} alt={''} className={'update-icon'} onClick={() => { updateVehicleState(vehicle.id) }} />
                                </div>
                            )}
                            <hr/>
                        </>
                    })}
                </form>
                <hr/>
            </div>

        </div>
    )
}