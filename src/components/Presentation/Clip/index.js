import './style.scss'

const Clip = () => {
    return (
        <div className="clip">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Ue62_FY5agE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    );
}

export default Clip;