// Write a program to count how many times each character appears in a string.

function charCount(str) {
    let count = {};

    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

console.log(charCount("hello"));

