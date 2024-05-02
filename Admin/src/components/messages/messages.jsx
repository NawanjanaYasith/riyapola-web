import './messages.css';
import deleteicon from "../../assets/bin.png";
import {useEffect, useState} from "react";
import axios from "axios";
export default function Messages(){
    const [allMessages, setAllMessages] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/getmessages')
            .then(function (response) {
                console.log(response);
                setAllMessages(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, []);

    const removeMessages=(id)=>{
        console.log("ID:", id); // Add this line to check the value of id

        axios.delete(`http://localhost:3000/removemesssages/${id}`,)
            .then(function (response) {
                setAllMessages((prevData) => prevData.filter( requests=> requests.id !== id));
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return(
        <div className={'message-requests'}>
            <h1>Customer Messages</h1>
            <div className={'list-messages-format-main'}>
                <p></p>
                <p>Customer Name</p>
                <p>Customer Email</p>
                <p>Customer Messages</p>
                <p>Remove Messages</p>
            </div>
            <div className={'list-messages'}>
                <hr/>
                {allMessages.map((request,index)=>{
                    return<>
                        <div key={index} className={'list-message-data-format-main list-message-format'}>
                            <p></p>
                            <p >{request.name}</p>
                            <p>{request.email}</p>
                            <p>{request.message}</p>
                            <img src={deleteicon} alt={''} className={'delete-icon'} onClick={() => { removeMessages(request.id) }} />
                        </div>
                        <hr/>
                    </>
                })}
            </div>

        </div>
    )
}