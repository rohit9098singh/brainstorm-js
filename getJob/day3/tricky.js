function subs(a, b) {
  if (!b) {
    return function(c) {
      return a - c;
    };
   
  } else {
     return a - b;
  }
}



// Test
console.log(subs(10, 2));  // 8
console.log(subs(10)(2));  // 8


