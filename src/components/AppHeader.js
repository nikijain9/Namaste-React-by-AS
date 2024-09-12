import { useState } from "react";
import {LOGO_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useAvailability from "../utils/useAvailability";

const AppHeader = () => {

    const [user, setUser] = useState('Login')
    const availability = useAvailability();

    return (
        <div id="NavBar" className="flex justify-between bg-blue-100  shadow-lg">
            <div id="AppLogo" className="p-[10px]">
                <img 
                    id="logoImg"
                    className="w-[100px]" 
                    src={LOGO_URL}
                />
            </div>  
            <div id="NavItems" className="content-center">
                <ul className="flex list-none text-xl">
                    <li className="m-[10px] p-5 cursor-pointer">
                        YOU {availability ? "🟢" : "🔴"}
                    </li>
                    <li className="m-[10px] p-5 cursor-pointer"> 
                        <Link to="/"> Home </Link>
                    </li>
                    <li className="m-[10px] p-5 cursor-pointer">
                        <Link to="/about"> About Us </Link>
                    </li>
                    <li className="m-[10px] p-5 cursor-pointer">
                        <Link to="/contact"> Contact Us </Link>
                    </li>
                    <li className="m-[10px] p-5 cursor-pointer">Cart</li>
                    <button 
                    className="m-[25px] px-[10px] py-1 h-[30px] cursor-pointer font-bold" 
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