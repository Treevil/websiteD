import * as React from 'react';
import PropTypes from 'prop-types';
import HeroImg from '../../asset/heroImg/reverendo.png'
import PagesHero from "../../components/PagesHero/PagesHero";
import ProductGrid from "../../components/ProductGrid";

import GeoWebImg from '../../asset/prodotti/Geoweb-trimmy.png'
import Colibri from '../../asset/prodotti/Colibri-trimmy.png'
import HelpMe from '../../asset/prodotti/Helpme.png';
import TopCrash from '../../asset/prodotti/Topcrash.png';
import Mercurio from '../../asset/prodotti/mercurioext.png'
import PolferImg from '../../asset/loghi clienti/polfer.png'
import StatePoliceImg from '../../asset/loghi clienti/poliziaStato.png'
import LocalPolice from '../../asset/loghi clienti/localPolice.png'
import StreetPolice from '../../asset/loghi clienti/streetPolice.png'

import GeoWebPdf from '../../asset/brochure/GeoWeb.pdf'
import topCrashPdf from '../../asset/brochure/TopCrash.pdf'
import helpmePdf from '../../asset/brochure/Help_Me.pdf'
import mercurioPdf from '../../asset/brochure/MercurioExt.pdf'
import colibriPdf from '../../asset/brochure/Colibri.pdf'

function Security(
    {}
) {
    const PRODUCTS = [
        {
            name: 'Geoweb',
            subtitle: <span>CENTRALE OPERATIVA PER <br/> LE FORZE DI POLIZIA</span>,
            img: GeoWebImg,
            clients: [
                {
                    img: StatePoliceImg,
                    title: 'Polizia di Stato'
                },
                {
                    img: PolferImg,
                    title: 'Polizia Ferroviaria',
                },
            ],
            pdfBrochure: GeoWebPdf,
            moreInfoLink: '',
            paragraph1: 'Con GeoWeb la centrale operativa è sempre in contatto con i cittadini per la raccolta delle segnalazioni e con gli agenti.',
            paragraph2: 'Interroga le banche dati SDI e MCTC, ricevi allegati multimediali, colleziona gli elementi nel brogliaccio digitale.',
        },
        {
            name: 'colibrì',
            subtitle: <span>CENTRALE OPERATIVA PER <br/>DELLE POLIZIE LOCALI</span>,
            img: Colibri,
            clients: [
                {
                    img: LocalPolice,
                    title: 'Polizia Locale'
                },
                {
                    img: PolferImg,
                    title: 'Polizia Ferroviaria',
                },
            ],
            pdfBrochure: colibriPdf,
            moreInfoLink: '',
            paragraph1: 'Colibrì è la centrale operativa per gestire, pianificare e monitorare le attività di sicurezza delle Polizie Locali.',
            paragraph2: 'Interroga le banche dati SDI e MCTC, ricevi allegati multimediali, colleziona gli elementi nel brogliaccio digitale.',
        },
        {
            name: 'mercurio ext',
            subtitle: <span>SUITE DI APPLICAZIONI PER GLI <br/> AGENTI DI POLIZIA</span>,
            img: Mercurio,
            clients: [
                {
                    img: StreetPolice,
                    title: 'Polizia Stradale'
                },
                {
                    img: PolferImg,
                    title: 'Polizia Ferroviaria',
                },
                {
                    img: StatePoliceImg,
                    title: 'Polizia di Stato'
                },
            ],
            pdfBrochure: mercurioPdf,
            moreInfoLink: '',
            paragraph1: 'Una suite di applicazioni compatibili con smartphone e tablet Android per facilitare il servizio degli agenti sul territorio.',
            paragraph2: 'Mercurio Ext assicura uno strumento per ogni esigenza: dalla chat agli allarmi, dalla localizzazione alla gestione degli eventi.',
            maxWidthImg: '80%',
        },
        {
            name: 'HELPME',
            subtitle: <span>SISTEMA DI SICUREZZA PER IL <br/>LAVORATORE ISOLATO</span>,
            img: HelpMe,
            clients: [
                {
                    img: StreetPolice,
                    title: 'Polizia Stradale'
                },
                {
                    img: PolferImg,
                    title: 'Polizia Ferroviaria',
                },
                {
                    img: StatePoliceImg,
                    title: 'Polzia di Stato'
                },
            ],
            pdfBrochure: helpmePdf,
            moreInfoLink: '',
            paragraph1: 'HelpMe monitora lo stato di sicurezza del lavoratore isolato anche in luoghi sotterranei e gallerie. ',
            paragraph2: 'In caso di allarme avviato, trasmette segnalazioni alle autorità, ai contatti impostati o alla Centrale di Sorveglianza.',
            maxWidthImg: '80%',
        },
        {
            name: 'topcrash',
            subtitle: <span>SISTEMA PER IL RILEVAMENTO <br/>DEI SINISTRI STRADALI</span>,
            img: TopCrash,
            clients: [
                {
                    img: StreetPolice,
                    title: 'Polizia Stradale'
                },
                {
                    img: LocalPolice,
                    title: 'Polizia Locale'
                },
            ],
            pdfBrochure: topCrashPdf,
            moreInfoLink: '',
            paragraph1: 'Grazie alla tecnologia GPS e GNSS, Topcrash rileva gli elementi del sinistro in modo digitale.',
            paragraph2: 'Il disegno planimetrico viene restituito in modo automatico e può essere modificato in un secondo momento tramite frontdesk.',
        },
    ]


    return (
        <div className={'about1-page'}>
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

        </div>
    )
}

Security.propTypes = {}

Security.defaultProps = {}

export default Security;
