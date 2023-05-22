import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import createClient from "../../client.js";
import {PortableText} from "@portabletext/react";

const Single = () => {
    const {slug} = useParams();
    const [single, setSingle] = useState([]);
    console.log(single)

    useEffect(() => {
        createClient.fetch(`*[slug.current == "${slug}"]{
            titre,
            image{
                asset->{
                    _id,
                    url
                },
            },
            contenu,
        } | order(publishedAt desc)`).then((data) => setSingle(data[0]));
    }, []);

    return (
        <div>
            <h1>{single.titre}</h1>
            <PortableText value={single.contenu}/>


        </div>
    )
}

export default Single;