import * as React from 'react';

import GeoWebImg from '../../asset/prodotti/Geoweb-trimmy.png'
import Colibri from '../../asset/prodotti/Colibri-trimmy.png'
import HelpMe from '../../asset/prodotti/Helpme.png';
import TopCrash from '../../asset/prodotti/Topcrash.png';
import Mercurio from '../../asset/prodotti/mercurioext.png'
import PolferImg from '../../asset/loghi_clienti/polfer.png'
import StatePoliceImg from '../../asset/loghi_clienti/poliziaStato.png'
import LocalPolice from '../../asset/loghi_clienti/localPolice.png'
import StreetPolice from '../../asset/loghi_clienti/streetPolice.png'
import Iren from '../../asset/loghi_clienti/logo iren.png';
import Tea from '../../asset/loghi_clienti/tea.png';
import MelaImg from '../../asset/loghi_clienti/logo canavesana.png';


import GeoWebPdf from '../../asset/brochure/GeoWeb.pdf'
import topCrashPdf from '../../asset/brochure/TopCrash.pdf'
import helpmePdf from '../../asset/brochure/Help_Me.pdf'
import mercurioPdf from '../../asset/brochure/MercurioExt.pdf'
import colibriPdf from '../../asset/brochure/Colibri.pdf'
import Vattican from '../../asset/loghi_clienti/vatticano.png'
import JailPolice from "../../asset/loghi_clienti/poliPen.png";


export const SecurityContent = [
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
            {
                img: Vattican,
                title: 'Ispettorato del Vaticano',
            },
            {
                img: StreetPolice,
                title: 'Polizia Stradale'
            },
            {
                img: JailPolice,
                title: 'Polizia Penitenziaria'
            }
        ],
        pdfBrochure: GeoWebPdf,
        moreInfoLink: '',
        paragraph1: 'Con GeoWeb la centrale operativa è sempre in contatto con i cittadini per la raccolta delle segnalazioni e con gli agenti.',
        paragraph2: 'Interroga le banche dati SDI e MCTC, ricevi allegati multimediali, colleziona gli elementi nel brogliaccio digitale.',
    },
    {
        name: 'colibrì',
        subtitle: <span>LA CENTRALE OPERATIVA<br/>DELLE POLIZIE LOCALI</span>,
        img: Colibri,
        clients: [
            {
                img: LocalPolice,
                title: 'Polizia Locale'
            },
        ],
        pdfBrochure: colibriPdf,
        moreInfoLink: '',
        paragraph1: 'Colibrì è la centrale operativa per gestire, pianificare e monitorare le attività di sicurezza delle Polizie Locali.',
        paragraph2: 'La varietà delle funzioni che racchiude e la sua facilità d\'uso permettono di gestire numerose operazioni in pochi click!',
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
                img: MelaImg,
                title: 'Canavesana',
            },
            {
                img: Iren,
                title: 'Iren',
                height: '2.5rem'
            },
            {
                img: Tea,
                title: 'Gruppo Tea',
                height: '2.5rem'
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
