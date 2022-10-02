import * as React from 'react';
import PropTypes from 'prop-types';
import hyperionrImg from "../../asset/prodotti/hyperion.png";
import StatePoliceImg from "../../asset/loghi clienti/poliziaStato.png";
import PolferImg from "../../asset/loghi clienti/polfer.png";
import Argo from "../../asset/prodotti/Argo.png";
import LocalPolice from "../../asset/loghi clienti/localPolice.png";
import Mercurio from "../../asset/prodotti/mercurioext.png";
import StreetPolice from "../../asset/loghi clienti/streetPolice.png";
import Danone from '../../asset/loghi clienti/DANONE_LOGO_VERTICAL2.jpg'
import FanMilImg from '../../asset/loghi clienti/logo fanmilk.png'
import LevoratoImg from '../../asset/loghi clienti/logo levorato motori.png'
import LogoAutoSped from '../../asset/loghi clienti/logo autosped (non è trasparente).png'
import logoSiad from '../../asset/loghi clienti/logo siad.png'
import logoSapio from '../../asset/loghi clienti/logo sapio.png'
import PagesHero from "../../components/PagesHero/PagesHero";
import HeroImg from "../../asset/heroImg/factory.png";
import ProductGrid from "../../components/ProductGrid";

import HyperiorPDf from '../../asset/brochure/Hyperion.pdf';
import ArgoPDf from '../../asset/brochure/Argo.pdf';

function SmartCity(
    {}
) {

    const PRODUCTS = [
        {
            name: 'hyperion',
            subtitle: <span>SOLUZIONE RAIN RFID PER IL <br/> MONITORAGGIO DELLA SUPPLY CHAIN</span>,
            img: hyperionrImg,
            clients: [
                {
                    img: Danone,
                    title: 'Danone',
                    height: '4rem',
                },
                {
                    img: FanMilImg,
                    title: 'FanMilk',
                    height: '4rem',
                },
            ],
            pdfBrochure: HyperiorPDf,
            moreInfoLink: '',
            paragraph1: 'Applicando diverse tecnologie di tracciamento (RFID, BLE, GPS e WPS, Hyperion raccoglie dati utili e li mette a disposizione del cloud.',
            paragraph2: 'Tieni traccia di Asset e KPI, pianifica la produzione e sfrutta la piattaforma di Business Intelligence.',
        },
        {
            name: 'argo',
            subtitle: <span>SUITE DI APPLICAZIONI PER GLI <br/>AGENTI DI POLIZIA</span>,
            img: Argo,
            clients: [
                {
                    img: LevoratoImg,
                    title: 'Levorato Motori',
                    height: '2rem'
                },
                {
                    img: LogoAutoSped,
                    title: 'Autosped',
                },
                {
                    img: logoSiad,
                    title: 'Siad',

                },
                {
                    img: logoSapio,
                    title: 'Sapio',
                    width: '4rem'
                },
            ],
            pdfBrochure: ArgoPDf,
            moreInfoLink: '',
            paragraph1: 'Una suite di applicazioni compatibili con smartphone e tablet Android per facilitare il servizio degli agenti sul territorio.',
            paragraph2: 'Mercurio Ext assicura uno strumento per ogni esigenza: dalla chat agli allarmi, dalla localizzazione alla gestione degli eventi.',
        },
    ]


    return (
        <>
            <PagesHero
                bgImage={HeroImg}
            />
            {

                PRODUCTS.map(
                    (prod, index) =>
                        <ProductGrid
                            key={index}
                            {...prod}
                        />
                )
            }
        </>
    )
}

SmartCity.propTypes = {}

SmartCity.defaultProps = {}

export default SmartCity;
