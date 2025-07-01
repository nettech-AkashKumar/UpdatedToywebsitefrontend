import React from 'react';
import Navbar from '../components/HomeComponents/Navbar/Navbar'
import Footer from '../components/HomeComponents/Footer/Footer'
import './layouts.css'


const PageLayout = ({ children, data }) => {
    return (
        <div className="layouts-screen-padding min-h-screen px-18 ">
            <header className="">
                <Navbar/>
            </header>
            <main >{children}</main>
            <Footer/>
        </div>
    );
};

export default PageLayout;
