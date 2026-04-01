let pup = document.getElementById("error-msg");
// console.log(pup);
function error() {
  pup.textContent = "There was an error,Please try again";
  //   // console.log(erroR.innerText);
  //   // Popup.classlist.add(msg);
  //   // Popup.innerText =
  //   //   alert("There was an error!Please try again");
}
// error();


function raceTime() {
  let raceT1=109;
  let raceT2=107;

  return raceT1+raceT2;
}
console.log(raceTime());  
let randomNumber=Math.random()*7
// console.log(randomNumber)

// let floorNumber = Math.floor(15.99999); 
// console.log(floorNumber)

console.log(Math.floor(randomNumber))

let diceRoll=Math.floor(Math.random()*6 )+1;
console.log(diceRoll)  
//Blackjack game 

function rollDice(){

  return Math.floor(Math.random()*6)+1;
}
console.log(rollDice()) ;

let prime=12
let isnotPrime=0.999

console.log(prime/isnotPrime)

let rand=Math.floor(Math.random()*13)+1
console.log(rand)
