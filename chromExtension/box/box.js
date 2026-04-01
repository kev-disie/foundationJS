let boxEl = document.getElementById("box-el")

boxEl.addEventListener("click",function(){
    console.log("I want to open this box when it's clicked")
}

)

let bestPrice = 520 //const

let discount = 120  //const

let shippingCos = 12  //let

let shippingTime = "5 - 12 days"

// let pEl = document.getElementById("p-el")

let contEl = document.getElementById("conatiner")

contEl.innerHTML = "<button onclick = 'buy()'> Buy !! </button> "


// my way of doing stuff huh

// contEl.addEventListener("click",function(){
   

//  return contEl.innerHTML += "<p>Thank you for shoping with Us</p>"
// }
    
// )


//Another alternative      USE THE FUNCTION RATHER THSN 

function buy(){
 document.getElementById("p-el").innerHTML = "<p>Thank you for shoping with Us.</p>"
}


 //working with Template strings

 const recipient = "James"

 let yourName = "Kassandra"

 const email = `Hey ${recipient}!
 
How is the going cheers ${yourName}`

// console.log(email)

// console.log( Boolean("")) //falsy

// console.log( Boolean("0")) //truthy

// console.log( Boolean(100)) //truthy

// console.log( Boolean(null)) //falsy

// console.log( Boolean([0])) //truthy

//  console.log( Boolean(-0)) //truthy

// passing strings in functions

const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting,name,speaker,emoji){

    welcomeEl.textContent = `${greeting} ${name} ${speaker} ${emoji} `
}

greetUser("welcome back","kassandra",",I will be your supervisor","🥲")

//passing numbers in functions

function add(num1,num2){

return`${num1 + num2}`;
}

console.log(add(207,100))

//passing arrrys in functions

function getFirst(arr){

return arr[0]

}
console.log(getFirst(["Where are my car Keys!!","woshi"]))



// function divide(n1,n2){

//     return n1 * n2;
// }


// console.log(divide(12.5,12))
