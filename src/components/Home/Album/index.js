import './style.scss'
import album from '../../../assets/images/album.jpeg'
import spotify from '../../../assets/svg/spotify-162-svgrepo-com.svg'
import deezer from '../../../assets/svg/deezer-svgrepo-com.svg'
import applemusic from '../../../assets/svg/apple-music-svgrepo-com.svg'


const Album = () => {
    return (
        <div className="album-container">
            <div className="part-top"></div>
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
                <div className="fnac">
                    <div className="icon">

                    </div>
                    <div className="brand-name">Fnac</div>
                </div>
                <div className="cultura">
                    <div className="icon">

                    </div>
                    <div className="brand-name">Cultura</div>
                </div>
            </div>
            <div className="album-popup">
                <div className="album-pochette">
                    <img src={album} alt={'album'}/>
                </div>
            </div>
            <div className="part-bottom"></div>
        </div>
    );
}

export default Album;