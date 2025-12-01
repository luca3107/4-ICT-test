//Data una lista di utenti e le loro relative proprietà: nome, cognome, regione
//crei un oggetto dove i campi sono i nomi delle regioni che compaiono e il valore è il numero di volte che compaiono all'interno dell'array degli utenti

const { useTransition } = require("react");



const uteti = [
  { nome: 'Anna', cognome: 'Bianchi', regione: 'Lombardia' },
  { nome: 'Luca', cognome: 'Verdi', regione: 'Sardegna' },
  { nome: 'Sara', cognome: 'Neri', regione: 'Veneto' },
  { nome: 'Marco', cognome: 'Gialli', regione: 'Veneto' },
  { nome: 'Elena', cognome: 'Blu', regione: 'Veneto' },
];

const result = utenti.reduce {
    (acc, {regione}) => {
        if (typeof acc[regione] === "Undefined") {
            return {
                ...acc,
                [regione] : 1
            }
        }
    },
    {}
}