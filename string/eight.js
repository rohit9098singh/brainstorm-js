// Write a function to find the longest word in a sentence.

// function longestWord(sentence) {
//   let words = sentence.split(" ");
//   let longest = "";
//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }
// console.log(longestWord("I love programming in JavaScript"));

function longest(str){
  const words=str.split(" ")
  console.log(words)
  let longest="";
  for(let i=0;i<words.length;i++){
       if(words[i].length > longest.length){
        longest=words[i]
       }
  }
  return longest
}
console.log(longest("hello y name is wnad chale baby"))

