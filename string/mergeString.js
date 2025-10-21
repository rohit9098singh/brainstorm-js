function mergeString(str1, str2) {
  let result = "";
  let i = 0, j = 0;

  while (i < str1.length || j < str2.length) {
    if (i < str1.length) result += str1[i++];
    if (j < str2.length) result += str2[j++];
  }

  return result;
}

console.log(mergeString("abc", "pqr"));   // "apbqcr"
console.log(mergeString("ab", "pqrs"));   // "apbqrs"



function mergeString2(str1, str2) {
  return str1 + str2;
}

console.log(mergeString2("abc", "pqr")); // "abcpqr"
