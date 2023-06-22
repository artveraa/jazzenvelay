import HomeBanner from "../../components/Home/HomeBanner";
import InfiniteText from "../../components/Home/InfiniteText";
import Presentation from "../../components/Home/Presentation";
import Events from "../../components/Home/Events";
import Album from "../../components/Home/Album";

const Accueil = () => {
    return (
        <div>
            <HomeBanner />
            <InfiniteText text="Jazz en Velay"/>
            <Presentation />
            <Album textAlbum="L'album des 10 ans" textDispo="est disponible" />
            <Events />
        </div>
    );
}

export default Accueil;