
import "./style.scss"

const NavBar = () => {
    return (
        <div>
            <ul className={"menu-items"}>
                <li>
                    <a href={"/"}>Accueil</a>
                </li>
                <li>
                    <a href={"/presentation"}>Présentation</a>
                </li>
                <li>
                    <a href={"/medias"}>Médias</a>
                </li>
                <li>
                    <a href={"/actualites"}>Actualités</a>
                </li>
                <li>
                    <a href={"/festival"}>Festival</a>
                </li>
                <li>
                    <a href={"/contact"}>Contact</a>
                </li>

                {/*<Link to={"/"}>Accueil</Link>*/}
                {/*<Link to={"/presentation"}>Présentation</Link>*/}
                {/*<Link to={"/medias"}>Médias</Link>*/}
                {/*<Link to={"/actualites"}>Actualités</Link>*/}
                {/*<Link to={"/festival"}>Festival</Link>*/}
                {/*<Link to={"/contact"}>Contact</Link>*/}
            </ul>
        </div>
    )
}

export default NavBar