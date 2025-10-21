let str = "rohitsinghfromachrya";

let result = str
  .replace("rohit", "rohit ")
  .replace("singh", "singh ")
  .replace("from", "from ")
  .replace("achrya", "achraya"); // fixing spelling if needed

console.log(result); 
// rohit singh from achraya



// let str1 = "rohitsinghfromachrya";

// let result1 = str1.slice(0,5) + " " +  // rohit
//              str1.slice(5,10) + " " + // singh
//              str1.slice(10,14) + " " + // from
//              str1.slice(14);           // achrya → achraya if you fix spelling

// console.log(result1); 
// rohit singh from achrya
function toChangeItInString(str){
     let words = str.split(" ");  // "rohit singh from acharya"
     let res = []
     for(let i=0; i<words.length; i++){
        let word = words[i];
        res.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
     }
     return res.join(" ");  // call join
}

let str1 = "rohit singh from acharya";
console.log(toChangeItInString(str1));
// Output: "Rohit Singh From Acharya"

// Output: Rohit Singh From Acharya

// Output: Rohit Singh From Acharya
