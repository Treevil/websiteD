import * as React from 'react';

import hyperionrImg from "../../asset/prodotti/hyperion.png";
import Argo from "../../asset/prodotti/Argo.png";
import Danone from '../../asset/loghi_clienti/DANONE_LOGO_VERTICAL2.jpg'
import FanMilImg from '../../asset/loghi_clienti/logo fanmilk.png'
import LevoratoImg from '../../asset/loghi_clienti/logo levorato motori.png'
import LogoAutoSped from '../../asset/loghi_clienti/logo_autosped.png'
import logoSiad from '../../asset/loghi_clienti/logo siad.png'
import logoSapio from '../../asset/loghi_clienti/logo sapio.png'
import HyperiorPDf from '../../asset/brochure/Hyperion.pdf';
import ArgoPDf from '../../asset/brochure/Argo.pdf';



export const productLogistic = [
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
        paragraph1: 'Applicando diverse tecnologie di tracciamento (RFID, BLE, GPS e WPS) Hyperion raccoglie dati utili e li mette a disposizione del cliente in Cloud.',
        paragraph2: 'Tieni traccia di Asset e KPI, pianifica la produzione e sfrutta la piattaforma di Business Intelligence.',
    },
    {
        name: 'argo',
        subtitle: <span>SOLUZIONE PER LA GESTIONE DELLA LOGISTICA<br/>APPLICATA AL TRASPORTO MERCE</span>,
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
        paragraph1: 'La soluzione è composta da un frontend gestionale e da una serie di componenti elettronici da installare a bordo dei mezzi del proprio parco veicolare.',
        paragraph2: 'I plug-in personalizzabili garantiscono massima efficienza e flessibilità, per risultati ottimali.',
    },
]
