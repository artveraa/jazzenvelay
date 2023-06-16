import './style.scss';
import React, {useRef} from 'react';
import NavBar from "../NavBar";
import BirdLogo from "../BirdLogo";


class Layout extends React.Component {
    render() {

        return (
            <div className="layout">
                <div className="blur-circle"></div>
                <BirdLogo/>
                <NavBar/>
                {this.props.children}
                <div className="blur-circle"></div>
            </div>
        );
    }
}

export default Layout;