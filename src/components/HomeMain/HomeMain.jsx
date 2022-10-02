import * as React from 'react';
import PropTypes from 'prop-types';
import "./HomeMain.scss"
import HomeLogo from "../HomeLogo/HomeLogo";
import MainLogo from '../../asset/mainLogo.png'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function HomeMain(
    {}
) {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);


    return (
        <>
            <div className={'homeMain'}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{

                        fpsLimit: 60,
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: true,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 30,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "triangle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <img
                    src={MainLogo}
                    alt=""
                    style={{width: '400px'}}
                />
                <button>Okay</button>
                {/*}
                <div className={'textContainer'}>
                    <h1 className={'companyName'}>
                        Divitech
                    </h1>
                    <h2 className={'companyMotto'}>
                <span className={'humanText'}>
                    Human
                </span>
                        Side of technology
                    </h2>
                </div>
                <HomeLogo />
                {*/}
            </div>
            <svg width="500" height="80" viewBox="0 0 500 80" preserveAspectRatio="none">
                <defs>
                    <clipPath id="shape">
                        <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z" />
                    </clipPath>
                </defs>
                <rect x="0" y="0" width="500" height="80" fill="#1A032A" clip-path="url(#shape)" />
            </svg>
        </>
    )
}

HomeMain.propTypes = {}

HomeMain.defaultProps = {}

export default HomeMain;
