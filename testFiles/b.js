// let firstCard = getRandomCard();
// let secondCard = getRandomCard();

let cards = [];
let sum = 0;

let hasBlackjack = false;
let isAlive = false; 
let messeage = "";

let messeageEL = document.getElementById("messeage-el");
let sumEL = document.getElementById("sum-el");
let cardEL = document.getElementById("card-el");

console.log(cards);

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if (randomNumber > 10 ){
        return 10;
    }else if (randomNumber === 1){
        return 11;
    }else {
        return randomNumber;
    }
}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard,secondCard];
    sum = firstCard + secondCard;

    
    
    
    renderGame();
}

function newCard(){
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame()
}

function renderGame(){
    cardsEL.textContent = "Cards: "
  if (sum < 21) {
  messeage="Do you want to draw a new card?";      /*renderGame() function: checks if the sum of the card indexed 0 and 1 ===21 
                                                    if the card drawn !=21 then                                                                            
                                                                                                                              */
} else if (sum == 21) {
  messeage="You've got Black Jack!";                
  hasBlackjack = true;
} else { 
  messeage="You're out of the game!"  
  
}

for (i = 0;i<cards.length;i++){
    cardEL.textContent = "Cards: " + cards[i] + ' '
}
}

