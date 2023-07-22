import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import LeftNavigation from "../Pages/NavigationBer/LeftNavigation";
import RightNavigation from "../Pages/NavigationBer/RightNavigation";
import Header from "../Pages/Header/Header";

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
                path: '/Header',
                element: <Header/>
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