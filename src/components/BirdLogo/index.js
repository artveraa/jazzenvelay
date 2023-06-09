import yellowBird from '../../assets/svg/yellow-bird.svg';
import './style.scss';

const BirdLogo = () => {
    return (
        <div className="bird-logo">
            <img src={yellowBird} alt="bird logo"/>
        </div>
    );
}

export default BirdLogo;