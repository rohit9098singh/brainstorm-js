

function toReverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {  // should be >= 0 not > 0
    rev += str[i];
  }
  return rev;
}
console.log(toReverseString("rohit")); // tihor

// function toreverseWords(sentence) {
//   let res = "";
//   let word = "";

//   for (let i = sentence.length - 1; i >= 0; i--) {
//     if (sentence[i] === " ") {
//       res += word + " ";   // 👈 ab peeche jodo
//       word = "";
//     } else {
//       word = sentence[i] + word ;
//       // word += sentence[i] ;
//     }
//   }

//   res += word;  // last word add
//   return res.trim();
// }





console.log(toreverseWords("hello my name is rohit"));
// ✅ Output: "rohit is my name hello"

function withBuildIn(sentence) {
  let reversed = sentence.split(" ").reverse().join(" ");
  return reversed;
}

console.log(withBuildIn("hello my name is rohit"));
// rohit is name my hello

function desiredSpace(str){
   return str.slice(0,2) + " " + str.slice(2,6) + " " + str.slice(6,8) + " " + str.slice(8,13) + " " + str.slice(13,18)
}
    
console.log(desiredSpace("mynameisrohitsingh"))

