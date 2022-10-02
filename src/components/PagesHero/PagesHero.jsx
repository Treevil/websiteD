import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Flex,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Image,
    createIcon,
} from '@chakra-ui/react';
import bgImage from "../../asset/immagini/programmatore.jpg";
function PagesHero(
    {
        bgImage,
    }
) {
    return (
        <Flex
            w={'full'}
            h={'68vh'}
            backgroundImage={
                bgImage
            }
            py={20}
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            position={'relative'}
        >
            <div className="elementor-shape elementor-shape-bottom" data-negative="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill"
                          d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z" />
                </svg>
            </div>
        </Flex>
    )
}

PagesHero.propTypes = {}

PagesHero.defaultProps = {}

export default PagesHero;
