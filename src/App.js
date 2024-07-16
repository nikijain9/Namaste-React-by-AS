import React from "react"
import ReactDOM, { render } from "react-dom/client"
import AppHeader from "./components/AppHeader"
import Body from "./components/Body"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"


const AppLayout = () => {
    return (    
        <div className="app">
            <AppHeader />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)