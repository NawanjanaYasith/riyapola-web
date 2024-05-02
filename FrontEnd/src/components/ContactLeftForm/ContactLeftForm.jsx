import './ContactLeftForm.css';
import {Button} from "@mui/material";
import {useState} from "react";
import instance from "../Services/AxiosOrders.jsx";
export default function ContactLeftForm(){
    const[values,setValues]=useState({
        customer_name:'',
        customer_email:'',
        customer_message:''
    })
    const[errors,setErrors]=useState({})
    const handleSubmit=(e)=> {
        e.preventDefault();
        const validationErrors = {};
        if (!values.customer_name.trim()) {
            validationErrors.customer_name = "customer name is required"
        }
        if (!values.customer_email.trim()) {
            validationErrors.customer_email = "customer email is required"
        }
        if (!values.customer_message.trim()) {
            validationErrors.customer_message = "customer message is required"
        }
            setErrors(validationErrors);
            if(localStorage.getItem('login')){
                if(Object.keys(validationErrors).length ===0){
                    instance.post(`/sendmessage`,values)
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
        return (
            <div className={'left-form'}>
                <form onSubmit={handleSubmit}>
                    <ul>
                        <li>Get In Touch</li>
                        <li><input className={'name-textfield'} placeholder={'Your name'} onChange={(e) => setValues({...values, customer_name: e.target.value})}/></li>
                        {errors.customer_name && <span>{errors.customer_name}</span>}
                        <li><input className={'email-textfield'} placeholder={'Email'} onChange={(e) => setValues({...values, customer_email: e.target.value})}/></li>
                        {errors.customer_email && <span>{errors.customer_email}</span>}
                        <li><input className={'message-textfield'} placeholder={'Message'} onChange={(e) => setValues({...values, customer_message: e.target.value})}/></li>
                        {errors.customer_message && <span>{errors.customer_message}</span>}
                        <li><Button type={'submit'}>Send Message</Button></li>
                    </ul>
                </form>
            </div>
        )
    }
