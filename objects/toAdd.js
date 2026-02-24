let student1={
    name:"Rohit "
}

student1.age=20;

student1["location"]="banaras";

console.log("check output",student1)

//======================================================== important concept =====================================================================
// writable: false	Property ka value change ho sakta hai ya nahi
// configurable: false	Property ko delete ya redefine kar sakte hain ya nahi
// enumerable: true ka matlab hai property ko loop me ya Object.keys() me dikhaya jaayega.
// enumerable: false hone par property exist toh karegi, lekin for...in loop ya Object.keys() me nahi dikhegi.

Object.defineProperty(student1,"age",{
    value:30,
    writable:false
})


console.log("check what i am getting ",student1)


//======================
const student = {
  age: 20,
  branch: "Computer Science"
};

// name: ❌ not writable, ❌ not configurable
Object.defineProperty(student, "name", {
  value: "Rohit",
  writable: false,
  configurable: false,
  enumerable: true
});

// rollNumber: ❌ not writable, ✅ configurable
Object.defineProperty(student, "rollNumber", {
  value: "CS101",
  writable: false,
  configurable: true,
  enumerable: true
});

// college: ✅ writable, ❌ not configurable
Object.defineProperty(student, "college", {
  value: "ABC University",
  writable: true,
  configurable: false,
  enumerable: true
});

// console.log(student);
