import * as React from 'react';
import {menuElements} from "../Content";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}



function Root(
    {}
) {
    return (
        <>
            <ScrollToTop />
            <Navbar items={menuElements}/>
            <Outlet />
            <Footer/>
        </>
    )
}

Root.propTypes = {}

Root.defaultProps = {}

export default Root;
