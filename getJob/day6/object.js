const obj1 = {}
const obj2 = { name: "Aman Kesharwani" }
const obj3 = { name: "Rohit singh" }

const first=obj1[obj2] = { name: "Ridhu ritik" }
console.log("1",first)

const second=obj1[obj3] = { name: "aman" }
console.log("2",second)

console.log(obj1[obj2])


// console.log([] === [])
console.log([] == []) 


const myobj=Object.create({name:"rohit"});
console.log(myobj.name);
delete myobj.name;

console.log(myobj.name)



const arr=[1,2,3,4];
let res=arr.filter((val)=>val=2);//Yahaan tumne == ya === nahi likha, balki = likha hai → matlab ye assignment ho gaya.
console.log(res)
let res2=arr.reduce((val)=>val=2);
console.log(res2)