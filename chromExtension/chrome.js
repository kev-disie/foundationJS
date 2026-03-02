let myLeads =[];

// myLeads = JSON.parse(myLeads)  //converts a string into an array of object/value

// console.log(typeof myLeads)

// myLeads = JSON.stringify(myLeads) // convert the array into a string

// console.log(typeof myLeads)

   
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEL = document.getElementById("ul-el") //defined and get the u-el id from the DOM != assignme
// localStorage.setItem("myleads" ,"https://fast.com")

// console.log(localStorage.getItem("myleads"))

// localStorage.setItem("portfolio","https://youtube.com")
// console.log(localStorage.getItem("portfolio"))
// localStorage.clear()

let leadsFromLocalStorage = "";

leadsFromLocalStorage = localStorage.getItem(myLeads)  //use JSON.parse() then pass the localStorage.getItem in the brackets to convert the JSON strings into JS object or values


inputBtn.addEventListener("click",function(){
    // myLeads.push(myLeads)

    myLeads.push(inputEl.value)

   

    // myLeads = JSON.parse(myLeads)

    localStorage.setItem("myLeads",JSON.stringify(myLeads))

  // console.log(renderLeads())

  renderLeads()

    console.log("Button clicked from addEventlistener...")

 console.log(localStorage)
})

function renderLeads(){
    
// write a for loop that logs out the items in the myLeads array

  let listItems = ""

   const li = document.createElement("li")  //define a variable then use creatElement method 
for (let i = 0; i < myLeads.length ;i ++){
    // console.log(myLeads[i])

    // listItems += "<li><a target = '_blank' href = '"+ myLeads[i]+"'>" +  myLeads[i] + "</a></li>"
                                                          // NEVER DEFINE AYTHING INSIDE A FOR LOOP!!

       //Working with Template Strings

       listItems += ` <li class = 'li'>
       
       <a  class = 'a'target = _blank href = ${myLeads[i]} >

       ${myLeads[i] + " 😮‍💨"}
        
       </li>`
       
            
            

       
    ulEL.innerHTML = listItems

    //  li.textContent =  myLeads[i] + " 😮‍💨" //we know the usage of textcontent here

    // ulEL.append(li) //appEND adds the items to the list

    

}
inputEl.value = "";


}