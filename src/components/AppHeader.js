import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useAvailability from "../utils/useAvailability";

const AppHeader = () => {

    const [user, setUser] = useState('Login')
    const availability = useAvailability();

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
                    <li>
                        YOU {availability ? "🟢" : "🔴"}
                    </li>
                    <li> 
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/about"> About Us </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact Us </Link>
                    </li>
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