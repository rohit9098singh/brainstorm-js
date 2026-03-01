// Har element pe transform lagao (map)
// Jo nested array aaye use 1 level flatten karo

const arr = [1, 2, 3];
const result = arr.flatMap(num => [num, num * 2]);
console.log(result);

// output = [1, 2, 2, 4, 3, 6]

const res2=arr.map(num => [num, num * 2])
console.log(res2)

// output = [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ]


// with json 
const orders = [
  {
    id: 1,
    items: ["Laptop", "Mouse"]
  },
  {
    id: 2,
    items: ["Keyboard"]
  }
];

const products = orders.flatMap(order => order.items);
console.log(products);


// return the square of even with out using map and filter use flatMap

const newArr=[1,2,3,4,5,6];
const res=newArr.flatMap((item)=>{
   return  item%2===0 ? item * item : []
})
console.log(res)


const num="";
const str="7*8";
console.log(Number(num)); // 0
console.log(parseInt(num)); // NaN tries to extract nearest value

console.log(Number(str))
console.log(parseInt(str)) // extract nearest value that is 7