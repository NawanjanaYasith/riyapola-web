import './Footer.css'
import {Link} from "react-router-dom";
export default function Footer (){
    return(
        <div className={'footer'}>
            <div className={'main-div'}>
                <div className={'first-div'}>
                    <h4>Rent Car Service</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, distinctio, itaque reiciendis ab cupiditate harum ex quam veniam</p>
                </div>
                <div className={'second-div'}>
                    <h4>Quick Links</h4>
                    <ul className={'quick-links'}>
                        <Link to={'/'}> <li>Home</li></Link>
                        <Link to={'/cars'}> <li>Cars</li></Link>
                        <Link to={'/about'}> <li>About</li></Link>
                        <Link to={'/contact'}> <li>Contact</li></Link>
                    </ul>
                </div>
                <div className={'third-div'}>
                    <h4>Head Office</h4>
                    <ul>
                        <li>123 Galle, Imaduwa, Srr Lanka</li>
                        <li>Phone: +940922386151</li>
                        <li>Email: riyapola13@gmail.com</li>
                        <li>Office Time: 10am - 7pm</li>
                    </ul>
                </div>
                <div className={'fourth-div'}>
                    <h4>Newsletter</h4>
                    <p>Subscribe our newsletter</p>
                    <input placeholder={'   Email'} />
                </div>
            </div>
            <hr className="footer-line" />
            <div className="footer-lastText">
                Copyright 2024, Developed by Yasith Nawanjana. All rights reserved.
            </div>
        </div>

    )
}