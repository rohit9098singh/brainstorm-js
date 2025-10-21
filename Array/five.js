// Given two arrays, write a program to merge and sort them.
function mergeSort(arr1,arr2){
    let merged=arr1.concat(arr2);
    merged.sort((a,b)=>a-b);
    return merged
}


let a=[5,1,9];
let b=[8,2,4];

console.log(mergeSort(a,b))


// 2) merging using bubble sort

function mergeAndSortManual(arr1, arr2) {
  let merged = [];
  for (let i = 0; i < arr1.length; i++) {
    merged.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    merged.push(arr2[i]);
  }

  // step 2: sort manually (Bubble Sort)
  for (let i = 0; i < merged.length; i++) {
    for (let j = i + 1; j < merged.length; j++) {
      if (merged[i] > merged[j]) {
        let temp = merged[i];
        merged[i] = merged[j];
        merged[j] = temp;
      }
    }
  }

  return merged;
}


// Example
let a1 = [5, 1, 9];
let b1 = [8, 2, 4];
console.log(mergeAndSortManual(a1, b1));   // 👉 [1, 2, 4, 5, 8, 9]

