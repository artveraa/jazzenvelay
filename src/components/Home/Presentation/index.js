import './style.scss'
import "swiper/css";
import 'swiper/css/effect-fade';
import logoJev from '../../../assets/svg/logo-jev.svg';
import emptyLogo from '../../../assets/svg/empty-logo.svg';
import blackBird from '../../../assets/svg/black-bird.svg';
import img1 from '../../../assets/images/alberto-bigoni-4-DeS5a-hAM-unsplash.jpg';
import img2 from '../../../assets/images/chris-bair-A10y2Eq7OHY-unsplash.jpg';
import img3 from '../../../assets/images/dolo-iglesias-FjElUqGfbAw-unsplash.jpg';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade} from 'swiper';


const Presentation = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className={'container'}>
            <div className="left-part">
                <div className="left-part__icon">
                    <div className="rotate-logo">
                        <img src={blackBird} alt="oiseau" className="bird"/>
                        <img src={emptyLogo} alt="logo-jev" className="logo"/>
                    </div>
                </div>
                <div className="left-part__empty">
                </div>
                <Link to={'/presentation'} className="left-part__cta">
                    <p className="left-part__cta__text">
                        Découvrez l'association
                    </p>
                </Link>
                <div className="left-part__content">
                    <p className={"highlight"}>
                        "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
                    </p>
                    <p className={"author"}>
                        - John Doe
                    </p>
                </div>
            </div>

            <div className="right-part">
                <>
                    <Swiper
                        className="mySwiper"
                        modules={[EffectFade]}
                        effect={"fade"}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        loop={true}
                    >
                        <SwiperSlide>
                            <img src={img1} alt="img1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="img2"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="img3"/>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    )
}

export default Presentation;