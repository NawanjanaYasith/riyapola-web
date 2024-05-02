import './Admin.css';
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Addvehicle from "../../components/addvehicle/Addvehicle.jsx";
import Listvehicle from "../../components/listvehicle/Listvehicle.jsx";
import RentRequest from "../../components/rentrequest/RentRequest.jsx";
import Messages from "../../components/messages/messages.jsx";
export  default  function Admin(){
    return(
        <div className={'admin'}>
            <Sidebar/>
            <Routes>
                <Route path={'/addvehicle'} element={<Addvehicle/>}/>
                <Route path={'/listvehicle'} element={<Listvehicle/>}/>
                <Route path={'/rentrequests'} element={<RentRequest/>}/>
                <Route path={'/messages'} element={<Messages/>}/>
                <Route path="*" element={<Listvehicle />} />
            </Routes>
        </div>
    )
}