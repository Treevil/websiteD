import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PagesHero from "../../components/PagesHero/PagesHero";
import HeroImg from "../../asset/heroImg/building.png";
import {Container, Grid, GridItem, Heading, Image, Link, Stack} from "@chakra-ui/react";
import {
    Flex,
    Box,
    Button,
    VStack,
    FormControl,
    FormLabel,
    InputGroup,
    Textarea,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';
import Paragraph from "../../components/Typography/Paragraph";
import LogoUrl from "../../asset/loghi/Logo_piccolo_blu_trasparente.png";
import HeaderBlue from "../../components/Typography/HeaderBlue";
import TextInput from "../../components/Inputs/TextInput";

function Form(
    {}
) {

    const [alertData, setAlertData] = useState({
        show: false,
        type: 'success',
        title: '',
        subtitle: ''
    });

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        object: '',
        message: '',
    });



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_unbce8d',
            'template_99swgwu',
            formValues,
            'vbpXCpvI5nr6MfOpf'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const onSendClick = () => {
        // Check that every value
        setAlertData(curr => {
            return {
                ...curr,
                show: !alertData.show
            }
        })

    }



    return (
        <div className={'contact-page'}>
            <PagesHero
                bgImage={HeroImg}
            />
            <Container
                maxW='6xl'
                mt={20}
                mb={40}
            >
                <Flex>
                    <Box p={4}>
                        <Grid templateColumns='repeat(6, 1fr)' gap={6}>
                            <GridItem
                                colSpan={3}
                                w='100%'
                                alignItems={'center'}
                                justifyContent={'center'}
                                display={'flex'}
                            >
                                <Box>
                                    <HeaderBlue
                                        size={'4xl'}
                                    >
                                        Informazioni
                                    </HeaderBlue>
                                    <Paragraph
                                        textProps={{
                                            py: 4,
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            <span style={{marginRight: '.4rem'}} className="material-symbols-outlined">
                                                location_on
                                            </span>
                                            <strong>Indirizzo</strong>
                                        </span>
                                        <span>
                                            <Link target={'_blank'} href={'https://goo.gl/maps/xboRLhLPHrgZE7tf9'}>
                                                Via Lombardore 223 - 10040 <br/>Leinì (TO) - Italy
                                            </Link>
                                        </span>
                                    </Paragraph>


                                    <Paragraph
                                        textProps={{
                                            py: 4,
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            <span style={{marginRight: '.4rem'}} className="material-symbols-outlined">
                                                phone
                                            </span>
                                            <strong>Telefono</strong>
                                        </span>
                                        <span>
                                            <Link href={'tel:+390119981611'}>
                                                +39 011 99 81 611
                                            </Link>
                                        </span>
                                    </Paragraph>


                                    <Paragraph
                                        textProps={{
                                            py: 4,
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            <span style={{marginRight: '.4rem'}} className="material-symbols-outlined">
                                                email
                                            </span>
                                            <strong>E-mail</strong>
                                        </span>
                                        <span>
                                            <Link href={'mailto:info@divitech.it'}>
                                                info@divitech.it
                                            </Link>
                                        </span>
                                    </Paragraph>


                                    <Paragraph
                                        textProps={{
                                            py: 4,
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                            <span style={{marginRight: '.4rem'}} className="material-symbols-outlined">
                                                public
                                            </span>
                                            <strong>Web</strong>
                                        </span>
                                        <span>www.divitech.it</span>
                                    </Paragraph>
                                </Box>
                            </GridItem>
                            <GridItem
                                colSpan={3}
                                w='100%'
                                alignItems={'center'}
                                display={'flex'}
                            >
                                <Box bg="white" borderRadius="lg">
                                    {
                                        alertData.show &&
                                        <Alert
                                            status={alertData.type}
                                            variant='subtle'
                                            flexDirection='column'
                                            alignItems='center'
                                            justifyContent='center'
                                            textAlign='center'
                                        >
                                            <AlertIcon boxSize='40px' mr={0} />
                                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                                Messaggio Inviato
                                            </AlertTitle>
                                            <AlertDescription maxWidth='sm'>
                                                Grazie per averci contattato, ti risponderemo al più presto!<br/> <br/>

                                                Invia un altro messaggio
                                            </AlertDescription>
                                        </Alert>
                                    }

                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <Stack
                                                direction={'row'}
                                                spacing={2}
                                            >
                                                <TextInput
                                                    id={'name'}
                                                    label={'Nome*'}
                                                    setValue={
                                                        v => setFormValues(curr => {
                                                            return {
                                                                ...curr,
                                                                firstName: v,
                                                            }
                                                        })
                                                    }
                                                />
                                                <TextInput
                                                    id={'lastName'}
                                                    label={'Cognome*'}
                                                    setValue={
                                                        v => setFormValues(curr => {
                                                            return {
                                                                ...curr,
                                                                lastName: v,
                                                            }
                                                        })
                                                    }
                                                />
                                            </Stack>
                                            <TextInput
                                                id={'company'}
                                                label={'Azienda'}
                                                setValue={
                                                    v => setFormValues(curr => {
                                                        return {
                                                            ...curr,
                                                            company: v,
                                                        }
                                                    })
                                                }
                                            />
                                            <Stack
                                                direction={'row'}
                                                spacing={2}
                                            >
                                                <TextInput
                                                    id={'email'}
                                                    label={'E-mail*'}
                                                />
                                                <TextInput
                                                    id={'phone'}
                                                    label={'Telefono*'}
                                                />
                                            </Stack>
                                            <TextInput
                                                id={'object'}
                                                label={'Oggetto*'}
                                            />
                                            <FormControl id={'message'}>
                                                <FormLabel
                                                    fontFamily={'\'Roboto\', sans-serif'}
                                                    margin={'0.2rem'}
                                                >
                                                    {'Messaggio'}
                                                </FormLabel>
                                                <Stack direction={'row'} spacing={0}>
                                                    <InputGroup
                                                        background="brand.bgInput"
                                                        border={"0px solid transparent"}
                                                    >
                                                        <Textarea
                                                            size='sm'
                                                            resize={'none'}
                                                        />
                                                    </InputGroup>
                                                    <Button
                                                        height={'auto'}
                                                        variant="solid"
                                                        bg="brand.primary"
                                                        color="white"
                                                        _hover={{
                                                            bg: "brand.secondary"
                                                        }}
                                                        onClick={onSendClick}
                                                    >
                                                        Invia!
                                                    </Button>
                                                </Stack>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Flex>
            </Container>
        </div>
    )
}

export default Form;
