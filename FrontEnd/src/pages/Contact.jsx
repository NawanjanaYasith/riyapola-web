import DriveImage from "../components/DriveImage/DriveImage.jsx";
import ContactLeftForm from "../components/ContactLeftForm/ContactLeftForm.jsx";
import ContactRight from "../components/ContactRight/ContactRight.jsx";
import Footer from "../components/Footer/Footer.jsx";

export  default function Contact(){
    return(
        <div>
            <DriveImage/>
            <div className={'left-right-forms'} style={{display:"flex",justifyContent:"center",gap:60}}>
                <ContactLeftForm/>
                <ContactRight/>
            </div>
            <Footer/>
        </div>
    )
}