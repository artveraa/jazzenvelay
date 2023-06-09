import './style.scss';
import React from 'react';
import NavBar from "../NavBar";
import BirdLogo from "../BirdLogo";

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <BirdLogo/>
                <NavBar/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;