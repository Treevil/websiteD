import * as React from 'react';

export const workWithUsContent = {
    successAlert: {
        title: 'Messaggio Inviato',
        subtitle: 'Grazie per averci contattato, ti risponderemo al più presto!',
    },
    failAlert: {
        missingMandatoryFields: {
            title: 'Errore dati',
            subtitle: <>
                Uno o più cambi obbligatori omessi. <br/>
                Completare il form e riprovare
            </>,
        },
        wrongFormat: {
            title: 'Errore formato dati',
            subtitle: <>
                Uno o più cambi sono in un formato non corretto <br/>
                Controlla i dati e riprova
            </>,
        },
    },
    content: {
        address: <>
            Compila il form e <br/> unisciti a noi!
        </>,
        phone: "+39 011 99 81 611",
        email: 'info@divitech.it',
        website: 'www.divitech.it',
    }
}


