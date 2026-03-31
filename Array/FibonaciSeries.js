function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1)
}

console.log(factorial(5))


function fibonacci(num) {
  if (num === 0 || num === 1) {
    return 1
  }
  else {
    return fibonacci(num - 1) + fibonacci(num - 2)

  }
}

let n = 10;

for (let i = 0; i < n; i++) {
  console.log(fibonacci(i))
}