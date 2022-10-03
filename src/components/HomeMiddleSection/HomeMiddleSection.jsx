import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue, Box, Heading, Link, Container,
} from '@chakra-ui/react';
import bgImage from '../../asset/heroImg/programmer.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faShield,
    faDiagramProject,
    faBusSimple,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import './HomeMiddleSection.scss'
import Paragraph from "../Typography/Paragraph";
import HeaderBlue from "../Typography/HeaderBlue";

function IconLink(
    {
        title,
        icon,
        path,
    }
) {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
        >
            <Box
                borderRadius='full'
                boxSize='100px'
                bg={'brand.white'}
                color={'brand.black'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <span
                    className="material-symbols-outlined"
                    style={{
                        fontSize: '4rem'
                    }}
                >
                    {icon}
                </span>
            </Box>
            <Box
                textAlign={'center'}
            >
                <HeaderBlue
                    size={'3xl'}
                    textProps={{
                        color: '#fff',
                        mb: 4,
                        mt: 6,
                    }}
                >
                    {title}
                </HeaderBlue>
                <Link
                    href={path}
                    className={'sectionExplore'}
                >
                    ESPLORA
                    <FontAwesomeIcon
                        style={{
                            marginLeft: '0.2rem'
                        }}
                        icon={faChevronRight}
                    />
                </Link>
            </Box>
        </Box>
    )
}


function HomeMiddleSection(
    {
        text,
        links,
    }
) {

    return (
        <Flex
            id={'banner'}
            w={'full'}
            minH={'700px'}
            backgroundImage={
                bgImage
            }
            backgroundRepeat={'no-repeat'}
            py={20}
            backgroundSize={'cover'}
            color={'brand.white'}
            backgroundPosition={'center center'}
            p={'0 4rem'}

        >
            <Container
                my={20}
                maxW='8xl'
                display={'flex'}
                flexDirection={
                    {
                        base: 'column',
                        md: 'row'
                    }
                }
            >
            <VStack
                w={'40%'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
            >
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Heading
                        fontFamily={"'Bebas Neue', cursive"}
                        textTransform={'uppercase'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={
                            useBreakpointValue(
                                {
                                    base: '6rem',
                                    md: '7xl'
                                }
                            )
                        }
                    >
                        {text.title}
                    </Heading>
                    <Paragraph
                        textProps={{
                            color: 'white',
                            fontSize: '1.1rem',
                            marginTop: "0 !important",
                        }}
                    >
                        {text.subtitle}
                    </Paragraph>

                </Stack>
            </VStack>
            <VStack
                w={'60%'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
            >
                <Stack
                    align={'flex-start'}
                    width={'full'}
                    justifyContent={'space-around'}
                    direction={'row'}
                    spacing={10}
                >
                    {
                        links.map( (el, index) =>(
                            <IconLink
                                key={index}
                                {...el}
                            />
                        ))
                    }
                </Stack>
            </VStack>
            </Container>
        </Flex>
    )
}

HomeMiddleSection.propTypes = {}

HomeMiddleSection.defaultProps = {}

export default HomeMiddleSection;
