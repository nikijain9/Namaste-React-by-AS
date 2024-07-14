import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Body from "./Body";

const AppHeader = () => {

    const [user, setUser] = useState('Login')

    return (
        <div id="NavBar">
            <div id="AppLogo">
                <img 
                    id="logoImg" 
                    src={LOGO_URL}
                />
            </div>
            <div id="NavItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                    className="login" 
                    onClick={ () => { 
                        user === 'Login' 
                        ? setUser('Logout') 
                        : setUser('Login')
                    }}
                    >
                        {user}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default AppHeader;