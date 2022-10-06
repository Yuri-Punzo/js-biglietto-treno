/* Istruzioni:

Il programma dovrà chiedere all'utente:
    - il numero di chilometri che vuole percorrere
    - e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare) */

const howManyKm = prompt("Quanti km desideri percorrere ?");
console.log(howManyKm);

const userAge = prompt("Quanti anni hai ?");
console.log(userAge);