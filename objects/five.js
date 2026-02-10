// 3️⃣ Delete a property from an object
function deleteProperty(obj,prop){
   delete obj[prop];
   return obj;
}
// let student={name:"Rohit",age:29,city:"Delhi"}
// console.log(deleteProperty(student,"city"))



const user = {
  name: "Rohit",
  age: 21,
  city: "Delhi"
};

delete user.age; // deletes the 'age' property

console.log(user);
// { name: 'Rohit', city: 'Delhi' }

function deleteProperty(obj,key){
    delete obj[key]
    return obj
}
let student2={name:"Rohit",age:29,city:"Delhi"}
console.log(deleteProperty(student2,"city"))