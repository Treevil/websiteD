import * as React from 'react';
import PropTypes from 'prop-types';
import PagesHero from "../../components/PagesHero/PagesHero";
import HeroImg from "../../asset/immagini/About1Hero.jpg";
import {Container, Grid, GridItem, Heading, Image} from "@chakra-ui/react";
import Paragraph from "../../components/Typography/Paragraph";
import LogoUrl from "../../asset/loghi/Logo_piccolo_blu_trasparente.png";

function About2(
    {}
) {
    return (
        <div className={'about1-page'}>
            <PagesHero
                bgImage={HeroImg}
            />

            <Container
                maxW='6xl'
                my={20}
            >
                <Grid templateColumns='repeat(8, 1fr)' gap={6}>
                    <GridItem
                        colSpan={3}
                        w='100%'
                        p={6}
                    >
                        <Heading
                            textTransform={'uppercase'}
                            my={6}
                            color={'brand.primary'}
                            fontSize={'4rem'}
                            fontWeight={600}
                            color={'brand.blue'}
                        >
                            la nostra Azienda
                        </Heading>
                        <Paragraph>
                            Abbiamo scelto di far nascere la nostra azienda a Leinì, vicinissima a Torino, ma immersa nelle campagne. Qui, abbiamo creato uno spazio concepito per stimolare il pensiero laterale e per favorire un approccio creativo al lavoro di tutti i giorni.                         </Paragraph>
                        <Paragraph textProps={{
                            pt: 5
                        }}>
                            Il giardino ci permette di fare riunioni all'aperto e di prendere una boccata d'aria, mentre la grande sala da pranzo è garanzia di momenti di relax e di condivisione.
                        </Paragraph>
                    </GridItem>
                    <GridItem colSpan={2} w='100%'>
                        <Image
                            src={LogoUrl}
                            mt={-40}
                            position={'relative'}
                            zIndex={10}
                        />
                    </GridItem>
                    <GridItem colSpan={3} w='100%' >
                        <Heading
                            textTransform={'uppercase'}
                            my={6}
                            color={'brand.primary'}
                            fontSize={'3xl'}
                            fontWeight={600}
                            color={'brand.blue'}
                        >
                            il laboratorio
                        </Heading>
                        <Paragraph>
                            I nostri tecnici hanno a disposizione un grande laboratorio che affaccia sul cortile aziendale. Questo è lo spazio ideale per dar forma a progetti ambiziosi e creare connessioni perfette tra elementi hardware e software.
                        </Paragraph>
                        <Heading
                            textTransform={'uppercase'}
                            my={6}
                            color={'brand.primary'}
                            fontSize={'3xl'}
                            fontWeight={600}
                            color={'brand.blue'}
                        >
                            l'open space
                        </Heading>
                        <Paragraph>
                            Lavorare in un grande open space ci assicura di non rimanere mai privi di stimoli, di nuove idee o di un collega a cui chiedere un aiuto.                        </Paragraph>
                    </GridItem>
                </Grid>
            </Container>
        </div>
    )
}

About2.propTypes = {}

About2.defaultProps = {}

export default About2;
