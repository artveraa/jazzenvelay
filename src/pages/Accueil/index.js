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
            <Events />
            <Album />
        </div>
    );
}

export default Accueil;