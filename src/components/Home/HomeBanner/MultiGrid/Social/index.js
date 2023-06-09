import './style.scss';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {useEffect, useState} from "react";


const Social = () => {

    const [color, setColor] = useState('');

    useEffect(() => {
        const socials = document.querySelectorAll('.social-link');

        socials.forEach((social) => {
            social.addEventListener('mouseenter', () => {
                if (social.classList.contains('facebook')) {
                    setColor(' facebook');
                } else if (social.classList.contains('instagram')) {
                    setColor(' instagram');
                } else if (social.classList.contains('youtube')) {
                    setColor(' youtube');
                } else {
                    setColor('');
                }
            });


            social.addEventListener('mouseleave', () => {
                setColor('');
            });
        });
    }, []);

    return (
        <div className={'social-card' + color}>
            <Link to={'facebook.com'} className={'social-link facebook'}><FontAwesomeIcon icon={faFacebook}/></Link>
            <Link to={'instagram.com'} className={'social-link instagram'}><FontAwesomeIcon icon={faInstagram}/></Link>
            <Link to={'youtube.com'} className={'social-link youtube'}><FontAwesomeIcon icon={faYoutube}/></Link>
        </div>
    )
}

export default Social;