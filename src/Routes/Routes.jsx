import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LeftNavigation from "../Pages/NavigationBer/LeftNavigation";
import RightNavigation from "../Pages/NavigationBer/RightNavigation";
import Header from "../Pages/Header/Header";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Education from "../Pages/Education/Education";
import Recommendations from "../Pages/recommendations/Recommendations";
import PricePlans from "../Pages/PricePlans/PricePlans";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/header',
                element: <Header />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/service',
                element: <Services />,
            },
            {
                path: '/education',
                element: <Education />
            },
            {
                path: '/PricePlans',
                element: <PricePlans />
            },
            {
                path: '/recommendations',
                element: <Recommendations />
            },

            {
                path: '/leftNavigation',
                element: <LeftNavigation />,
            },
            {
                path: '/rightNavigation',
                element: <RightNavigation />
            },
        ]
    },
]);

export default router;