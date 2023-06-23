import './style.scss';
import logo from '../../assets/svg/black-bird.svg';

const Loader = () => {
    return (
        <div className="loader">
            <div className="img-container">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    );
}

export default Loader;