// // Write a function to check if two strings are anagrams of each other

// function areAnagrams(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//   let count = {};
//   for (let char of str1) {
//     count[char] = (count[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!count[char]) {
//       return false;
//     } else {
//       count[char]--;
//     }
//   }
//   return true;
// }

// console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("hello", "world"));


function anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) return false;

    let count = {};

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
}

console.log(anagram("he", "he")); // true
console.log(anagram("listen", "silent")); // true
console.log(anagram("hello", "world")); // false




