import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Container, Heading, Image, Link, Stack, Tooltip,
    VStack,
} from "@chakra-ui/react";
import SubtitleProduct from "./Typography/SubtitleProduct";
import HeaderBlue from "./Typography/HeaderBlue";
import Paragraph from "./Typography/Paragraph";
import TextButton from "./Typography/TextButton";
import {Link as LinkRouter} from "react-router-dom";

function ProductGridXL(
    {
        name,
        subtitle,
        paragraph1,
        paragraph2,
        img,
        clients,
        pdfBrochure,
        moreInfoLink,
        maxWidthImg = '100%',
        alternativeTitle,
    }
) {
    return (
        <Container
            maxW={'7xl'}
            py={12}
            px={12}
            background={'#fff'}
            m={'2rem auto'}
        >
            <VStack spacing={4}>
                <SubtitleProduct>
                    {subtitle}
                </SubtitleProduct>
                <HeaderBlue
                    textProps={{mt: "0 !important"}}
                    size={'5rem'}
                >
                    {name}
                </HeaderBlue>
                <Paragraph>
                    {paragraph1}
                </Paragraph>
                <Paragraph textProps={{
                    mt: "2rem",
                }}>
                    {paragraph2}
                </Paragraph>
                <Heading
                    fontFamily={"\"B612\", cursive"}
                    color={'brand.blue'}
                    textTransform={'uppercase'}
                    fontSize={'1rem'}
                    letterSpacing={'2px'}
                    lineHeight={'1'}
                    fontWeight={'bold'}
                >
                    {alternativeTitle?? "I nostri clienti"}
                </Heading>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    flexWrap={'wrap'}
                    spacing={1}
                >

                    {
                        clients.map(
                            (client, index) =>
                                <Tooltip key={index} label={client.title}>
                                    <Image
                                        src={client.img}
                                        alt={client.title}
                                        height={client.height?? '3rem'}
                                    />
                                </Tooltip>
                        )
                    }
                </Stack>
                <Image
                    rounded={'md'}
                    alt={`Prodotto ${name}`}
                    maxW={maxWidthImg}
                    src={
                        img
                    }
                />
                <TextButton
                    size={'1rem'}
                >
                    <Link
                        href={pdfBrochure}
                        target={'_blank'}
                    >
                        Sfoglia la brochure
                    </Link>
                </TextButton>
                <TextButton
                    size={'1rem'}
                    textProps={{
                        mt: '0.2rem !important'
                    }}
                >
                    <Link
                        as={LinkRouter}
                        to={'/Form'}
                        state={{product: name.charAt(0).toUpperCase() + name.slice(1)}}
                    >
                        Ottieni più Informazioni
                    </Link>
                </TextButton>
            </VStack>
        </Container>
    )
}

ProductGridXL.propTypes = {}

ProductGridXL.defaultProps = {}

export default ProductGridXL;
