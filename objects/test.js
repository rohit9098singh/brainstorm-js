// my name is rohit
// MY NamE IS RohiT

// let str = "my name is rohit";

// function convertFirstAndLastCap(str) {
//     let res = [];
//     const words = str.split(" ");
//     //   console.log(word)
//     for (let word of words) {
//         res.push(word[0].toUpperCase() + word.slice(1, word.length - 1) + word[word.length - 1].toUpperCase())
//     }
//     return res.join(" ")
// }

// console.log(convertFirstAndLastCap(str))


let str2 = "ABCdFFGHDDD"

function findTheLongestSubString(str) {
    let count = {};
    let res=""
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }

    for(let char of str){
        if(count[char]===1 ){
            res+=char
        }
        else{
            break;
        }
    }
    return res
   
}

console.log(findTheLongestSubString(str2))