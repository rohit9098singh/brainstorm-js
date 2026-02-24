// // Write a program to count vowels and consonants in a string

// function countVowelsAndConsonantsNoBuiltIn(str) {
//   let vCount = 0,
//     cCount = 0;
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (ch >= "a" && ch <= "z") {
//       if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//         vCount++;
//       } else {
//         cCount++;
//       }
//     }
//   }
//   return { vowels: vCount, consonants: cCount };  
// }


// function toCountVowelAndConconent(str){
//   let vowelCount=0;
//   let conconetCount=0
//     for(let i=0;i<str.length;i++){
//       let num=str[i];
//       if(num <="a" && num <="z"){
//          if(num === "a" || num === "e" || num === "i" || num === "o" || num === "u"){
//           vowelCount++
//          }
//          else{
//           conconetCount++
//          }
//       }
//     }
//     return {vowelCount,conconetCount}
// }
// console.log(toCountVowelAndConconent("Hello World!"));
