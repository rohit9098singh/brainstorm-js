// Write a program to find the first non-repeating character in a string.

function firstNonRepeating(str) {
  let count = {};
  str = str.toLowerCase();

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }

  return null; 
}

console.log(firstNonRepeating("swiss")); 


