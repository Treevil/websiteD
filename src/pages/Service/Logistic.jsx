import * as React from 'react';
import PropTypes from 'prop-types';
import ARGOtpl from "../../asset/prodotti/ARGOtpl.png";
import Trama from "../../asset/prodotti/Trama.png";

import SystIntergImg from "../../asset/prodotti/system integration.png";
import ArgoWaste from "../../asset/prodotti/ArgoWaste.png";
import PagesHero from "../../components/PagesHero/PagesHero";
import HeroImg from "../../asset/heroImg/factory.png";
import ProductGrid from "../../components/ProductGrid";

import MomImg from '../../asset/loghi clienti/logo MOM.png';
import GTTimg from '../../asset/loghi clienti/Gruppo_Torinese_Trasporti_logo.png';
import ArrivaImg from '../../asset/loghi clienti/logo arriva.png';
import BreciaMob from '../../asset/loghi clienti/logo Brescia mobilità.png';
import PullImg from '../../asset/loghi clienti/logo airpullman2.png'
import StavImg from '../../asset/loghi clienti/logo stav.png';
import ExtraImg from '../../asset/loghi clienti/logo extrato.png';
import OtxImg from '../../asset/loghi clienti/logo otx.png';

import finiImg from '../../asset/loghi clienti/logo fini viaggi2.png';
import AmacoImg from '../../asset/loghi clienti/logo amaco2.png';
import Marletti from '../../asset/loghi clienti/logo marletti.png';

import VeritasImg from '../../asset/loghi clienti/logo veritas.png';
import MelaImg from '../../asset/loghi clienti/logo canavesana.png';

import argoTPLPdf from '../../asset/brochure/ArgoTPL.pdf';
import tramasPdf from '../../asset/brochure/TR.AMA.pdf'
import SystemIntPdf from '../../asset/brochure/System_integration.pdf'
import ArgoWastePdf from '../../asset/brochure/ArgoWaste.pdf'

function Logistic(
    {}
) {
    const PRODUCTS = [
        {
            name: 'argo tpl',
            subtitle: <span>SOLUZIONE COMPLETA PER <br/> IL TRASPORTO PUBBLICO</span>,
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
            subtitle: <span>SISTEMA PER LA PROGRAMMAZIONE <br/>DEL SERVIZIO DI TPLO</span>,
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
            ],
            pdfBrochure: SystemIntPdf,
            moreInfoLink: '',
            paragraph1: 'Mettiamo le nostre competenze a disposizione degli allestitori di mezzi pubblici.',
            paragraph2: 'Selezioniamo i componenti elettronici più adatti e ne garantiamo la perfetta integrazione.',
        },
        {
            name: 'argowaste',
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
            ],
            pdfBrochure: ArgoWastePdf,
            moreInfoLink: '',
            paragraph1: 'ARGOWASTE è una piattaforma per la gestione digitalizzata della raccolta rifiuti e di ogni suo aspetto.',
            paragraph2: 'Composto da dieci plug-in, ARGOWASTE garantisce una soluzione per ogni esigenza.   ',
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

Logistic.propTypes = {}

Logistic.defaultProps = {}

export default Logistic;
