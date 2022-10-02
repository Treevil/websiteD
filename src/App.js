import {ChakraProvider} from '@chakra-ui/react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider, useLocation,
} from "react-router-dom";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import logo from './logo.svg';

/*******
 * Global CSS *
 *******/
import './globals/_fonts.scss'
import './App.css';
import './styles/main.scss';
import {theme} from "./styles/theme";
import 'material-symbols';
import {
    menuElements
} from "./Content";

/*********
 * PAGES *
 ********/
import Home from "./pages/Home";
import About from "./pages/About/About";
import About2 from "./pages/About/About2"
import Logistic from "./pages/Service/Logistic";
import Security from "./pages/Service/Security";
import SmartCity from "./pages/Service/SmartCity";
import Form from "./pages/Contact/Form";
import WorkWithUs from "./pages/Contact/WorkWithUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Page404/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/about2",
        element: <About2 />
    },
    {
        path: "/Security",
        element: <Security/>
    },
    {
        path: "/SmartCity",
        element: <SmartCity/>
    },
    {
        path: "/logistic",
        element: <Logistic/>
    },
    {
        path: "/Form",
        element: <Form/>
    },
    {
        path: "/WorkWithUs",
        element: <WorkWithUs/>
    },
]);



function App() {

    return (
        <div className="App">
            <ChakraProvider theme={theme}>
                <Navbar items={menuElements}/>
                    <RouterProvider router={router}/>
                <Footer/>
            </ChakraProvider>
        </div>
    );
}

export default App;
