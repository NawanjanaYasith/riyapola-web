import './Addvehicle.css'
import upload_area from '../../assets/up-loading.png'
import {useState} from "react";
import axios from "axios";
export default function Addvehicle(){

    const[image,setImage]=useState(false);
    const[errors,setErrors]=useState({})
    const[values,setValues]=useState({
        carName:'',
        brand:'',
        model:'',
        price:'',
        speed:'',
        imgName:'',
        automatic:'',
        gps:'',
        seatType:'',
        description:'',
        available:'',

    })
    const imageHandler=(e)=>{
        setImage(e.target.files[0])

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors={};

        if(!values.carName.trim()){
            validationErrors.carName="car name is required"
        }
        if(!values.brand.trim()){
            validationErrors.brand="car brand is required"
        }
        if(!values.model.trim()){
            validationErrors.model="car model is required"
        }
        if(!values.price.trim()){
            validationErrors.price="car price is required"
        } else if (!/^\d+$/.test(values.price.trim())) {
            validationErrors.price = "Car price must be a valid number";
        }
        if(!values.speed.trim()){
            validationErrors.speed="car speed is required"
        }else if (!/^\d+$/.test(values.speed.trim())) {
            validationErrors.speed = "speed must be a valid number";
        }
        if(!values.automatic.trim()){
            validationErrors.automatic="car transmission is required"
        }
        if(!values.gps.trim()){
            validationErrors.gps="gps is required"
        }
        if(!values.seatType.trim()){
            validationErrors.seatType="seat type is required"
        }
        if(!values.description.trim()){
            validationErrors.description="description is required"
        }
        if(!values.available.trim()){
            validationErrors.available="car availability is required"
        }
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length ===0){
            const formData = new FormData();
            formData.append('vehicle', image);

            axios.post('http://localhost:3000/upload', formData)
                .then(function (response) {
                    const imageUrl = response.data.image_url;
                    setValues(prevState => ({ ...prevState, image: imageUrl }));
                    window.location.reload();
                    // Now, make the second Axios request with the updated values
                    axios.post('http://localhost:3000/addvehicle', {
                        ...values,
                        imgName: imageUrl // Ensure image URL is included in the request
                    })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });

                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            alert("Submitted Successfully..")
        }else{
            alert("Submission Fail..")
        }
    }
    return(
        <div style={{marginLeft:200}}>
            <form onSubmit={handleSubmit}>
                <div className={'addvehicle-main'}>
                    <div className={'addvehicle'}>
                        <div className={'addvehicle-itemfield'}>
                            <p>Car Name</p>
                            <input name={'carName'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,carName: e.target.value})}/>
                            {errors.carName && <span>{errors.carName}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'} >
                            <p>Car Brand</p>
                            <input name={'carBrand'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,brand: e.target.value})}/>
                            {errors.brand && <span>{errors.brand}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'}>
                            <p>Car Model</p>
                            <input  name={'carModel'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,model: e.target.value})}/>
                            {errors.model && <span>{errors.model}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'}>
                            <p>Price</p>
                            <input  name={'price'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,price: e.target.value})}/>
                            {errors.price && <span>{errors.price}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'}>
                            <p>Speed</p>
                            <input  name={'speed'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,speed: e.target.value})}/>
                            {errors.speed && <span>{errors.speed}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'}>
                            <p>Automatic</p>
                            <input name={'automatic'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,automatic: e.target.value})}/>
                            {errors.automatic && <span>{errors.automatic}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'}>
                            <p>Gps</p>
                            <input name={'gps'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,gps: e.target.value})}/>
                            {errors.gps && <span>{errors.gps}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'}>
                            <p>Seat Type</p>
                            <input name={'seatType'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,seatType: e.target.value})}/>
                            {errors.seatType && <span>{errors.seatType}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'}>
                            <p>Description</p>
                            <input name={'description'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,description: e.target.value})}/>
                            {errors.description && <span>{errors.description}</span>}
                        </div>
                        <div className={'addvehicle-itemfield'}>
                            <p>Available</p>
                            <input name={'available'} type={"text"} placeholder={'type'} onChange={e=>setValues({...values,available: e.target.value})}/>
                            {errors.available && <span>{errors.available}</span>}
                        </div>
                    </div>
                    <div className={'addvehicle-uploader-div'}>
                        <label htmlFor={'file-input'}>
                            <img  src={image?URL.createObjectURL(image):upload_area} alt={''} className={'image-upload'}/>
                        </label>
                        <input type={"file"} onChange={imageHandler}  name={'image'} id={'file-input'} hidden/>
                    </div>
                    <div className={'addvehicle-btn-div'}>
                        <button type={"submit"} className={'btn-add'} >Add</button>
                    </div>
                </div>
            </form>
        </div>



    )
}