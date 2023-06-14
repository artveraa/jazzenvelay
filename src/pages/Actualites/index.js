import {Link} from 'react-router-dom';
import createClient from "../../client.js";
import {useEffect, useState} from "react";
import './style.scss';


const Actualites = () => {
    const [allPostsData, setAllPosts] = useState(null);


    useEffect(() => {
        createClient.fetch(`*[_type == "actualites"]{
                    titre,
                    slug,
                    contenu,
                    image{
                        asset->{
                            _id,
                            url
                        },
                        },
                         
                    }| order(publishedAt desc)`).then((data) => setAllPosts(data));
    }, []);

    return (
        <div>
            <h1>Actualites</h1>
            <section className={'actualites'}>
                {allPostsData && allPostsData.map((post, index) => (
                    <article key={index}>
                        <Link to={`/actualites/${post.slug.current}`}>
                            <div className={"inner"}>
                                {post.image && <img src={post.image.asset.url} alt={post.titre}/>}
                            <h2>{post.titre}</h2>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default Actualites;