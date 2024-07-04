import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => {
    return (
        <div className='max-w-screen-xl mx-auto '>
        <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;