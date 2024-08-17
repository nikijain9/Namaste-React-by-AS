import User from "./User"
import UserClass from "./UserClass";

const About = () => {

    const aboutData = {
        name: "Nikita Jain",
        occupation: "Software devloper",
        location: "Pune"
    }

    const {name, occupation, location} = aboutData;
    return (
        <div>
            <h1>Hello</h1>
            <h2>Welcome to About us page</h2>
            <User 
                component={"Function"} 
                name={name} 
                occupation={occupation} 
                location={location}
            />
            <UserClass 
                component={"Class"} 
                name={name}
                occupation={occupation} 
                location={location}                
            />
        </div>
    )
}

export default About;