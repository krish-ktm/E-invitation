const Profile = () => {
    return (
        <ProfileCard
            name="bob"
            age={25}
            greeting={
                <div>
                    <strong> oajcnlvnk</strong>
                </div>
            }
        >

            <p>Hobbies</p>
            <button>Contact</button>
        </ProfileCard>
    )
}

export default Profile;

const ProfileCard = (props) => {
    return (
        <>
            <h2> {props.name} </h2>
            <p> {props.age} </p>
            <p>{ props.greeting }</p>
            <div> {props.children} </div>
        </>
    )
}