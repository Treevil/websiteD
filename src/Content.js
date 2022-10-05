/*************
 *  GLOBALS  *
 *************/

export const menuElements = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Servizi',
        children: [
            {
                title: 'Sicurezza',
                path: "/Security",
            },
            {
                title: 'Logistica',
                path: "/logistic",
            },
            {
                title: 'Smart City',
                path: "/SmartCity",
            },
        ],
    },
    {
        title: 'Contatti',
        children: [
            {
                title: 'Scrivici',
                path: "/Form",
            },
            {
                title: 'Lavora con noi',
                path: "/WorkWithUs",
            },
        ],
    },
]


/*********
 * HOME  *
 *********/


export const homeCards = [
    {
        title: 'Questione di telematica',
        content: 'Utilizziamo i componenti hardware più all\'avanguardia per raccogliere i dati dei tuoi asset e ' +
            'li rendiamo consultabili attraverso piattaforme software di nostra creazione.',
        icon: "donut_small",
    },
    {
        title: 'Fatto su misura',
        content: 'Il Software che non vorrai mai cambiare è quello che si adatta perfettamente alle tue esigenze. ' +
            'Per questo i nostri servizi sono personalizzabili e modulabili.',
        icon: "diversity_1",

    },
    {
        title: 'I giusti valori',
        content: 'Condividiamo i tuoi stessi valori e, come te, crediamo in sistemi digitali in grado di massimizzare i risultati,  alzare gli standard e unire le persone. ',
        icon: "handshake",
    },
]

export const middleSectionText = {
    title: `LA NOSTRA ESPERIENZA A TUA DISPOSIZIONE`,
    subtitle: <>
        Da 25 anni localizziamo beni, <br/>
        digitalizziamo servizi e salvaguardiamo la sicurezza pubblica.
    </>,
}

export const middleSectionLinks = [
    {
        title: 'Sicurezza',
        icon: 'shield',
        path: "/Security",
    },
    {
        title: 'Logistica',
        icon: 'hub',
        path: "/logistic",
    },
    {
        title: 'Smart City',
        icon: 'directions_bus',
        path: "/SmartCity",
    },
];

/**
 *
 */
