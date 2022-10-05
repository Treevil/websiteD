import * as React from 'react';
import HeroImg from '../../asset/heroImg/reverendo.png'
import PagesHero from "../../components/PagesHero/PagesHero";
import ProductGrid from "../../components/ProductGrid";
import {
    SecurityContent
} from "../../config/content/Security.content";
import {
    Box,
} from "@chakra-ui/react";
import ProductGridXL from "../../components/ProductGridXL";
function Security() {



    return (
        <Box
            className={'security-page'}
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

                    SecurityContent.map(
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

                    SecurityContent.map(
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

Security.propTypes = {}

Security.defaultProps = {}

export default Security;
