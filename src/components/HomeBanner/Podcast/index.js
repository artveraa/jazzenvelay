import './style.scss'
import {useEffect, useState} from "react";
import createClient from "../../../client.js";
const Podcast = () => {

    const [play, setPlay] = useState(false);
    const lastPodcast = new Audio('https://hearthis.app/fm43/38.18.05.23.les-couleurs-du-jazz./stream.mp3?s=riD&t=1684829813')
    const [lastPodcastInfos, setLastPodcastInfos] = useState(null);

    useEffect(() => {
        createClient.fetch(`*[_type == "homeBanner"]{
            podcastTitle,
            podcastDate,
            podcastLink,
            }`).then((data) => {
            setLastPodcastInfos(data[0]);
        });
    }, [lastPodcastInfos]);



    const handleClick = () => {
        setPlay(!play);
    }

    const handlePlay = () => {
        lastPodcast.play();
    }

    const handleStop = () => {
        lastPodcast.pause();
    }

    useEffect(() => {
        switch (play) {
            case true:
                handlePlay();
                break;
            case false:
                handleStop();
                break;
            default:
                break;
        }
    }, [play, handlePlay, handleStop]);



    return (
        <div className={"podcast-container"}>
            <div className={"podcast-player"}>
                <div className={play ? 'podcast-player__icon stop' : 'podcast-player__icon play'} onClick={handleClick}></div>
                <div className={"podcast-player__infos"}>
                    <div className={"podcast-player__title"}>{lastPodcastInfos ? lastPodcastInfos.podcastTitle : ''}</div>
                    <div className={"podcast-player__date"}>{lastPodcastInfos ? lastPodcastInfos.podcastDate : ''}</div>
                </div>
            </div>
        </div>
    )
}

export default Podcast;