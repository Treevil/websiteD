import * as React from 'react';
import PagesHero from "../../components/PagesHero/PagesHero";
import HeroImg from "../../asset/heroImg/programmers.png"
import {
    Grid,
    GridItem,
    Text,
    Container,
    Heading, Image, Flex, Link, Box,
} from '@chakra-ui/react'
import LogoUrl from '../../asset/loghi/Logo_piccolo_blu_trasparente.png';

import Paragraph from "../../components/Typography/Paragraph";
import HeaderBlue from "../../components/Typography/HeaderBlue";
import bgPool from "../../asset/heroImg/pool.png";
import TextButton from "../../components/Typography/TextButton";

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
                padding={{
                    base: "0 3rem",
                    xl: 0,
                }}
            >
                <Grid
                    templateColumns='repeat(8, 1fr)'
                    gap={{
                        base: 2,
                        md: 3,
                        xl: 6,
                    }}

                >
                    <GridItem
                        colSpan={{
                            base: 8,
                            md: 4,
                            xl: 3,
                        }}
                        w='100%'
                        mt={{
                            base: '2rem',
                            md: '4rem'
                        }}
                    >
                        <HeaderBlue
                            size={{
                                base: '5rem',
                                md: '6rem'
                            }}
                            textProps={{
                                mb: '2rem'
                            }}
                        >
                            La nostra
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
                            Divitech ?? stata in grado, fin da subito, di offrire soluzioni
                            avanzate per la localizzazione di oggetti e veicoli, per la
                            salvaguardia della sicurezza pubblica, per la gestione dei beni
                            aziendali e per lo sviluppo di sistemi cartografici digitali.
                        </Paragraph>
                    </GridItem>
                    <GridItem
                        colSpan={{
                            base: 8,
                            md: 1,
                            xl: 2,
                        }}
                        w='100%'
                        textAlign={'center'}
                    >
                        <Image
                            src={LogoUrl}
                            margin={{
                                base: '.75rem auto',
                                md: '0',
                                xl: '-137px 0 0 0'
                            }}
                            width={{
                                base: '50%'
                            }}
                            position={'relative'}
                            zIndex={10}
                            display='none'
                        />
                    </GridItem>
                    <GridItem
                        colSpan={{
                            base: 8,
                            md: 3,
                            xl: 3,
                        }}
                        w='100%'
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'end'}
                    >
                        <HeaderBlue
                            size={'2.5rem'}
                            textProps={{
                                mt: '2rem',
                                mb: '2rem'
                            }}
                        >
                            Chi siamo
                        </HeaderBlue>
                        <Paragraph>
                            Divitech ?? una realt?? del <Link target={'_blank'} href={'https://www.elda.it/'}> Gruppo Elda
                            Ingegneria</Link>, pioniere dell'Information Technology.
                            Da sempre ci occupiamo di Telematica:
                            alla base di tutti i nostri prodotti, infatti,
                            c'?? una forte connessione tra software e i
                            pi?? moderni strumenti di rilevazione dati.
                        </Paragraph>
                        <Paragraph textProps={{
                            pt: "2rem"
                        }}>
                            Nel 2008 abbiamo fondato <Link target={'_blank'} href={'https://www.tierratelematics.com/'}>Tierra</Link> insieme a <Link target={'_blank'} href={'https://www.topconpositioning.com/it/'}>Topcon Positioning</Link> per portare la telematica nel campo dell'agricoltura di precisione e del movimento terra.
                            Grazie alle relazioni commerciali instaurate con <Link href={' https://www.topcon.co.jp/en/positioning/'}>Topcon</Link>  e Sumitomo, la nostra telematica ha raggiunto il Sud-est Asiatico dando vita a <Link target={'_blank'} href={'https://weeo.com/'}>Weeo</Link> .
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
                my={{
                    base: 6,
                    xl: 20,
                }}
                padding={{
                    base: "0 3rem",
                    xl: 0,
                }}
            >
                <Grid
                    templateColumns='repeat(8, 1fr)'
                    gap={{
                        base: 2,
                        md: 3,
                        xl: 6,
                    }}
                >
                    <GridItem
                        colSpan={{
                            base: 8,
                            md: 4,
                            xl: 3,
                        }}
                        w='100%'
                        mt={'4rem'}
                        id={'OurHistory'}
                    >
                        <HeaderBlue
                            size={{
                                base: '5rem',
                                md: '6rem'
                            }}
                            textProps={{
                                mb: '2rem'
                            }}
                        >
                            La nostra Azienda
                        </HeaderBlue>
                        <Paragraph>
                            Abbiamo scelto di far nascere la nostra azienda a Lein??, vicinissima a Torino, ma immersa nelle campagne.
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
                    <GridItem
                        colSpan={{
                            base: 0,
                            md: 1,
                            xl: 2,
                        }}
                        w='100%'
                    />
                    <GridItem
                        colSpan={{
                            base: 8,
                            md: 3,
                            xl: 3,
                        }}
                        w='100%'
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'end'}

                    >
                        <HeaderBlue
                            size={'2.5rem'}
                            textProps={{
                                my: '2rem'
                            }}
                        >
                            il laboratorio
                        </HeaderBlue>
                        <Paragraph>
                            I nostri tecnici hanno a disposizione un grande laboratorio che affaccia sul cortile aziendale.
                            Questo ?? lo spazio ideale per dar forma a progetti ambiziosi e creare connessioni perfette tra elementi hardware e software.
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
                            Non mancano zone relax e spazi in cui bere un caff??, esclusivamente con soluzioni plastic-free.

                        </Paragraph>

                    </GridItem>

                </Grid>
                <Box
                    display={'flex'}
                    mt={4}
                >
                    <TextButton textProps={{ml: 'auto'}}>
                        <Link href={'/workWithUs'}>
                            Lavora con noi
                        </Link>
                    </TextButton>
                </Box>
            </Container>
        </div>
    )
}

About.propTypes = {}

About.defaultProps = {}

export default About;
