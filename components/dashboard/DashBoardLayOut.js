import React from 'react';
import SideBar from './SideBar';

const DashBoardLayOut = ({ children }) => {
    return (
        <div className='flex'>
            <div>
                <SideBar />
            </div>
            <div  className='w-full px-10 my-10'>
                {children}
            </div>
        </div>
    );
};

export default DashBoardLayOut;