import './SignUpForm.css';
import carimg from '../../assets/all-images/slider-img/sliderSecond.jpg'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import instance from "../Services/AxiosOrders.jsx";

export default function SignUpForm(){
    const[values,setValues]=useState({
        name:'',
        email:'',
        password:''
    });
    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        instance.post(`http://localhost:3000/signup`,values)
            .then(function (response) {
                console.log(response)
                document.querySelectorAll('input').forEach(input => input.value = '');
                navigate('/login')
            })
            .catch(function (error) {
                console.log(error);
                if (error.response && error.response.status === 400) {
                    // Email already exists, display error message to the user
                    alert("Email already exists");
                } else {
                    // Other errors, generic error message
                    alert("An error occurred. Please try again later.");
                }
            })
    }
    return(
        <div className={"logins"}>
            <div className={'login-container'}>
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className={'login-fields'}>
                        <input type={'text'} placeholder={'Username'} onChange={(e)=>setValues({...values,name: e.target.value})}/>
                        <input type={'email'} placeholder={'Email'} onChange={(e)=>setValues({...values,email: e.target.value})}/>
                        <input type={'password'} placeholder={'Password'} onChange={(e)=>setValues({...values,password: e.target.value})}/>
                    </div>
                    <div className={'loginsign-buttons'}>
                        <button type={"submit"}>SignUp</button>
                    </div>
                    <img className={'carlogin-img'} src={carimg} alt={''}/>
                </form>
            </div>
        </div>
    )
}
