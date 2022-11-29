// Palidroma
// Chiedere all’utente di inserire una parola:
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
// Dichiariamo chi ha vinto.
// Consigli del giorno
// Scriviamo sempre in italiano i passaggi che vogliamo fare
// Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// PARI O DISPARI

let oddOrEven;

do{
    oddOrEven = prompt(`Scegli pari o dispari`);
} while ((oddOrEven != "pari") && (oddOrEven != "dispari"));

do{
    userNumber = parseInt(prompt(`Inserisci un numero da 1 a 5`));
} while ((userNumber < 1) || (userNumber > 5));

function getRandomNumber(numMin, numMax){
    const randomNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    return randomNumber;
}

let softwareNum = getRandomNumber(1, 5);

console.log(softwareNum);


function isEven(number){
    if(number % 2 === 0){
        return "Pari"
    } else {
        return "Dispari"
    }
}

let sum = userNumber + softwareNum;

console.log(sum);

let check = isEven(sum);

console.log(check);