const number=[1,2,3,4]

const newArray=number.filter((num)=>num = 2);

console.log(newArray)

// output [1,2,3,4]

const number2=[1,2,3,4]

const newArray2=number.map((num)=>num = 2);

console.log(newArray2)

// output : [2,2,2,2]


const arr=[1,2,3,4];
const newA=arr.reduce((num)=>num =2)
console.log(newA)


function findTheLongestString(str){
    let words=str.split(" ");
    let longest="";
    for(let i=0;i<words.length;i++){
        if(words[i].length > longest.length){
            longest=words[i];
        }
    }
    return longest;
}

const str1="This is Vikas at here "

console.log("the longest word at here is ",findTheLongestString(str1));
