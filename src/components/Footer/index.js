import './style.scss'
// import instagram from '../../assets/svg/instagram.svg'
// import facebook from '../../assets/svg/facebook.svg'
// import youtube from '../../assets/svg/youtube.svg'

const Footer = () => {
    return (
        <footer>
            <div className="top-part">
                <div className="get-in-touch">
                    <h2>Restons <br/> en contact</h2>
                </div>
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
                <div className="social instagram">
                    {/*<img src="" alt=""/>*/}
                </div>
                <div className="social facebook">
                </div>
                <div className="social youtube">
                </div>
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