import { useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const {component, name, occupation, location} = props;

    return (
        <div className="user-info border-3 border-black px-[10px] py-[5px] w-1/2 mb-[10px] rounded-lg">
            <h1>Component : Namaste React  {component} </h1>
            <h2>Creator: {name} </h2>
            <h2>Occupation: {occupation} </h2>
            <h2>Location: {location} </h2>
            <h3>Count: {count} </h3>
            <button onClick={() => {
                setCount(count + 1)
            }}> +
            </button>
        </div>
    )
}

export default User;