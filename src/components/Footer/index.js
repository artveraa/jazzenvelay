import './style.scss'
import {faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <footer>
            <div className="top-part">
                <a href={"/contact"} className="get-in-touch">
                    <h2>Restons <FontAwesomeIcon icon={faEnvelope} /> <br/> en contact</h2>
                </a>
                <ul className="footer-menu">
                    <li>
                        <a href="/presentation">Présentation</a>
                    </li>
                    <li>
                        <a href="/medias">Médias</a>
                    </li>
                    <li>
                        <a href="/actualites">Actualités</a>
                    </li>
                    <li>
                        <a href="/festival">Festival</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="socials-part">
                <a href={"https://www.instagram.com/jazzenvelay/?hl=fr"} className="social instagram">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://www.facebook.com/jazzenvelay43/?locale=fr_FR" className="social facebook">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="https://www.youtube.com/channel/UCl71xr9U8gRhTw8FAo6rg8A" className="social youtube">
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
            </div>
            <div className="bottom-part">
                <div className="copyrights">
                    <p>© 2023 Jazz en Velay</p>
                </div>

                <div className="signature">
                    <p>Design & développement par Arthur Vera</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;