import './App.css'
import Navbar from "../components/Navbar/Navbar.jsx";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Cars from "../pages/Cars.jsx";
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import SignUp from "../pages/SignUp.jsx";
import CarDetails from "../components/CarDetails/CarDetails.jsx";

function App() {
  return (
   <div>
       <Navbar/>
       <Routes>
           <Route path={'/home'} element={<Home/>}/>
           <Route path={'/about'} element={<About/>}/>
           <Route path={'/cars'} element={<Cars/>}/>
           <Route path={'/contact'} element={<Contact/>}/>
           <Route path={'/login'} element={<Login/>}/>
           <Route path={'/signup'} element={<SignUp/>}/>
           <Route path="*" element={<Navigate to="/home"/>} />
           <Route path="/cars/:id" element={<CarDetails/>} />
       </Routes>
   </div>
  )
}
export default App
