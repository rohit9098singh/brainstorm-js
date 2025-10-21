// Write a function to check if a string contains only digits

// function toCheckItContainOnlyDigit(str){
//     for(let i=0;i<str.length;i++){
//         if(str[i] < "0" || str[i] > "9"){
//             return false;
//         }
//     }
//     return true
// }

// console.log(toCheckItContainOnlyDigit("123456"))
// console.log(toCheckItContainOnlyDigit("12345a"))


function toCheckItContainOnlyDigit(str){
    for(let char of str){
        let num=char;
        if(num<"0" || num > "9"){
            return false
        }
    }
    return true
}
console.log(toCheckItContainOnlyDigit("123456"))
console.log(toCheckItContainOnlyDigit("12345a"))
