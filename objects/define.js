const student = {
  name: "Rohit",
  batch: 12
};

// new property "rollNo" add karna
Object.defineProperty(student, "rollNo", {
  value: 101,
  writable: false,       // false => value change nahi kar paoge
  enumerable: true,      // true => for...in loop me dikhega
  configurable: true     // true => delete ya redefine kar paoge
});

console.log(student.rollNo); // 101

student.rollNo = 202;        // change nahi hoga, kyunki writable false hai
console.log(student.rollNo); // 101


Object.defineProperty(student, "batch", {
  writable: false
});

student.batch = 15;  // change nahi hoga
console.log(student.batch); // 12