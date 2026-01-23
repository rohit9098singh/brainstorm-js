// Write a function that takes an array of numbers and returns the sum of even numbers.

function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {   // check if number is even
      sum += arr[i];          // add to sum
    }
  }
  return sum;
}

// Example
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6]));  // 👉 12 (2+4+6)



