import * as React from 'react';
import PropTypes from 'prop-types';
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
    Checkbox, CheckboxGroup, SimpleGrid,
    RadioGroup,
    Radio,
    Switch,
} from "@chakra-ui/react";
import HeaderBlue from "../../components/Typography/HeaderBlue";
import Paragraph from "../../components/Typography/Paragraph";
import TextInput from "../../components/Inputs/TextInput";
import {useState} from "react";

function WorkWithUs(
    {}
) {
    const [typeOfWork, setTypeOfWork] = useState('');

    return (
        <div className={'workWithUs-page'}>
            <PagesHero
                bgImage={HeroImg}
            />
            <Container
                maxW='full'
                mt={0}
                centerContent
                overflow="hidden"
            >
                <Flex>
                    <Box
                        color="white"
                        borderRadius="lg"
                        m={{sm: 4, md: 16, lg: 10}}
                        p={{sm: 5, md: 5, lg: 16}}>
                        <Box p={4}>
                            <Wrap spacing={{base: 20, sm: 3, md: 5, lg: 20}}>
                                <WrapItem alignItems={'center'}>
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
                                </WrapItem>
                                <WrapItem
                                    alignItems={'flex-start'}
                                >
                                    <Box bg="white" borderRadius="lg">
                                        <Box m={8} color="#0B0E3F">
                                            <VStack spacing={5} alignItems={'flex-start'}>
                                                <Stack
                                                    direction={'row'}
                                                    spacing={2}
                                                >
                                                    <TextInput
                                                        id={'name'}
                                                        label={'Nome*'}
                                                    />
                                                    <TextInput
                                                        id={'lastName'}
                                                        label={'Cognome*'}
                                                    />
                                                </Stack>
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
                                                <Stack
                                                    direction={'row'}
                                                    spacing={2}
                                                >

                                                    <TextInput
                                                        id={'residence'}
                                                        label={'Residenza'}
                                                    />
                                                    <TextInput
                                                        id={'bornDate'}
                                                        label={'Data di nascita'}
                                                    />
                                                </Stack>
                                                <Stack
                                                    direction='column'
                                                >
                                                    <FormLabel
                                                        fontFamily={'\'Roboto\', sans-serif'}
                                                        margin={'0.2rem'}
                                                    >
                                                        Per cosa ci stai contattando?
                                                    </FormLabel>
                                                    <RadioGroup
                                                        value={typeOfWork}
                                                        onChange={setTypeOfWork}
                                                    >
                                                        <SimpleGrid
                                                            columns={2}
                                                            spacing={5}
                                                        >
                                                            <Radio
                                                                value={'stage'}
                                                                color={'brand.primary'}
                                                                background={
                                                                    typeOfWork === 'stage'? "brand.primary" : "white"
                                                                }
                                                                borderColor={
                                                                    "brand.primary"
                                                                }
                                                                borderRadious={'50%'}
                                                            >
                                                                Stage
                                                            </Radio>
                                                            <Radio
                                                                color={'brand.primary'}
                                                                value={'fullTime'}
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
                                                                value={'freelancer'}
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
                                                        Categoria protetta (legge 68/99)                                                    </FormLabel>
                                                    <Switch size='lg' />
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
                                                            />
                                                        </InputGroup>
                                                        <Button
                                                            height={'auto'}
                                                            variant="solid"
                                                            bg="brand.primary"
                                                            color="white"
                                                            _hover={{}}
                                                        >
                                                            Fatti valere!
                                                        </Button>
                                                    </Stack>

                                                </FormControl>

                                                <FormControl id="name" float="right">

                                                </FormControl>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </div>
    )
}

WorkWithUs.propTypes = {}

WorkWithUs.defaultProps = {}

export default WorkWithUs;
