import './style.scss';
import React from 'react';
import NavBar from "../NavBar";

class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <NavBar/>
                {this.props.children}
            </div>
        );
    }
}

export default Layout;