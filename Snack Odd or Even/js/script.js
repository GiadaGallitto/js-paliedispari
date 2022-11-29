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

const buttonGame = document.querySelector("div.buttons-game .btn");

buttonGame.addEventListener("click", function(){

    let oddOrEven;
    
    do{
        oddOrEven = prompt(`Scegli pari o dispari`);
    } while ((oddOrEven != "pari") && (oddOrEven != "dispari"));
    
    console.log(`L'utente ha scelto ${oddOrEven}`)
    
    do{
        userNumber = parseInt(prompt(`Inserisci un numero da 1 a 5`));
    } while ((userNumber < 1) || (userNumber > 5));
    
    console.log(`Il numero scelto dall'utente è ${userNumber}`)
    
    function getRandomNumber(numMin, numMax){
        return randomNumber = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
    }
    
    let softwareNum = getRandomNumber(1, 5);
    
    console.log(`Il numero generato dal software è ${softwareNum}`);
    
    
    function isEven(number){
        return number % 2 === 0
    }
    
    let sum = userNumber + softwareNum;
    
    console.log(`La somma dei due numeri è ${sum}`);
    
    let check = "dispari"
    
    if(isEven(sum)){
        check = "pari"
    }
    
    console.log(check);
    
    if(check != oddOrEven){
        console.log("Hai perso!")
        document.getElementById("output").innerHTML = `Beh mi sa che hai perso! Ahahah`
    } else {
        console.log("Hai vinto!")
        document.getElementById("output").innerHTML = `Beh mi sa che hai vinto! Ma è solo fortuna...`
    }

});
