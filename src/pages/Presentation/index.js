import PresentationGrid from '../../components/Presentation/PresentationGrid';
import './style.scss';
import Equipe from "../../components/Presentation/Equipe";
import InfiniteText from "../../components/Home/InfiniteText";
import Clip from "../../components/Presentation/Clip";
import transition from "../../transition";

const Presentation = () => {

    return (
        <div className='page-presentation'>
            <h2>Histoire de l'association</h2>
            <PresentationGrid/>
            <InfiniteText text={"les 10 ans de Jazz en Velay"}/>
            <Clip/>
            <h2>L'équipe</h2>
            <Equipe/>
        </div>
    );
}

export default transition(Presentation);