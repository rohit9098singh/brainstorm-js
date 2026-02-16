// एक function बनाओ जो check करे कि दो strings anagram हैं या नहीं।
// function toCheckAnagram(str1,str2){
//     str1=str1.toLowerCase();
//     str2=str2.toLowerCase();

//     let count={};
//     for(let char of str1){
//         count[char]=(count[char] || 0) +1;
//     }

//     for(let char of str2){
//         if(!count[char]){
//             return false
//         }
//         else {
//             count[char]--
//         }
//     }
//     return true
// }

function toCheckAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let count={}

    if (str1.length !== str2.length) {
        return "two string must be of same length "
    }
    for (let i = 0; i < str1.length; i++) {
        count[char] = (count[char] || 0) + 1
    }
    for(let char of str2){
        if(!count[char]){
            return false
        }
        else{
            count[char]-- // agar vo charchter mil gya to uska count ko kam bhi to karna hoga na mujhe 
        }
    }
    return true
}

// to remove dublicate from aray with three ways
function toRemoveDublicate(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

function removeDuplicates2(arr) {
    return [...new Set(arr)];
}

function removeDuplicates3(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(toRemoveDublicate([1, 2, 3, 4, 4, 4, 5, 5, 5]))
console.log(removeDuplicates2([1, 2, 3, 4, 4, 4, 5, 5, 5]))
console.log(removeDuplicates3([1, 2, 3, 4, 4, 4, 5, 5, 5]))

// to find the second largest element in array

const findTheSecongLaregst = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest === -Infinity ? "no second largest " : secondLargest
}
console.log("second largest element", findTheSecongLaregst([1, 2, 3]))