

// function toReverseString(str) {
//   let rev = "";
//   for (let i = str.length - 1; i >= 0; i--) {  // should be >= 0 not > 0
//     rev += str[i];
//   }
//   return rev;
// }
// console.log(toReverseString("rohit")); // tihor


function lastTodayProblem(str) {
    let words = str.split(" ");
    let res = "";
    
    for (let i = words.length - 1; i >= 0; i--) {
        res += words[i] + " ";
    }
    
    return res.trim();
}

console.log(lastTodayProblem("hello my name is rohit"));


// ✅ Output: "rohit is my name hello"

// function withBuildIn(sentence) {
//   let reversed = sentence.split(" ").reverse().join(" ");
//   return reversed;
// }

// console.log(withBuildIn("hello my name is rohit"));
// // rohit is name my hello

// function desiredSpace(str){
//    return str.slice(0,2) + " " + str.slice(2,6) + " " + str.slice(6,8) + " " + str.slice(8,13) + " " + str.slice(13,18)
// }
    
// console.log(desiredSpace("mynameisrohitsingh"))

