import './style.scss';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfiniteText = ({text}) => {
    const [hasRendered, setHasRendered] = useState(false)

    useEffect(() => {
        setHasRendered(true)
    }, [hasRendered])

    const marquee = useRef(null);
    const marqueeInner = useRef(null);


    useEffect(() => {

        if (hasRendered) {
            // gsap.set(marqueeInner.current, {x: 0})

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: marquee.current,
                    start: 'center 75%',
                    end: 'center 25%',
                    markers: true,
                    scrub: true,
                    onEnter: () => {
                        console.log('toto')
                    }
                }
            });

            tl.to(marqueeInner.current, {x: "-100px", duration: 1})

        }
    }, [hasRendered]);

    const translateText = () => {
        console.log('toto')
    }

    return (
        <div className='marquee' ref={marquee} onScroll={translateText}>
            <div className='marquee_inner' ref={marqueeInner}>
                <div className="marquee_text">
                    <p>{text}</p>
                    <p>{text}</p>
                    <p>{text}</p>
                    <p>{text}</p>
                </div>
                {/*<div className="marquee_img">*/}
                {/*    <img src={logoJev} alt="logo-jev"/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default InfiniteText;