import './style.scss';
import React, {useEffect, useRef} from 'react';
import NavBar from "../NavBar";
import BirdLogo from "../BirdLogo";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollSmoother);


const Layout = (props) => {

    const layoutRef = useRef(null);

    useEffect(() => {

        const smoother = new ScrollSmoother({
            // DOM element to apply smooth scroll
            element: layoutRef.current,
            // scroll speed
            speed: 0.1,
            // scroll speed when shift key is pressed
            fastSpeed: 0.5,
            // scroll speed when ctrl key is pressed
            slowSpeed: 0.01,
        });

        return () => {
            smoother.kill();
        };
    }, []);


    return (
        <div id="smooth-wrapper">
            <div id="smooth-content" >
                <div className="layout" ref={layoutRef}>
                    <div className="blur-circle"></div>
                    <BirdLogo/>
                    <NavBar/>
                    {props.children}
                    <div className="blur-circle"></div>
                </div>
            </div>
        </div>
    );
};

export default Layout;