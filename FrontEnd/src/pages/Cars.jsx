import DriveImage from "../components/DriveImage/DriveImage.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Popular from "../assets/data/popular.js";
import CarCollection from "../components/CarCollection/CarCollection.jsx";

export default function Cars(){
    return(
        <div>
            <DriveImage/>
            <CarCollection/>
            <Footer/>

        </div>
    )
}