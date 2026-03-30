function isValid(s) {
  const stack = [];
  const map = { ')':'(', '}':'{', ']':'[' };
  for (let ch of s) {
    if ('({['.includes(ch)) {
      stack.push(ch);
    } else {
      if (stack.pop() !== map[ch]) return false;
    }
  }
  return stack.length === 0;
}
console.log(isValid("()[]{}"))  //→ true
// isValid("(]")     → false



