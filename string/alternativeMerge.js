// function mergeAlternately(str1, str2) {
//   let result = "";
//   let i = 0, j = 0;

//   while (i < str1.length || j < str2.length) {
//     if (i < str1.length) result += str1[i++];
//     if (j < str2.length) result += str2[j++];
//   }

//   return result;
// }

// let str1 = "rohit";
// let str2 = "prjapati";

// console.log(mergeAlternately(str1, str2)); 


function mergeAlternately(str1,str2){
  let result=""
  let i=0; let j=0;
   while(i<str1.length || j<str2.length){
    if(i<str1.length){
      result+=str1[i++]
    }
    if(j<str2.length){
      result+=str2[j++]
    }
   }
   return result
}
console.log(mergeAlternately("alice","working"))