function isEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isEqual([1,2,3], [1,2,3])); // true
console.log(isEqual({x:1,y:2}, {y:2,x:1})); // false (order matters!)


console.log(JSON.stringify({x:1,y:2}))  