// Given an object, write a program to find the key with the highest value

function keyWithHighestValue(obj) {
  return Object.entries(obj).reduce(
    (max, [key, value]) => (value > obj[max] ? key : max),
    Object.keys(obj)[0]
  );
}

let scores = { John: 85, Rohit: 95, Emma: 90 };
console.log(keyWithHighestValue(scores));

// function keyWithHighestValue(obj) {
//   return Object.entries(obj).reduce((max, [key, value]) => {
//     value > obj[max] ? key : max;
//   }, Object.keys(obj)[0]);
// }

// function keyWithHighestValue(obj){
//   return Object.entries(obj).reduce((max,[key, value])=>{
//      value > obj[key] ? key : max
//   },Object.keys(obj)[0])
// }
