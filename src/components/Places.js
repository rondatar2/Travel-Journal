
const Places = (props) => {
    return (
        <div className='places'>
            <img src={props.imageUrl} />
            <div>
                <div className='first'>
                    <i className="fa-solid fa-location-dot"></i>
                    <span className='title'>{props.location}</span>
                    <a className='link' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className='second'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Places