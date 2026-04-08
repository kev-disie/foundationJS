//promises

const promised = new Promise((resolve,reject) =>{
    const allWentWell = true;
    if (allWentWell){
        resolve("All things will be well")

    }else{
        reject("Yap!I'll always be there for Us.")
    }

})

//console.log(promised)

promised
    .then((value)=>{
        console.log( value);
    })
    .catch((reason)=>{
        console.log(reason);
    })

const prom = new Promise ((resolve, reject) =>{
    const randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber)
    setTimeout(()=>{
        if (randomNumber < 4){
            resolve("Well done you guessed it right!")
        }else {
            reject("Opps! you guessed it wrong!")
        }
    },3000)
})

//console.log(prom)

prom
    .then((value)=>{
    console.log(value)
})
    .catch((reason)=>{
    console.log(reason)
})

const promiseOne = new Promise((resolve) =>{
    resolve("Promise one has been resolved")
})
const promiseTwo = new Promise((resolve) =>{
    resolve("Promise two has been resolved");
})
const promiseThree = new Promise((reject) =>{
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

//.all method checking all promises fulfilled else fail

const IOU = new Promise((resolve) =>{
    resolve("IOU one  has been resolved")
})
const IOUTwo = new Promise((resolve) =>{
    resolve("IOU Two has been resolved")
})
const IOUThree = new Promise(( resolve,reject)=>{
    reject("IOUThree has failed therefore do not expect any magic!!")
})

Promise.all([IOU,IOUTwo,IOUThree])
    .then((value)=>
    {
        console.log(value)
        return value[1];
    })
    .then((value)=>{
        console.log(value)
        return value[2];
    })
    .catch((error)=>{
        console.log(error)
    })
