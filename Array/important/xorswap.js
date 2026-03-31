let a = 5;
let b = 6;

console.log("Start:", a, b);

a = a ^ b;
console.log("Step1 (a = a ^ b):", a, b);

b = a ^ b;
console.log("Step2 (b = a ^ b):", a, b);

a = a ^ b;
console.log("Step3 (a = a ^ b):", a, b);