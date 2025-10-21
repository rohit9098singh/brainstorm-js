let count = 0;
let value = count ?? 10;  
// let value = count || 10;  
console.log(value);    


function greet(name) {
  if (name === undefined) {
    name = "Guest";
  }
  console.log("Hello " + name);
}
// greet("Rohit singh")
greet()


const arr=[1,2,3,4,5]

const res=arr.find((val)=>val > 9);
console.log(res)

