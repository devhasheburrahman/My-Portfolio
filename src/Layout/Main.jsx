import React from 'react';
import LeftNavigation from '../Pages/NavigationBer/LeftNavigation';
import RightNavigation from '../Pages/NavigationBer/RightNavigation';
import Home from '../Pages/Home/Home';


const Main = () => {
    return (
        <div className='flex'>
            <div className=""> <LeftNavigation /></div>
            <div className="flex-grow"> <Home /> </div>
            <div className=""> <RightNavigation /> </div>

        </div>
    );
};

export default Main;