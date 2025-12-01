// Esercizio 2: Crea una funzione che, dato un array di utenti come quello sopra,
// restituisce un nuovo array di stringhe con il formato "Cognome, Nome - Regione" per ogni utente.
// Utilizza solamente i metodi degli array (es. .map(), .filter(), ecc.) senza usare cicli for o while.
// Scrivi funzioni pure (senza effetti collaterali).

const utenti = [
  { nome: 'Mario', cognome: 'Rossi', regione: 'veneto' },
  { nome: 'Giulia', cognome: 'Verdi', regione: 'lombardia' },
  { nome: 'Luca', cognome: 'Bianchi', regione: 'piemonte' },
  { nome: 'Sara', cognome: 'Neri', regione: 'veneto' },
  { nome: 'Luca', cognome: 'Gialli', regione: 'veneto' },
  { nome: 'Gianluca', cognome: 'Blu', regione: 'lombardia' },
  { nome: 'Elena', cognome: 'Viola', regione: 'piemonte' },
  { nome: 'Francesca', cognome: 'Arancioni', regione: 'veneto' },
];

function trasformaUtente({cognome,nome,regione} = utente) {
  return `${cognome}, ${nome} - ${regione}`
}

const result = utenti.map(trasformaUtente);

//console.log(result);

function filtraPerRegione(regione) {
  return utenti.filter(utente => utente.regione === regione);
}

console.log(filtraPerRegione(utenti, "piemonte"));