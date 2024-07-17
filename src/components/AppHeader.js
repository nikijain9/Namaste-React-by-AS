import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";

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