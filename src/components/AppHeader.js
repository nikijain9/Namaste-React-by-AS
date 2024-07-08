import {LOGO_URL} from "../utils/constants";

const AppHeader = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default AppHeader;