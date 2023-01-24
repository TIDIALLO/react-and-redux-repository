function ProfileCard(title, handle) {
    // const title = props.title   
    // const handle = props.handle
    //equivaut à
    // const {title, handle} = props
    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}
export default ProfileCard;