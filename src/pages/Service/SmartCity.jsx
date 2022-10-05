import * as React from 'react';
import PagesHero from "../../components/PagesHero/PagesHero";
import HeroImg from "../../asset/heroImg/bus.png";
import ProductGrid from "../../components/ProductGrid";
import {
    smartCityContent
} from "../../config/content/SmartCity.content";
import {
    Box,
} from "@chakra-ui/react";
import ProductGridXL from "../../components/ProductGridXL";

function SmartCity() {



    return (
        <Box
            className={'smartcity-page'}
            background={{
                base: '#1A032A',
                md: '#fff'
            }}
            pb={2}
        >
            <PagesHero
                bgImage={HeroImg}
            />
            <Box
                display={{
                    base: 'block',
                    md: 'none'
                }}
            >
                {

                    smartCityContent.map(
                        (prod, index) =>
                            <ProductGridXL
                                key={index}
                                {...prod}
                            />
                    )
                }
            </Box>
            <Box
                display={{
                    base: 'none',
                    md: 'block'
                }}
            >
                {

                    smartCityContent.map(
                        (prod, index) =>
                            <ProductGrid
                                key={index}
                                {...prod}
                            />
                    )
                }
            </Box>
        </Box>
    )
}

SmartCity.propTypes = {}

SmartCity.defaultProps = {}

export default SmartCity;
