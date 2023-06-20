import './style.scss'
import {useEffect, useState} from "react";
import createClient from "../../../client";
import {Link} from "react-router-dom";

const Events = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        createClient.fetch(`
        *[_type == "actualites" &&
         *[_type == "categories" &&
            titre == "Événement"][0]._id in categories[]._ref] {
            titre,
            slug,
            categories,
            date,
            image{
                asset->{
                    _id,
                    url
                },
            },
            location,
            _createdAt
    }|order(_createdAt desc) [0...4]`).then((data) => {
            data.forEach((event) => {
                if (event.date) {
                    const date = new Date(Date.parse(event.date));
                    event.date = {
                        day: date.toLocaleDateString('fr-fr', {day: '2-digit'}),
                        month: date.toLocaleDateString('fr-fr', {month: '2-digit'})
                    }
                }
            })
            setEvents(data)
        })
    }, [])


    return (
        <section className={'events'}>
            <h2 className={'events-title'}>Les prochains événements</h2>
            <div className='grid-events'>
                {events && events.map((event, key) => (
                    <Link to={`/actualites/${event.slug.current}`} className={'event'} key={key}>
                        {event.date &&
                            <div className="date">
                                <span>{event.date ? event.date.day : ''}</span>
                                <span className={'separator'}></span>
                                <span>{event.date ? event.date.month : ''}</span>
                            </div>
                        }
                        <img src={event?.image?.asset?.url} alt={event.titre}/>
                        <h3>
                            {event?.titre}
                            <span className={'location'}>
                              <span></span> {event?.location}
                            </span>
                        </h3>
                    </Link>
                ))}
            </div>
            <Link to={'/actualites'} className={'large-btn'}>Voir tous les événements</Link>
        </section>
    )
}

export default Events