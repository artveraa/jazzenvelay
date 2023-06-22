import {useEffect, useState} from "react";
import createClient from "../../../client";
import './style.scss'

const Equipe = () => {

    const [equipe, setEquipe] = useState(null);

    console.log(equipe)

    useEffect(() => {
        createClient.fetch(`*[_type == "equipe"]{
            member,
            role,
            _createdAt,
            image{
                asset->{
                    _id,
                    url
                },
               
            }}|order(_createdAt asc)`).then((data) => setEquipe(data));
    }, []);

    return (
        <div className="equipe">
            {equipe && equipe.map((member, index) => (
                <div className="member" key={index}>
                    <p className="member-name">{member.member}</p>
                    <p className="member-role">{member.role}</p>
                </div>
            ))}
        </div>
    )

}

export default Equipe;