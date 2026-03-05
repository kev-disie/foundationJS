let myLeads =[];

// myLeads = JSON.parse(myLeads)  //converts a string into an array of object/value

// console.log( myLeads)

// myLeads = JSON.stringify(myLeads) // convert the array into a string

// console.log(typeof myLeads)



const deleteBtn = document.getElementById("delete-el")  //jsut incase!!
   
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEL = document.getElementById("ul-el") //defined and get the u-el id from the DOM != assignme
// localStorage.setItem("myleads" ,"https://fast.com")

// console.log(localStorage.getItem("myleads"))
// localStorage.clear()
// localStorage.setItem("portfolio","https://youtube.com")
// console.log(localStorage.getItem("portfolio"))
// localStorage.clear()

// let leadsFromLocalStorage = "";

// console.log(localStorage)

deleteBtn.addEventListener("dblclick",function(){

  localStorage.clear();

  myLeads.length = 0;

  ulEL.remove() //makes me refresh the page after deleting all items and then feeding in fresh input for rendering

  ulEL.innerHTML = ""; //prone to xss!! but efficient for now

  //renderLeads() //you can call the renderleads() which is empty after seting the array length to 0
})

inputBtn.addEventListener("click",function(){
    // myLeads.push(myLeads)

    myLeads.push(inputEl.value)

   

    // myLeads = JSON.parse(myLeads)

    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    

  // console.log(renderLeads())

  render(myLeads)

    console.log("Button clicked from addEventlistener...")

 console.log(localStorage)
})



function render(leads){
    
// write a for loop that logs out the items in the myLeads array

  let listItems = ""

   const li = document.createElement("li")  //define a variable then use creatElement method 
for (let i = 0; i < leads.length ;i ++){
    // console.log(myLeads[i])

    // listItems += "<li><a target = '_blank' href = '"+ myLeads[i]+"'>" +  myLeads[i] + "</a></li>"
                                                          // NEVER DEFINE AYTHING INSIDE A FOR LOOP!!

       //Working with Template Strings

       listItems += ` <li class = 'li'>
       
       <a  class = 'a'target = _blank href = ${leads[i]} >

       ${leads[i] + " 😮‍💨"}
        
       </li>`
       
            
            

       
    ulEL.innerHTML = listItems

    //  li.textContent =  myLeads[i] + " 😮‍💨" //we know the usage of textcontent here

    // ulEL.append(li) //appEND adds the items to the list

    

}
inputEl.value = "";



}

// let items = JSON.parse(localStorage.getItem("myLeads"))
 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))  //use JSON.parse() then pass the localSt orage.getItem in the brackets to convert the JSON strings into JS object or values

console.log( JSON.parse(localStorage.getItem("myLeads")))

if (leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
 render(myLeads) //passed in the myLeads variable after saving Leads in loclastorage for persistence
}

console.log(Boolean(leadsFromLocalStorage))
// localStorage.setItem("myName","Kassandra Shannel")

// localStorage.clear()

// function clearStorage(){
//   localStorage.clear()
// }