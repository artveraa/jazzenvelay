import PresentationGrid from '../../components/Presentation/PresentationGrid';
import './style.scss';

const Presentation = () => {
    return (
        <div className='page-presentation'>
            <h2>Histoire de l'association</h2>
            <PresentationGrid />
        </div>
    );
}

export default Presentation;