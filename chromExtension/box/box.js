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

console.log(email)

console.log( Boolean("")) //falsy

console.log( Boolean("0")) //truthy

console.log( Boolean(100)) //truthy

console.log( Boolean(null)) //falsy

console.log( Boolean([0])) //truthy

 console.log( Boolean(-0)) //truthy