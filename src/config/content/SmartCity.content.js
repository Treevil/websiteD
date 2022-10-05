import * as React from 'react';
import ARGOtpl from "../../asset/prodotti/ARGOtpl.png";
import Trama from "../../asset/prodotti/Trama.png";

import SystIntergImg from "../../asset/prodotti/system integration.png";
import ArgoWaste from "../../asset/prodotti/ArgoWaste.png";
import HeroImg from "../../asset/heroImg/factory.png";

import MomImg from '../../asset/loghi_clienti/logo MOM.png';
import GTTimg from '../../asset/loghi_clienti/Gruppo_Torinese_Trasporti_logo.png';
import ArrivaImg from '../../asset/loghi_clienti/logo arriva.png';
import BreciaMob from '../../asset/loghi_clienti/logo_Brescia_mobilità.png';
import PullImg from '../../asset/loghi_clienti/logo airpullman2.png'
import StavImg from '../../asset/loghi_clienti/logo stav.png';
import ExtraImg from '../../asset/loghi_clienti/logo extrato.png';
import OtxImg from '../../asset/loghi_clienti/logo otx.png';

import finiImg from '../../asset/loghi_clienti/logo fini viaggi2.png';
import AmacoImg from '../../asset/loghi_clienti/logo amaco2.png';
import Marletti from '../../asset/loghi_clienti/logo marletti.png';

import VeritasImg from '../../asset/loghi_clienti/logo veritas.png';
import MelaImg from '../../asset/loghi_clienti/logo canavesana.png';

import argoTPLPdf from '../../asset/brochure/ArgoTPL.pdf';
import tramasPdf from '../../asset/brochure/TR.AMA.pdf'
import SystemIntPdf from '../../asset/brochure/System_integration.pdf'
import ArgoWastePdf from '../../asset/brochure/ArgoWaste.pdf'

import Vattican from '../../asset/loghi_clienti/vatticano.png'
import StreetPolice from '../../asset/loghi_clienti/streetPolice.png'
import JailPolice from '../../asset/loghi_clienti/poliPen.png';
import EuroTech from '../../asset/loghi_clienti/eurotech.png';
import EAP from '../../asset/loghi_clienti/AEP.png'
import Easys from '../../asset/loghi_clienti/easys.png'
import ameli from '../../asset/loghi_clienti/ameli.png'

import cavit from '../../asset/loghi_clienti/cavit.webp';
import museca from '../../asset/loghi_clienti/logo-nausicaa.jpeg';


export const smartCityContent = [
    {
        name: 'argo tpl',
        subtitle: <span>SOLUZIONE COMPLETA PER <br/> IL TRASPORTO PUBBLICO LOCALE</span>,
        img: ARGOtpl,
        clients: [
            {
                img: MomImg,
                title: 'MOM',
                height: '2rem',
            },
            {
                img: GTTimg,
                title: 'Gruppo Torinese Trasporti',
                height: '1.5rem',
            },
            {
                img: ArrivaImg,
                title: 'Arriva',
                height: '2rem',
            },
            {
                img: BreciaMob,
                title: 'Brescia Mobilità',
            },
            {
                img: PullImg,
                title: 'Air Pullman',
            },
            {
                img: StavImg,
                title: 'Stav',
                height: '2rem'
            },
            {
                img: ExtraImg,
                title: 'Extra.To',
                height: '3.5rem'
            },
            {
                img: OtxImg,
                title: 'OTX',
            },
        ],
        pdfBrochure: argoTPLPdf,
        moreInfoLink: '',
        paragraph1: 'Controlla ogni aspetto del tuo esercizio e rendilo più sicuro, efficiente ed accessibile.',
        paragraph2: 'Dalla certificazione del servizio alla bigliettazione elettronica, ARGO TPL dà il massimo, a te e ai tuoi utenti.',
    },
    {
        name: 'tra.ma',
        subtitle: <span>SISTEMA PER LA PROGRAMMAZIONE <br/>DEL SERVIZIO DI TPL</span>,
        img: Trama,
        clients: [
            {
                img: finiImg,
                title: 'Fini Viaggi',
                height: '2.5rem',
            },
            {
                img: PullImg,
                title: 'Air Pullman',
                height: '2.5rem',
            },
            {
                img: AmacoImg,
                title: 'Amaco',
            },
            {
                img: Marletti,
                title: 'Marletti',
            },
            {
                img: ExtraImg,
                title: 'Extra.To',
                height: '3.5rem'
            },
        ],
        pdfBrochure: tramasPdf,
        moreInfoLink: '',
        paragraph1: 'TRA.MA è lo strumento per progettare il servizio di TPL creando linee, fermate e percorsi. ',
        paragraph2: 'Le sue funzioni innovative garantiscono facilità d\'uso ed efficienza.',
    },
    {
        name: 'system integration',
        img: SystIntergImg,
        clients: [
            {
                img: EuroTech,
                title: 'EuroTech',
                height: '2.5rem',
            },
            {
                img: EAP,
                title: 'AEP',
                height: '2rem',
            },
            {
                img: Easys,
                title: 'Aesys',
                height: '2rem',
            },
            {
                img: ameli,
                title: 'Ameli',
                height: '2.5rem',
            },
        ],
        pdfBrochure: SystemIntPdf,
        moreInfoLink: '',
        paragraph1: 'Mettiamo le nostre competenze a disposizione degli allestitori di mezzi pubblici.',
        paragraph2: 'Selezioniamo i componenti elettronici più adatti e ne garantiamo la perfetta integrazione.',
        alternativeTitle: 'Ci interfacciamo con',
    },
    {
        name: 'argo waste',
        subtitle: <span>SOLUZIONE PER LA RACCOLTA RIFIUTI<br/>E L'IGIENE URBANA</span>,
        img: ArgoWaste,
        clients: [
            {
                img: VeritasImg,
                title: 'Veritas',
                height: '2.2rem'
            },
            {
                img: MelaImg,
                title: 'Canavesana',
            },
            {
                img: cavit,
                title: 'Cavit',
            },
            {
                img: museca,
                title: 'Nausicaa',
            }
        ],
        pdfBrochure: ArgoWastePdf,
        moreInfoLink: '',
        paragraph1: 'ARGO WASTE è una piattaforma per la gestione digitalizzata della raccolta rifiuti e di ogni suo aspetto.',
        paragraph2: 'Composto da dieci plug-in, ARGO    WASTE garantisce una soluzione per ogni esigenza.   ',
    },
]
