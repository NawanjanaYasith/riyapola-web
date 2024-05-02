import {Button, TextField} from "@mui/material";
import {Card, NavLink} from "reactstrap";
import './LoginForm.css';
import carimg from '../../assets/all-images/slider-img/sliderSecond.jpg'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import instance from "../Services/AxiosOrders.jsx";
export default function LoginForm(){
    const[values,setValues]=useState({
        email:'',
        password:''
    })
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        instance.post(`http://localhost:3000/login`,values)
            .then(function (response) {
                if(response.data.Status==="Sucess"){
                    // console.log(response)
                    console.log(response.data.token)
                    localStorage.setItem('login',response.data.token)//set token to localStorage and 'login' is key
                    window.location.replace('/home');
                }else{
                    alert(response.data.Error)
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("Server Error...")
            })
    }
    return(
            <div className={"logins"}>
                <div className={'login-container'}>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className={'login-fields'}>
                            <input type={'email'} placeholder={'Email'} onChange={(e)=>setValues({...values,email: e.target.value})}/>
                            <input type={'password'} placeholder={'Password'} onChange={(e)=>setValues({...values,password: e.target.value})}/>
                        </div>
                        <div className={'loginsign-buttons'}>
                            <button>Login</button>
                            <Link to={'/SignUp'}><button  style={{width:475}}>SignUp</button></Link>
                        </div>
                        <img className={'carlogin-img'} src={carimg} alt={''}/>
                    </form>
                </div>
            </div>
    )
}