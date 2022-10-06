/* Istruzioni:

Il programma dovrà chiedere all'utente:
    - il numero di chilometri che vuole percorrere
    - e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli ove   r 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare) */

const howManyKm = prompt("Quanti km desideri percorrere ?");
console.log(howManyKm);

const userAge = prompt("Quanti anni hai ?");
console.log(userAge);

const generalPrice = 0.21;

let finalPrice = howManyKm * generalPrice;
console.log(finalPrice.toFixed( 2 ));

if (userAge <= 17) {
    const minorPrice = generalPrice - (generalPrice *20 / 100)
    finalPrice = howManyKm * minorPrice
    console.log(finalPrice.toFixed( 2 ));    
} else if (userAge >= 65) {
    const elderlyPrice = generalPrice - (generalPrice *40 / 100)
    finalPrice = howManyKm * elderlyPrice
    console.log(finalPrice.toFixed( 2 ));
}
document.getElementById("trip_price").innerHTML = `${finalPrice.toFixed( 2 )} €`;