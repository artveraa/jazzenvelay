import './style.scss'
import {Link} from "react-router-dom";
import rightArrow from '../../../../../assets/svg/right-arrow.svg'
import {useEffect, useRef} from "react";

const Festival = () => {

    return (
        <Link to={'/festival'} className={'festival-card'}>
            <div className="festival-card__content">
                <div className="festival-card__content__date">
                    <p className="edition">Édition 2023</p>
                    <div className="duration">
                        <p>21|09</p>
                        <div className="arrowContainer">
                            <img src={rightArrow} alt=""/>
                        </div>
                        <p>09|10</p>
                    </div>
                </div>

                <h2>Automne <br/> Jazz en Velay</h2>

            </div>
        </Link>

    )
}

export default Festival;