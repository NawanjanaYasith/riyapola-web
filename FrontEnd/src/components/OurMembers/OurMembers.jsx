import ava1 from '../../assets/all-images/ava-1.jpg'
import ava2 from '../../assets/all-images/ava-2.jpg'
import ava3 from '../../assets/all-images/ava-3.jpg'
import ava4 from '../../assets/all-images/ava-4.jpg'
import './OurMembers.css';

export default function OurMembers(){
    return(
        <div className={'main-div-members'}>
            <h3>Experts</h3>
            <h1>Our Members</h1>
            <div className={'second-main-div'}>
                <div className={'div-img'}>
                    <img style={{width:261,height:240}} src={ava1} alt={''}/>
                    <div className={'text-divs'}>
                        <h2>Roven Karunathilak</h2>
                    </div>
                    <div className={'text-divs'}>
                        <h4>5 years of experience</h4>
                    </div>
                </div>
                <div className={'div-img'}>
                    <img  style={{width:261,height:240}} src={ava2} alt={''}/>
                    <div className={'text-divs'}>
                        <h2>Mitchel Madanayaka</h2>
                    </div>
                    <div className={'text-divs'}>
                        <h4>5 years of experience</h4>
                    </div>
                </div>
                <div className={'div-img'}>
                    <img  style={{width:261,height:240}} src={ava3} alt={''}/>
                    <div className={'text-divs'}>
                        <h2>Kamil Jayawardana</h2>
                    </div>
                    <div className={'text-divs'}>
                        <h4>5 years of experience</h4>
                    </div>
                </div>
                <div className={'div-img'}>
                    <img  style={{width:261,height:240}} src={ava4} alt={''}/>
                    <div className={'text-divs'}>
                        <h2>Pavan Mendis</h2>
                    </div>
                    <div className={'text-divs'}>
                        <h4>5 years of experience</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}