import './AboutContent.css';
import bmwoffer from '../../assets/all-images/cars-img/bmw-offer.png'
import driveimg from '../../assets/all-images/cars-img/nissan-offer.png';
export default function AboutContent(){
    return(
        <div className={'main-about-container'}>
            <div className={'left-right-container-first'}>
                <div className={'left-about'}>
                    <h2>About Us</h2>
                    <h1>Welcome to Riyapola Car Rent Service</h1>
                    <p className={'first-p'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis esse accusantium dignissimos labore laborum. Veniam, corporis mollitia temporibus, in quaerat vero deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit neque sit ad temporibus quam similique dolor ipsam praesentium sunt</p>
                    <p className={'second-p'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis esse accusantium dignissimos labore laborum. Veniam, corporis mollitia temporibus, in quaerat vero deleniti amet dolorem repudiandae, pariatur nam dolore! Imped</p>
                </div>
                <div className={'right-about'}>
                    <img style={{width:590}} src={bmwoffer} alt={''}/>
                </div>
            </div>

            <div className={'left-right-container-second'}>
                <div className={'left-about'}>
                    <img style={{width:570}} src={driveimg} alt={''}/>
                </div>
                <div className={'right-about'}>
                    <h1>We Are Committed To Provide Safe Ride Solutions</h1>
                    <p className={'first-p'}>Lorem ipsum dolor sit amet .Voluptatum blanditiis esse accusantium dignmos labore laborum. Veniam, corporis mollitia tempus, in quaerat vero deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit neque sit ad temporibus quam similique dolor ipsam praesentium sunt</p>
                    <p className={'second-p'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum blanditiis esse accusantium dignissimos labore laborum. Veniam, corporis mollitia temporibus, in quaerat vero deleniti amet dolorem repudiandae, pariatur nam dolore! Imped</p>
                </div>
            </div>
        </div>


    )
}