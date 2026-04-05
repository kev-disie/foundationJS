//asynchronus && callbacks
function nameSake(yourName){
    const hisName = "Khalifa"
    yourName(hisName);

}

function myName(yourName){
    console.log(`I'm also named ${yourName}`)
}

nameSake(myName)

//MAP Method
const people = [
    {
        name:'bob',
        age:20,
        position: 'Security Engineer'
    },
    {
        name:'Anna',
        age:25,
        position: 'Designer',
    },
    {
        name:'Susy',
        age:30,
        position: 'the boss'
    },
    {
        name:'Houston',
        age:23,
        position: 'Intern'
    }
];
const ages = people.map((person) =>{
    console.log(person.age)
})
//Accesing the array objects from the array
const newPeople = people.map((item) =>{
    return{
        firstName : item.name.toUpperCase(),
        oldAge : item.age,
        entryPosition : item.position

    }
})
console.log(newPeople)
const names = people.map((person)=>
    `<h2>${person.name}</h2>`
)
const result = document.querySelector('#result-container');
result.innerHTML = names.join('')




// console.log(ages);
