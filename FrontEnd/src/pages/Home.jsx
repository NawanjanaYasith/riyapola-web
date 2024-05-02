import Hero from "../components/Hero/Hero.jsx";
import Popular from "../components/Popular/Popular.jsx";
import RentalForm from "../components/RentalForm/RentalForm.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home (){
    return(
        <div>
            <Hero/>
            <RentalForm/>
            <Popular/>
            <Footer/>
        </div>
    )
}