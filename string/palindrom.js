function isPalindrome(str) {
  const reverseStr=str.split("").reverse().join("");
  return reverseStr === str
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


function isPalindrome2(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Example
console.log(isPalindrome2("madam")); // true
console.log(isPalindrome2("hello")); // false


