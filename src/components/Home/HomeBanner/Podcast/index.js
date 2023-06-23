import './style.scss'
import {useEffect, useState} from "react";
import createClient from "../../../../client.js";

const Podcast = () => {
    const [lastPodcastInfos, setLastPodcastInfos] = useState(null);

    useEffect(() => {

        createClient.fetch(`*[_type == "homeBanner"]{
            podcastTitle,
            podcastDate,
            }`).then((data) => {
            setLastPodcastInfos(data[0]);
        });

    }, []);

    return (
        <div className={"podcast-container"}>
            <div className={"podcast-player"}>

            </div>
        </div>
    )
}

export default Podcast;