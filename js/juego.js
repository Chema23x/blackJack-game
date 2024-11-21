
import { cards } from "./cards.js";

(() => {
const playerScore = document.querySelector("#playerScore");
const pcScore = document.querySelector("#botScore");
const newGame = document.querySelector("#newGame");
const askForCardBtn = document.querySelector("#askForCard");
const playerCards = document.querySelector("#player-cards-container");
const botCards = document.querySelector("#bot-cards-container")
const stop = document.querySelector("#stopPlayerCard")

let score = 0;
let botScore = 0;
// Obtener carta
askForCardBtn.addEventListener("click", () => {
    // Seleccionar una carta aleatoria
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    playerCards.innerHTML += `<img style="width: 100px; height: 100px; margin: 20px" src="/assets/${randomCard}" alt="card">`
    score += count(randomCard);
    playerScore.textContent = score;
    if(score > 21){
        askForCardBtn.disabled = true;
        computerCards(); 
        alert("La computadora gana");;  
    } 
})

// Obtener valor de la carta
function count (randomCard){
    let cardValue;
    if(randomCard.includes("A")){
       cardValue = score > 11 ? 1 : 11;
    }else{
        cardValue = randomCard.includes("K") || randomCard.includes("Q") || randomCard.includes("J") ? 10 : parseInt(randomCard.replace(/[^\d]/g, ''), 10);
    }
    console.log(cardValue);
    return cardValue;
}

// Nuevo juego

newGame.addEventListener("click", () => {
    playerCards.textContent = "";
    playerScore.textContent = 0;
    score = 0;
    botScore = 0
    pcScore.textContent = 0;
    botCards.textContent = "";
    askForCardBtn.disabled = false;
})

// Carta de la computadora
function computerCards (){
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    botCards.innerHTML += `<img style="width: 100px; height: 100px; margin: 20px" src="/assets/${randomCard}" alt="card">`
    botScore += count(randomCard);
    pcScore.textContent = botScore;
}


    stop.addEventListener("click", () => {
        while(botScore < 17){
            computerCards()
        }
        if(botScore > score && botScore <= 21 ){
            alert("La computadora gana");
        }else if(botScore === score){
            alert("Empate");
        }else{
            alert("El jugador gana")
        }
    })
})();