import {useEffect, useRef, useState} from "react";
import './style.scss';
import createClient from "../../../client.js";
import {Link} from "react-router-dom";
import MultiGrid from "./MultiGrid";
import Podcast from "./Podcast";


const HomeBanner = () => {

    const [lastPost, setLastPost] = useState(null);
    const blurCircle = useRef(null);

    useEffect(() => {
        createClient.fetch(`*[_type == "actualites"]{
                    titre,
                    slug,
                    publishedAt,
                    _createdAt,
                    contenu,
                    image{
                        asset->{
                            _id,
                            url
                        },
                        },
                    }|order(_createdAt desc)[0...1]`).then((data) => setLastPost(data[0]));

        return () => {

        }
    }, []);


    return (
        <div className="home-banner" >
            <div className="blur-circle" ref={blurCircle}>
            </div>
            <div className={"home-banner__content"}>
                <div className={"last-news"}>
                    {lastPost &&
                        <>
                            <h2>
                                <Link to={`/actualites/${lastPost.slug.current}`}>
                                    {lastPost.titre}
                                </Link>
                            </h2>
                            {lastPost.image &&
                                <img src={lastPost.image.asset.url} alt={lastPost.titre}/>
                            }
                        </>
                    }
                </div>

                <div className={"podcast-festival"}>
                    <MultiGrid/>
                    <Podcast/>
                </div>
            </div>

        </div>
    )
        ;
}

export default HomeBanner;