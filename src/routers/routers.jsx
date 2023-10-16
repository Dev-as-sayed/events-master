import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Registar from "../Pages/Registar/Registar";
import Login from "../Pages/Login/Login";
import ServiceDeatles from "../Pages/Home/Service/ServiceDeatles/ServiceDeatles";
import Events from "../Pages/Events/Events";
import Team from "../Pages/Home/Teams/Team/Team";
import EventDetails from "../Pages/Events/Event/EventDetails/EventDetails";
import Bookin from "../Pages/Events/Bookin/Bookin";
import PrivateRout from "./PrivateRout";

const routers = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/serviceDeatles/:id',
                element: <ServiceDeatles></ServiceDeatles>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/teams/:id',
                element: <Team></Team>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/event',
                element: <Events></Events>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/eventDetail/:id',
                element: <EventDetails></EventDetails>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/booking',
                element: <PrivateRout><Bookin></Bookin></PrivateRout>
            },
            {
                path: '/registar',
                element: <Registar></Registar>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default routers;