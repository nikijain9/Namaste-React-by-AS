import React, {lazy, Suspense} from "react"
import ReactDOM, { render } from "react-dom/client"
import AppHeader from "./components/AppHeader"
import Body from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"

const AppLayout = () => {
    return (    
        <div className="app">
            <AppHeader />
            <Outlet />
        </div>
    )
}

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                )
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/city/pune/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)