// Write a function to find all pairs in an array whose sum is equal to a given number.

// brute force
function findPairs(arr, key) {
  let pair = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === key) {
        pair.push([arr[i], arr[j]]);
      }
    }
  }
  return pair;
}

// console.log(findPairs([1, 2, 3, 4, 5, 6], 7));

//=================================================Hash Map ========================================================

function FindPairUsingHashMap(arr, key) {
  const seen = new Set();
  const pairs = [];

  for (let num of arr) {
    const complement = key - num;
    console.log("check =>",complement,"num=>",num)

    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}

console.log(FindPairUsingHashMap([11,12,13,14,5,6,16,3,5,2,4,1], 23))
