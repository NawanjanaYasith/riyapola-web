import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Cars from "../pages/Cars.jsx";
import CarDetails from "../pages/CarDetails.jsx";
import Blog from "../pages/Blog.jsx";
import BlogDetails from "../pages/BlogDetails.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Contact from "../pages/Contact.jsx";

const Routers =()=>{
    return(
        <Routes>
            <Route path={"/"} element={<Navigate to={'/home'}/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/cars"} element={<Cars/>}/>
            <Route path={"/cars/:slug"} element={<CarDetails/>}/>
            <Route path={"/blogs/:slug"} element={<BlogDetails/>}/>
            <Route path={"/blogs"} element={<Blog/>}/>
            <Route path={"*"} element={<Contact/>}/>
        </Routes>
    )
}

export default Routers