// const arr=[1,2,3,4,5];
// const res=arr.reduce((acc,curr)=>{
//     return acc<curr
// },5)
// console.log(res)

const { default: axios } = require("axios");



const arr=[1,2,3,4,50]

function args(arg2,arg){
    console.log(arg,arg2)
}

console.log(args(...arr))


// axios.interceptors.request.use((config) => {
//     if (LongUrls.includes(config.url)) {
//         config.timeout = 3000; // agar URL list me hai to 3s timeout
//     }
//     return config; // hamesha config return karna zaroori hai
// }, (error) => {
//     return Promise.reject(error); // agar error ho to reject karna hoga
// });




// prototype

// function Student(){
//     this.name="Rohit",
//     this.exp="6"
// }

// Student.prototype.company="Delloit"

// let std1=new Student()
// console.log(std1.company)

// protypal inheritance 

// const parent={
//     greet:function(){
//         console.log(`hello , i am ${this.name}`)
//     }
// }
// const child={
//     name:"Rohit"
// }

// child.__proto__=parent;
// child.greet();


