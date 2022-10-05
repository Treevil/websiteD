import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import PagesHero from "../../components/PagesHero/PagesHero";
import HeroImg from "../../asset/heroImg/building.png";
import {
    Box, Button,
    Container,
    Flex,
    FormControl,
    FormLabel,
    InputGroup,
    Stack, Textarea,
    VStack,
    Wrap,
    WrapItem,
    SimpleGrid,
    RadioGroup,
    Radio,
    Switch, Spinner, Collapse, Alert, AlertIcon, CloseButton, AlertTitle, AlertDescription, Grid, GridItem,
} from "@chakra-ui/react";
import HeaderBlue from "../../components/Typography/HeaderBlue";
import Paragraph from "../../components/Typography/Paragraph";
import TextInput from "../../components/Inputs/TextInput";
import DatePicker from 'react-date-picker';
import TextButton from "../../components/Typography/TextButton";
import {workWithUsContent} from "../../config/content/WorkWithUs.content";
import {emailConfig} from "../../config/email.config";

const initFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    bornDate: '',
    typeOfWork: '',
    protectedCategory: false,
    message: '',
}


function WorkWithUs(
    {}
) {
    const [alertData, setAlertData] = useState({
        show: false,
        type: 'success',
        title: '',
        subtitle: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const [formValues, setFormValues] = useState(initFormState);

    const checkPhone = (phone) => {
        if (phone.length === 0) return false;
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

    const checkDate = (inputDate) => {
        const _calculateAge = (birthday = new Date()) => {
            const ageDifMs = Date.now() - birthday.getTime();
            const ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        const bornDate = new Date(inputDate)
        const age = _calculateAge(bornDate);
        return (age >= 13 && age <= 120)

    }

    const onSendClick = (event) => {
        event.preventDefault();
        if (
            formValues.firstName.length === 0
            || formValues.lastName.length === 0
            || formValues.email.length === 0
            || formValues.phone.length === 0
            || formValues.typeOfWork === ''
            || formValues.message.length === 0
        ) {
            return setAlertData({
                    show: true,
                    error: true,
                    title: workWithUsContent.failAlert.missingMandatoryFields.title,
                    subtitle: workWithUsContent.failAlert.missingMandatoryFields.subtitle,
                    type: 'error',
                }
            )
        }

        if (
            !checkPhone(formValues.phone)
            || !checkEmail(formValues.email)
            || !checkDate(formValues.bornDate)
        ) {
            return setAlertData({
                    show: true,
                    error: true,
                    title: workWithUsContent.failAlert.wrongFormat.title,
                    subtitle: workWithUsContent.failAlert.wrongFormat.subtitle,
                    type: 'error',
                }
            )
        }

        setIsLoading(true)
        sendEmail();
    }


    const sendEmail = _ => {

        emailjs.send(
            emailConfig.serviceId,
            emailConfig.templateWorkForUs,
            formValues,
            emailConfig.publicKey,
        )
            .then((result) => {
                console.log(result.text);
                setAlertData({
                        show: true,
                        error: false,
                        title: workWithUsContent.successAlert.title,
                        subtitle: <>
                            {workWithUsContent.successAlert.subtitle}
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
    }


    return (
        <div className={'workWithUs-page'}>
            <PagesHero
                bgImage={HeroImg}
            />
            <Container
                maxW='6xl'
                mt={20}
                mb={40}
                centerContent
                overflow="hidden"
            >
                <Flex>
                    <Box
                        p={4}
                    >
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
                                    <HeaderBlue size={'4xl'}>
                                        Compila il form e <br/> unisciti a nOI!
                                    </HeaderBlue>
                                    <Paragraph
                                        textProps={{
                                            py: 4,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        Siamo sempre alla ricerca di <br/>
                                        persone intraprendenti e <br/>
                                        appassionate, capaci di lavorare in gruppo e <br/>
                                        in ambienti dinamici.

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
                                <Box bg="white" borderRadius="lg">
                                    <Box color="#0B0E3F">
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
                                            <VStack spacing={5} alignItems={'flex-start'}>
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
                                                        label={'Telefono'}
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
                                                <Stack
                                                    direction={'row'}
                                                    spacing={2}
                                                    w={'100%'}
                                                >

                                                    <TextInput
                                                        id={'residence'}
                                                        label={'Residenza'}
                                                        value={formValues.location}
                                                        setValue={
                                                            v => setFormValues(curr => {
                                                                return {
                                                                    ...curr,
                                                                    location: v,
                                                                }
                                                            })
                                                        }
                                                    />
                                                    <TextInput
                                                        id={'bornDate'}
                                                        label={'Data di nascita'}
                                                        type={'date'}
                                                        value={formValues.bornDate}
                                                        validityCheck={date => {
                                                            return checkDate(date)
                                                        }}
                                                        errorMsg={'L\'età inserita non sembra corretta'}
                                                        setValue={
                                                            v => setFormValues(curr => {
                                                                return {
                                                                    ...curr,
                                                                    bornDate: v,
                                                                }
                                                            })
                                                        }
                                                    />
                                                </Stack>
                                                <Stack
                                                    direction='column'
                                                >
                                                    <FormLabel
                                                        fontFamily={'\'Roboto\', sans-serif'}
                                                        margin={'0.2rem'}
                                                    >
                                                        Per cosa ci stai contattando?*
                                                    </FormLabel>
                                                    <RadioGroup
                                                        value={formValues.typeOfWork}
                                                        onChange={
                                                            v => setFormValues(curr => {
                                                                return {
                                                                    ...curr,
                                                                    typeOfWork: v,
                                                                }
                                                            })
                                                        }
                                                    >
                                                        <SimpleGrid
                                                            columns={2}
                                                            spacing={5}
                                                        >
                                                            <Radio
                                                                value={'Stage'}
                                                                color={'brand.primary'}
                                                            >
                                                                Stage
                                                            </Radio>
                                                            <Radio
                                                                color={'brand.primary'}
                                                                value={'Dipendente'}
                                                            >
                                                                Lavoro Dipendente
                                                            </Radio>
                                                            <Radio
                                                                color={'brand.primary'}
                                                                value={'PCTO'}
                                                            >
                                                                PCTO
                                                            </Radio>
                                                            <Radio
                                                                value={'Lavoro con P.iva'}
                                                                color={'brand.primary'}
                                                            >
                                                                Lavoro con P.iva
                                                            </Radio>
                                                        </SimpleGrid>
                                                    </RadioGroup>
                                                </Stack>
                                                <Stack
                                                    direction='column'
                                                >
                                                    <FormLabel
                                                        fontFamily={'\'Roboto\', sans-serif'}
                                                        margin={'0.2rem'}
                                                    >
                                                        Categoria protetta (legge 68/99) </FormLabel>
                                                    <Switch
                                                        size='lg'
                                                        value={formValues.protectedCategory}
                                                        onChange={
                                                            v => setFormValues(curr => {
                                                                return {
                                                                    ...curr,
                                                                    protectedCategory: v,
                                                                }
                                                            })
                                                        }
                                                    />
                                                </Stack>
                                                <FormControl id={'message'}>
                                                    <FormLabel
                                                        fontFamily={'\'Roboto\', sans-serif'}
                                                        margin={'0.2rem'}
                                                    >
                                                        {'Parlaci di te e delle tue esperienze*'}
                                                    </FormLabel>
                                                    <Stack
                                                        direction={'row'}
                                                        spacing={0}
                                                        alignItems={'stretch'}
                                                    >
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
                                                            {isLoading ? <Spinner/> : "Fatti valere!"}

                                                        </Button>
                                                    </Stack>

                                                </FormControl>
                                            </VStack>
                                        }
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

WorkWithUs.propTypes = {}

WorkWithUs.defaultProps = {}

export default WorkWithUs;
