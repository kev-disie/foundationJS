//promisesy

const promised = new Promise((resolve,reject) =>{
    const allWentWell = true;
    if (allWentWell){
        resolve("All things weill be well")

    }else{
        reject("Yap!I'll always be there for Us.")
    }

})

console.log(promised)

// promised
//     .then((value)=>{
//         console.log( value);
//     })
//     .catch((reason)=>{
//         console.log(reason);
//     })

const prom = new Promise ((resolve, reject) =>{
    const randomNumber = Math.floor(Math.random() * 10)
    setTimeout(()=>{
        if (randomNumber < 4){
            resolve("Well done your guessed it right!")
        }else {
            reject("Opps! you guessed it wrong!")
        }
    },2000)
})

// console.log(prom)
//
// prom
//     .then((value)=>{
//     console.log(value)
// })
//     .catch((reason)=>{
//     console.log(reason)
// })

const promiseOne = new Promise((resolve,reject) =>{
    resolve("Promise one has been resolved")
})
const promiseTwo = new Promise((resolve,reject) =>{
    resolve("Promise two has been resolved");
})
const promiseThree = new Promise((resolve,reject) =>{
    reject("Promise three has been rejected.Unlucky you!!");
})

promiseOne
    .then((value)=>{
        console.log(value)
        return promiseTwo
    })
    .then((value)=>{
        console.log(value)
        return promiseThree;
    })
    .catch((error)=>{
        console.log(error)

    })

