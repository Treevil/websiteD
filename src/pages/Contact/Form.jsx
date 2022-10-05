import React, {useState, useEffect} from 'react';
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
    Collapse,
    CloseButton,
    Spinner,
} from '@chakra-ui/react';
import HeaderBlue from "../../components/Typography/HeaderBlue";
import Paragraph from "../../components/Typography/Paragraph";
import TextInput from "../../components/Inputs/TextInput";
import TextButton from "../../components/Typography/TextButton";
import {
    useLocation,
} from "react-router-dom";
import {formContent} from "../../config/content/Form.content";
import {emailConfig} from "../../config/email.config";

const initFormState = {
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    object: '',
    message: '',
};


function Form(
    {}
) {


    const [alertData, setAlertData] = useState({
        show: false,
        error: false,
        type: 'success',
        title: '',
        subtitle: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [formValues, setFormValues] = useState(initFormState);

    const location = useLocation();
    useEffect(_ => {

        const {
            state
        } = location;

        if (!!state && !!state.product) {
            setFormValues(curr => {
                return {
                    ...curr,
                    object: `${state.product}`,
                    message: `Buongiorno, vorrei maggiori informazioni in merito a ${state.product}`
                }
            })
        }

    }, [location])

    const checkPhone = (phone) => {
        if (phone.length === 0) return true;
        const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return re.test(phone);
    }

    const checkEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    }


    const sendEmail = _ => {

        emailjs.send(
            emailConfig.serviceId,
            emailConfig.templateForm,
            formValues,
            emailConfig.publicKey,
        )
            .then((result) => {
                setAlertData({
                        show: true,
                        error: false,
                        title: formContent.successAlert.title,
                        subtitle: <>
                            {formContent.successAlert.subtitle}
                            <br/>
                            <br/>
                            <br/>
                            <TextButton
                                onClick={_ => {
                                    setAlertData(
                                        el => {
                                            return {...el, show: false}
                                        }
                                    )
                                    setFormValues(initFormState);
                                }}
                            >
                                Invia un nuovo messaggio?
                            </TextButton>
                        </>,
                        type: 'success',
                    }
                )
            })
            .catch((error) => {
                setAlertData({
                    show: true,
                    type: 'error',
                    title: 'Qualcosa è andato storto',
                    subtitle: `Errore: ${error.text ?? "sconosciuto"}`
                })
                console.log(error.text);
            })
            .finally(_ => {
                setIsLoading(false);
            })
        ;
    };

    const onSendClick = (event) => {
        event.preventDefault();
        if (
            formValues.firstName.length === 0
            || formValues.lastName.length === 0
            || formValues.email.length === 0
            || formValues.object.length === 0
            || formValues.message.length === 0
        ) {
            return setAlertData({
                    show: true,
                    error: true,
                    title: formContent.failAlert.missingMandatoryFields.title,
                    subtitle: formContent.failAlert.missingMandatoryFields.subtitle,
                    type: 'error',
                }
            )
        }

        if (
            !checkPhone(formValues.phone)
            || !checkEmail(formValues.email)
        ) {
            return setAlertData({
                    show: true,
                    error: true,
                    title: formContent.failAlert.wrongFormat.title,
                    subtitle: formContent.failAlert.wrongFormat.subtitle,
                    type: 'error',
                }
            )
        }

        setIsLoading(true)
        sendEmail();
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
                                colSpan={{
                                    base: 6,
                                    md: 3,
                                }}
                                order={{
                                    base: 2,
                                    md: 1,
                                }}
                                w='100%'
                                alignItems={'center'}
                                justifyContent={{
                                    base: 'flex-start',
                                    md: 'center',
                                }}
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
                                               {formContent.infos.address}
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
                                                 {formContent.infos.phone}
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
                                                 {formContent.infos.email}
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
                                        <span>
                                             {formContent.infos.website}
                                        </span>
                                    </Paragraph>
                                </Box>
                            </GridItem>
                            <GridItem
                                colSpan={{
                                    base: 6,
                                    md: 3,
                                }}
                                order={{
                                    base: 1,
                                    md: 2,
                                }}
                                w='100%'
                                alignItems={'center'}
                                display={'flex'}
                            >
                                <Box bg="white" borderRadius="lg" minHeight={'500px'}>
                                    <Collapse
                                        in={alertData.show}
                                        animateOpacity
                                    >
                                        <Alert
                                            status={alertData.type}
                                            variant='subtle'
                                            flexDirection='column'
                                            alignItems='center'
                                            justifyContent='center'
                                            textAlign='center'
                                            m={8}
                                            position={'relative'}
                                        >
                                            <AlertIcon boxSize='40px' mr={0}/>
                                            {
                                                alertData.error &&
                                                <CloseButton
                                                    position={'absolute'}
                                                    top={'20px'}
                                                    right={'60px'}
                                                    onClick={_ => setAlertData(curr => {
                                                        return {...curr, show: false}
                                                    })}
                                                />
                                            }

                                            <AlertTitle mt={4} mb={1} fontSize='lg'>
                                                {alertData.title}
                                            </AlertTitle>
                                            <AlertDescription maxWidth='sm' p={'1rem'}>
                                                {alertData.subtitle}
                                            </AlertDescription>

                                        </Alert>
                                    </Collapse>
                                    {
                                        (!alertData.show || alertData.error) &&
                                        <Box
                                            m={{
                                                base: 0,
                                                md: 8,
                                            }}
                                            color="#0B0E3F"
                                        >
                                            <VStack spacing={5}>
                                                <Stack
                                                    direction={'row'}
                                                    spacing={2}
                                                >
                                                    <TextInput
                                                        id={'name'}
                                                        label={'Nome*'}
                                                        value={formValues.firstName}
                                                        validityCheck={txt => txt.length > 0}
                                                        errorMsg={'Il nome è un campo obbligatorio'}
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
                                                        value={formValues.lastName}
                                                        validityCheck={txt => txt.length > 0}
                                                        errorMsg={'Il Cognome è un campo obbligatorio'}
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
                                                    value={formValues.company}
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
                                                        value={formValues.email}
                                                        validityCheck={email => checkEmail(email)
                                                        }
                                                        errorMsg={'L\'email inserita non è valida'}
                                                        setValue={
                                                            v => setFormValues(curr => {
                                                                return {
                                                                    ...curr,
                                                                    email: v,
                                                                }
                                                            })
                                                        }
                                                    />
                                                    <TextInput
                                                        id={'phone'}
                                                        label={'Telefono*'}
                                                        value={formValues.phone}
                                                        validityCheck={phone => {
                                                            return checkPhone(phone)
                                                        }}
                                                        errorMsg={'Telefono inserito non valido'}
                                                        setValue={
                                                            v => setFormValues(curr => {
                                                                return {
                                                                    ...curr,
                                                                    phone: v,
                                                                }
                                                            })
                                                        }
                                                    />
                                                </Stack>
                                                <TextInput
                                                    id={'object'}
                                                    label={'Oggetto*'}
                                                    value={formValues.object}
                                                    validityCheck={object => {
                                                        return object.length > 0
                                                    }}
                                                    errorMsg={'L\'oggetto è un cambo obbligatorio'}
                                                    setValue={
                                                        v => setFormValues(curr => {
                                                            return {
                                                                ...curr,
                                                                object: v,
                                                            }
                                                        })
                                                    }
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
                                                                value={formValues.message}
                                                                onChange={
                                                                    event => {
                                                                        const {
                                                                            value
                                                                        } = event.target;
                                                                        setFormValues(curr => {
                                                                            return {
                                                                                ...curr,
                                                                                message: value,
                                                                            }
                                                                        })
                                                                    }
                                                                }
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
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading ? <Spinner/> : "Invia!"}
                                                        </Button>
                                                    </Stack>
                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    }
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
