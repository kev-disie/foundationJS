    //asynchrononous Js

// setTimeout(()=>{
//     console.log( "Execution: 4th")
//     console.log("1.What is your fucking name??")
// },1500)

// setTimeout(()=>{
//     console.log("Execution: 5th")
//     console.log("2.Get some manners young lad!")
// },30000)

// setTimeout(()=>{
//     console.log("Execution: 1st")
//     console.log("3.The best way to learn something is by failing!!")
// },400)
//
// setTimeout(()=>{
//     console.log("Execution: 3rd")
//     console.log("4.When was the las time you called your people?")
// },1200)

// setTimeout(()=>{
//     console.log("Execution: 2nd")
//     console.log("5.Is it only me or do you get better at this the more you do it?"
//     )
// },900)

// order of execution
//3,5,4,1,2

    //call back hell
// function task1(mandazi) {
//     setTimeout(()=>{
//         console.log( "Execution: 4th")
//         console.log("1.What is your fucking name??")
//         mandazi();
//     },1500)
// }
//
// function task2(callback) {
//     setTimeout(()=>{
//         console.log("Execution: 5th")
//         console.log("2.Get some manners young lad!")
//
//     },3000)
//
// }
//
// function task3(callback) {
//     setTimeout(()=>{
//         console.log("Execution: 1st")
//         console.log("3.The best way to learn something is by failing!!")
//         callback();
//     },400)
// }
//
// function task4(callback) {
//
//     setTimeout(()=>{
//         console.log("Execution: 3rd")
//         console.log("4.When was the las time you called your people?")
//         callback();
//     },1200)
//
// }
//
// function task5(callback){
//     setTimeout(()=>{
//         console.log("Execution: 2nd")
//         console.log("5.Is it only me or do you get better at this the more you do it?")
//         callback();
//     },900)
// }
//
// task3(()=>{
//     task5(()=>{
//         task4(()=>{
//             task1(()=>{
//                 task2()
//             })
//         })
//     })
// })


    //Some more callback Hell
   //
   //  const showMesseage = (callback)=>{
   //      console.log(callback);
   //
   //
   //  }
   //  const firstMessege = (callback)=>{
   //  setTimeout(()=>{
   //      showMesseage("Hiiii,Kev!!")
   //      callback();
   //  },2000)
   //  }
   //  const secondMessege = (callback)=>{
   //  showMesseage("Hiiii,Kassandra!!")
   //  }
   //
   //
   // firstMessege(secondMessege);

