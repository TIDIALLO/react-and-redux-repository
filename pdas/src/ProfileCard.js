function ProfileCard({title, handle, image, description}) {
    // const title = props.title   
    // const handle = props.handle
    //equivaut à
    // const {title, handle} = props
    return (

        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img alt="pda logo" src={image} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4"> {title}</p>
                    <p className="subtitle is-6"> {handle}</p>
                </div>
            </div>
            <div className="content">{description}</div>
        </div>

        
    );
}
export default ProfileCard;