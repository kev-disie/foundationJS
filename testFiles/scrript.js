let hasSolvedChallenge = false;
let hasHintScore = false;

if (hasSolvedChallenge === false && hasHintScore === false) {
  showSolution();
}

function showSolution() {
  console.log("showing solution...");
}

let likesDocumentaries = true;
let likesStartups = true;

if (likesDocumentaries === false || likesDocumentaries === false) {
  recommendMovie();
} else {
  console.log("Go mountain Climbimg...");
}

function recommendMovie() {
  console.log("Hey checkout this new film,definitely you will like it!!");
}


let airbnbCastle = {name: "catsle",
                    region:"North America",
                    size:"Bigger than your Penthouse!!",
                    location:"Atlaanta,georgia",
                    rate:" $300/hr",
                    street:[200,30],
                    withinYourreach :false

}



console.log(airbnbCastle.rate);
console.log(airbnbCastle.size);
console.log(airbnbCastle.location);

let person = { name:"Kassandra ",
               age:20 ,
               county:" Paris"
               

}
function logData(){
  console.log(person.name+"is a " +person.age+" years old girl who lives in" +person.county)
}
logData()

let age =67

if (age < 7){
  console.log("free passenger")
}
 else if (age < 18) 
{  console.log("child discount")
}else if (age < 27)
{
      console.log ("student discount")
}else if (age < 67)
{
     console.log ("Full price")
}else{
        console.log ("Senior citizen discount")
}

let largeCOuntries = ["Tuvalu","India","USA","Indonisia","Monaco"]
// console.log("The 5 largest countries in the world")
// for (let i =0 ;i < largeCOuntries.length;i++){
  

//   console.log("- "+largeCOuntries[i])
// }
console.log(largeCOuntries)
largeCOuntries.pop();
largeCOuntries.shift()

largeCOuntries.push("china")
largeCOuntries.unshift("pakistan")
console.log(largeCOuntries)

console.log("The 5 largest countries in the world")
for (let i =0 ;i < largeCOuntries.length;i++){
  

  console.log("- "+largeCOuntries[i])
}

let dayOfMonth = 13
let weekDay = "Friday"

if (dayOfMonth === 13 && weekDay === "Friday"){
console.log("spooky face")
}
else{
  console.log("You dumb-ass!! Go take a shower")
}

let hands = ["rock","paper","scissors"]



// function random(){

//   for (let i = 0; i < hands.length; i++){
//     hands[i] =Math.floor(Math.random()*3)+1 
//     console.log(hands)
//   }
 
// }
// random()
// let siz_t = hands.length
// console.log(siz_t)


//  let  k = 
// k = hands
// console.log(k)

function gethands(){
let randIndex = Math.floor(Math.random()*3)

return hands[randIndex]

}
console.log(gethands())

let fruits = ["🍎","🍊","🍎","🍊","🍎"]
let appleEl = document.getElementById("apple-el")
let orangeEl = document.getElementById("orange-el")



function callApple(){
  for (let i =0;i < fruits.length; i++){
    if ( i==0 || i==2 || i==4){
    appleEl.textContent +=  fruits[i] +' '
    console.log(appleEl.textContent)
    }else{
       orangeEl.textContent += fruits [i] +  ' '
    }
    
    
  }

 
}



