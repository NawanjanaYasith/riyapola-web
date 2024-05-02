import './Hero.css';
import SliderThird from "../../assets/all-images/slider-img/SliderThird.jpg";
import {Link} from "react-router-dom";

export default function Hero(){
    return(
            <div className={'hero'}>
                <img className={'hero-img'} src={SliderThird} alt={''}/>
                <div className={'text-container'}>
                    <p>For Rent $70 Per Day</p>
                    <h2>Reserved Now and Get 50%</h2>
                    <Link to={'/cars'}>
                        <button className={'btn'} >Reserve now</button>
                    </Link>
                </div>
                </div>


    )
}