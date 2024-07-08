import React from "react"
import ReactDOM, { render } from "react-dom/client"
import AppHeader from "./components/AppHeader"
import Body from "./components/Body"


const AppLayout = () => {
    return (    
        <div className="app">
            <AppHeader />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)