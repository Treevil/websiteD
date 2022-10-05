import * as React from 'react';
import PagesHero from "../../components/PagesHero/PagesHero";
import ProductGrid from "../../components/ProductGrid";
import HeroImg from "../../asset/heroImg/factory.png";
import {
    productLogistic
} from "../../config/content/Logistic.content";
import {
    Box,
} from "@chakra-ui/react";
import ProductGridXL from "../../components/ProductGridXL";

function Logistic(
    {}
) {



    return (
        <Box
            className={'logistic-page'}
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

                    productLogistic.map(
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

                    productLogistic.map(
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

Logistic.propTypes = {}

Logistic.defaultProps = {}

export default Logistic;
