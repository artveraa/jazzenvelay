import './style.scss'
import album from '../../../assets/images/album.jpeg'
import spotify from '../../../assets/svg/spotify-162-svgrepo-com.svg'
import deezer from '../../../assets/svg/deezer-svgrepo-com.svg'
import applemusic from '../../../assets/svg/apple-music-svgrepo-com.svg'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);


const Album = ({textAlbum, textDispo}) => {

    const albumText = useRef(null);
    const dispoText = useRef(null);
    const albumContainer = useRef(null);

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: albumContainer.current,
                start: 'center bottom',
                end: 'center start',
                markers: true,
                scrub: true,
            },
        });

        tl.to(albumText.current, {y: "-200px", duration: 1})
            .to(dispoText.current, {y: "-200px", duration: 1}, '-=1')

        return () => {
            tl.kill();
        }
    });


    return (
        <div className="album-container" ref={albumContainer}>
            <div className="part-top">
                <h3 ref={albumText}>
                    <span>{textAlbum}</span>
                    <span>{textAlbum}</span>
                    <span>{textAlbum}</span>
                    <span>{textAlbum}</span>
                    <span>{textAlbum}</span>
                </h3>
            </div>
            <div className="content-popup">
                <div className="streaming-links">
                    <div className="spotify">
                        <div className="icon">
                            <img src={spotify} alt=""/>
                        </div>
                    </div>
                    <div className="deezer">
                        <div className="icon">
                            <img src={deezer} alt=""/>
                        </div>
                    </div>
                    <div className="apple-music">
                        <div className="icon">
                            <img src={applemusic} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="album-popup">
                <div className="album-pochette">
                    <img src={album} alt={'album'}/>
                </div>
            </div>
            <div className="part-bottom">
                <h3 ref={dispoText}>
                    <span>{textDispo}</span>
                    <span>{textDispo}</span>
                    <span>{textDispo}</span>
                    <span>{textDispo}</span>
                    <span>{textDispo}</span>
                </h3>
            </div>
        </div>
    );
}

export default Album;