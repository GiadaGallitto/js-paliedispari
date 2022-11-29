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

// PALINROMA:

const buttonGame = document.querySelector("div.buttons-game .btn");

buttonGame.addEventListener("click", function(){
    
    function checkPalindromeWord(string){
        
        // Misuro la lunghezza della parola inserita
        const stringLen = string.length;
        
        // Faccio arrivare il for fino a metà della lunghezza
        for(let i=0; i < stringLen / 2; i++){
            
            // Se il primo elemento (string[i]) è diverso dall'ultimo elemento (string[stringLen - 1 - i]),
            // allora ritorno un valore chiamato come non palindromo
            if(string[i] !== string[stringLen - 1 - i]){
                return `Questa parola non è palindroma`
            }
        }
        
        // Altrimenti si baserà sul return di base (nel caso delle parole palindrome)
        return `Questa parola è palindroma`
    }
    
    // Creo il prompt per la verifica
    const userWord = prompt(`Inserisci una parola`)
    
    // Richiamo la funzione e le assegno la variabile del prompt
    const answer = checkPalindromeWord(userWord);
    
    console.log(answer)

});

