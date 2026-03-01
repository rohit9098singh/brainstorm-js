// Object.assign({},...null,...undefined)  // this gets typeerror because it says null is not itterable 

console.log(Object.assign({}, null, undefined))  // this gets an empty object only because Object.assign() internally null aur undefined ko ignore kar deta hai


let arr = [1,2,3];
console.log(arr[Symbol.iterator] ) // function milta hai


let a = null;
// console.log(a[Symbol.iterator]);

let [...a1] = [10, 20];

console.log(a1); // 10
console.log(b); // 20
