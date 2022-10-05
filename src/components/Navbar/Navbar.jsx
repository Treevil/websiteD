import * as React from 'react';
import PropTypes from 'prop-types';
import "./Navbar.scss"
import logo from '../../asset/loghi/mainLogo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {
    Box,
    Image,
    Link
} from "@chakra-ui/react";
import {useCallback, useState} from "react";
import {Transition, CSSTransition} from 'react-transition-group';
import ReactTransitionCollapse from 'react-transition-collapse';
import {useBreakpointValue} from '@chakra-ui/react'
import {useSpring, animated} from 'react-spring'
import {
    Link as LinkRouter,
} from "react-router-dom";

function Navbar(
    {
        items
    }
) {
    const [showSub, setShowSub] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [selectedSubnav, setSelectedSubnav] = useState('');

    const [showDetails, setShowDetails] = useState(false);


    const props = useSpring({to: {opacity: 1}, from: {opacity: 0}})

    const styles = useSpring({
            opacity: showDetails ? 1 : 0,
            display: showDetails ? 'block' : 'none',
        }
    )
    const styles2 = useSpring({
        opacity: !showDetails ? 1 : 0,
        display: !showDetails ? 'block' : 'none',
    });

    const mobileOnly = useBreakpointValue({
        base: 'flex',
        md: 'none'
    });

    const TabletUp = useBreakpointValue({
        base: 'none',
        md: 'block'
    });


    return (
        <>
            <Box
                className={'navbar'}
                position={'absolute'}
                top={0}
                left={0}
                w={'100%'}
                textAlign={'center'}
                zIndex={10}
                display={'flex'}
                justifyContent={'space-between'}
                flexDirection={useBreakpointValue({
                    base: 'row',
                    md: 'column'
                })}
            >
                <Link href={'/'}>
                    <Image
                        maxWidth={'10rem'}
                        margin={useBreakpointValue({
                            base: '.5rem',
                            md: '.5rem auto'
                        })}
                        src={logo}
                        alt="Divitech Logo"
                    />
                </Link>
                <Box
                    display={mobileOnly}
                    color={'brand.white'}
                    minWidth={'100px'}
                    justifyContent={'flex-end'}
                    paddingRight={'.5rem'}
                    alignItems={'center'}
                    cursor={'pointer'}
                >
                <span
                    className="material-symbols-outlined"
                    onClick={event => {
                        event.preventDefault();
                        setShowMobileMenu(!showMobileMenu);
                    }}
                >
                    {
                        showMobileMenu ? "close" : "menu"
                    }
                </span>
                </Box>
                <Box
                    display={TabletUp}
                    color={'brand.white'}
                >

                    <animated.div
                        style={styles2}
                    >
                        <ul
                            className={'mainList'}
                        >
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            as={LinkRouter}
                                            to={item.path ?? ''}
                                            onClick={
                                                !!item.children ?
                                                    event => {
                                                        event.preventDefault();
                                                        setSelectedSubnav(item.title);
                                                        setShowDetails(true);
                                                    }
                                                    :
                                                    null
                                            }
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </animated.div>

                    <animated.div
                        className={'mainList'}
                        style={styles}

                    >
                        <ul
                            className={'mainList'}
                        >
                            <li>
                                <span
                                    style={{
                                        marginRight: '.4rem',
                                        cursor: 'pointer',
                                    }}
                                    className="material-symbols-outlined"
                                    onClick={event => {
                                        event.preventDefault();
                                        setShowDetails(false);
                                        setSelectedSubnav('');
                                    }
                                }
                                >
                                    arrow_back
                                </span>
                            </li>
                            {
                                (selectedSubnav === '')
                                    ? <div/>
                                    : items
                                        .find(el => el.title === selectedSubnav)
                                        .children
                                        .map((item, index) => {
                                            console.log({index, item})
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        as={LinkRouter}
                                                        to={item.path ?? ''}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            )
                                        })
                            }
                        </ul>
                    </animated.div>
                </Box>

            </Box>
            <Box
                display={showMobileMenu ? mobileOnly : 'none'}
                className={'mobileNav'}
                position={'absolute'}
                top={50}
                left={0}
                w={'100%'}
                zIndex={10}
            >
                <ul className={'subList'}>
                    {
                        items.map((item, index) => (
                            <span  key={index}>
                                <li className={'sublistItem'} >
                                    <Link
                                        href={item.path ?? ''}
                                        display={'flex'}
                                        textDecoration={'none'}
                                        onClick={
                                            !!item.children ?
                                                event => {
                                                    event.preventDefault();
                                                    if (selectedSubnav === item.title) {
                                                        return setSelectedSubnav('');
                                                    }
                                                    return setSelectedSubnav(item.title);
                                                }
                                                :
                                                null
                                        }
                                    >
                                    <span>

                                    {item.title}
                                    </span>
                                        {
                                            !item.path &&
                                            <span className="material-symbols-outlined">
                                            arrow_drop_down
                                        </span>
                                        }
                                    </Link>
                                </li>
                                {
                                    selectedSubnav === item.title
                                    &&
                                    <>
                                        {
                                            item.children.map(
                                                (subItem, indexSubItem) => (
                                                    <Link
                                                        href={subItem.path}
                                                        key={`${index}-${indexSubItem}`}
                                                    >
                                                        <li
                                                            className={'sublistItem-child'}

                                                        >

                                                            <span>
                                                                {subItem.title}
                                                            </span>
                                                        </li>
                                                    </Link>
                                                )
                                            )
                                        }

                                    </>

                                }
                            </span>
                        ))
                    }
                </ul>
            </Box>
        </>
    )
}

Navbar.propTypes = {}

Navbar.defaultProps = {}

export default Navbar;
