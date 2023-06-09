import HomeBanner from "../../components/Home/HomeBanner";
import InfiniteText from "../../components/Home/InfiniteText";
import Presentation from "../../components/Home/Presentation";
import Agenda from "../../components/Home/Agenda";

const Accueil = () => {
    return (
        <div>
            <HomeBanner />
            <InfiniteText text="Jazz en Velay"/>
            <Presentation />
            <Agenda />
        </div>
    );
}

export default Accueil;