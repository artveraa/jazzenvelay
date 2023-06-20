import './style.scss';
import image1 from '../../../assets/images/alberto-bigoni-4-DeS5a-hAM-unsplash.jpg';
import image2 from '../../../assets/images/chris-bair-A10y2Eq7OHY-unsplash.jpg';
import image3 from '../../../assets/images/dolo-iglesias-FjElUqGfbAw-unsplash.jpg';

const PresentationGrid = () => {
    return (
        <div className='presentation-grid'>
            <div className="presentation-grid-part-1">
                <div className="text-content first">
                    <p>
                        Après une présentation de l’association au Théâtre, le rendez-vous est pris le 19 janvier 2012 à
                        20h à La Mappemonde pour la première rencontre des musiciens de l’association.
                        <br/>
                        <br/>
                        Puis viens le temps du 1er boeuf, le 4 février 2012, toujours à La Map. Malgré la température
                        extérieure de – 15°C, la cave est pleine comme un oeuf. Tous les « jazzeux » du Puy, sont là,
                        pour voir cette nouvelle association de jazz. Ce n’est pas moins de douze musiciens qui vont
                        jouer ce soir-là pour cette première jam-session inoubliable !
                        <br/>
                        <br/>
                        Jeudi 1er mars, rebelote, des nouveaux musiciens se greffent a certains déjà présent lors de la
                        première jam. Encore une belle soirée… le jazz ponot est bien vivant !
                    </p>
                </div>

                <div className="image-container first">
                    <img src={image3} alt=""/>
                </div>

                <div className="text-content second">
                    <p>
                        Puis viens le temps du 1er boeuf, le 4 février 2012, toujours à La Map. Malgré la température
                        extérieure de – 15°C, la cave est pleine comme un oeuf. Tous les « jazzeux » du Puy, sont là,
                        pour voir cette nouvelle association de jazz. Ce n’est pas moins de douze musiciens qui vont
                        jouer ce soir-là pour cette première jam-session inoubliable !
                    </p>
                </div>

                <div className="image-container second">
                    <img src={image1} alt=""/>
                </div>
            </div>

            <div className="presentation-grid-part-2">
                <div className="image-container third">
                    <img src={image2} alt=""/>
                </div>

                <div className="text-content third">
                    <p>
                        Jeudi 1er mars, rebelote, des nouveaux musiciens se greffent a certains déjà présent lors de la
                        première jam. Encore une belle soirée… le jazz ponot est bien vivant ! Le 24 mars, annonçant le
                        printemps avec son formidable trio, le saxophoniste Gaël Horellou devient parrain de Jazz en
                        Velay.
                        <br/>
                        <br/>
                        Le premier Couvi’jazz a lieu au bar Le Goût du Monde le 31 mars, et réunis quelques
                        passionnés qui viennent partager, discuter autour du jazz. Puis le 5 avril, une nouvelle
                        jam-session, où cette fois-ci c’est au tour du saxophoniste professionnel Didier Valette de
                        venir tapper le boeuf avec ses potes ponots… Enfin, pour clore cette saison de jam-sessions,
                        Jazz en Velay invite le groupe « Atacama » pour offrir sa musique au fidèle public jazzy du
                        Puy. Les musiciens de Jazz en Velay finiront cette soirée par leur, désormais
                        traditionnelle, jam-session.
                        <br/>
                        <br/>
                        Jazz en Velay a tenu à finir ce semestre musical, le 8 juin, en rendant hommage à la
                        divine Marilyn par un concert : « Jazz pour Marilyn », qui a connu un vif succès au
                        Centre culturel de St-Germain-Laprade. Depuis 2012, Jazz en Velay organise un festival,
                        fin septembre début octobre : AUTOMNE JAZZ EN VELAY !
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PresentationGrid;