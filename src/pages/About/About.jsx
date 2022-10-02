import * as React from 'react';
import PagesHero from "../../components/PagesHero/PagesHero";
import HeroImg from "../../asset/heroImg/programmers.png"
import {
    Grid,
    GridItem,
    Text,
    Container,
    Heading, Image, Flex,
} from '@chakra-ui/react'
import LogoUrl from '../../asset/loghi/Logo_piccolo_blu_trasparente.png';

import Paragraph from "../../components/Typography/Paragraph";
import HeaderBlue from "../../components/Typography/HeaderBlue";
import bgPool from "../../asset/heroImg/pool.png";

function About(
    {}
) {
    return (
        <div className={'about1-page'}>
            <PagesHero
                bgImage={HeroImg}
            />
            <Container
                maxW='6xl'
                mt={20}
                mb={40}
            >
                <Grid templateColumns='repeat(8, 1fr)' gap={6}>
                    <GridItem
                        colSpan={3}
                        w='100%'
                        mt={'4rem'}
                    >
                        <HeaderBlue
                            size={'6rem'}
                            textProps={{
                                mb: '2rem'
                            }}
                        >
                            la nostra
                            storia
                        </HeaderBlue>
                        <Paragraph>
                            Divitech nasce nel 1997 come spin-off del dipartimento Telematics di S.E.P.A:
                            il laboratorio di eccellenza tecnologica del Gruppo FIAT.
                        </Paragraph>
                        <Paragraph textProps={{
                            pt: "2rem",
                        }}>
                            Grazie alla passione per l'innovazione dei suoi fondatori,
                            Divitech è stata in grado, fin da subito, di offrire soluzioni
                            avanzate per la localizzazione di oggetti e veicoli, per la
                            salvaguardia della sicurezza pubblica, per la gestione dei beni
                            aziendali e per lo sviluppo di sistemi cartografici digitali.
                        </Paragraph>
                    </GridItem>
                    <GridItem colSpan={2} w='100%'>
                        <Image
                            src={LogoUrl}
                            mt={'-137px'}
                            position={'relative'}
                            zIndex={10}
                        />
                    </GridItem>
                    <GridItem
                        colSpan={3}
                        w='100%'
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'end'}
                    >
                        <HeaderBlue
                            size={'2.5rem'}
                            textProps={{
                                mb: '2rem'
                            }}
                        >
                            Chi siamo

                        </HeaderBlue>
                        <Paragraph>
                            Divitech è una realtà del Gruppo Elda
                            Ingegneria, pioniere dell'Information Technology.
                            Da sempre ci occupiamo di Telematica:
                            alla base di tutti i nostri prodotti, infatti,
                            c'è una forte connessione tra software e i
                            più moderni strumenti di rilevazione dati.
                        </Paragraph>
                        <Paragraph textProps={{
                            pt: "2rem"
                        }}>
                            Nel 2008 abbiamo fondato Tierra insieme a Topcon Positioning per portare la telematica nel campo dell'agricoltura di precisione e del movimento terra.
                            Grazie alle relazioni commerciali instaurate con Topcon e Sumitomo, la nostra telematica ha raggiunto il Sud-est Asiatico dando vita a Weeo.
                        </Paragraph>
                    </GridItem>
                </Grid>
            </Container>
            <Flex
                w={'full'}
                h={'500px'}
                backgroundImage={
                    bgPool
                }
                py={20}
                backgroundSize={'cover'}
                color={'brand.white'}
                backgroundPosition={'center center'}
            />
            <Container
                maxW='6xl'
                my={20}
            >
                <Grid templateColumns='repeat(8, 1fr)' gap={6}>
                    <GridItem
                        colSpan={3}
                        w='100%'
                        mt={'4rem'}
                        id={'OurHistory'}
                    >
                        <HeaderBlue
                            size={'6rem'}
                            textProps={{
                                mb: '2rem'
                            }}
                        >
                            la nostra Azienda
                        </HeaderBlue>
                        <Paragraph>
                            Abbiamo scelto di far nascere la nostra azienda a Leinì, vicinissima a Torino, ma immersa nelle campagne.
                            Qui, abbiamo creato uno spazio concepito per stimolare il pensiero laterale e per favorire un approccio creativo al lavoro di tutti i
                            giorni.
                        </Paragraph>
                        <Paragraph textProps={{
                            pt: "2rem",
                        }}>
                            Il giardino ci permette di fare riunioni all'aperto e di prendere una boccata d'aria,
                            mentre la cucina e la sala da pranzo sono garanzia di momenti di pausa e condivisione.
                        </Paragraph>
                    </GridItem>
                    <GridItem colSpan={2} w='100%' />
                    <GridItem colSpan={3} w='100%'
                              display={'flex'}
                              flexDirection={'column'}
                              justifyContent={'end'}

                    >
                        <HeaderBlue
                            size={'2.5rem'}
                            textProps={{
                                mb: '2rem'
                            }}
                        >
                            il laboratorio
                        </HeaderBlue>
                        <Paragraph>
                            I nostri tecnici hanno a disposizione un grande laboratorio che affaccia sul cortile aziendale.
                            Questo è lo spazio ideale per dar forma a progetti ambiziosi e creare connessioni perfette tra elementi hardware e software.
                        </Paragraph>
                        <HeaderBlue
                            size={'2.5rem'}
                            textProps={{
                                my: '2rem'
                            }}
                        >
                            l'open space
                        </HeaderBlue>
                        <Paragraph>
                            Lavorare in un grande open space ci assicura di non rimanere mai privi di stimoli,
                            di nuove idee o di un collega a cui chiedere un aiuto.
                            Non mancano zone relax e spazi in cui bere un caffè, esclusivamente con soluzioni plastic-free.

                        </Paragraph>
                    </GridItem>
                </Grid>
            </Container>
        </div>
    )
}

About.propTypes = {}

About.defaultProps = {}

export default About;
