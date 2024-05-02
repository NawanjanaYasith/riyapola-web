import DriveImage from "../components/DriveImage/DriveImage.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AboutContent from "../components/AboutContent/AboutContent.jsx";
import OurMembers from "../components/OurMembers/OurMembers.jsx";

export default function About(){
    return(
        <div>
            <DriveImage/>
            <AboutContent/>
            <OurMembers/>
            <Footer/>
        </div>
    )
}