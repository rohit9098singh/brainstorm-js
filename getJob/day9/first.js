// find the largets sum of subarray

// let arr=[2,3,5,-2,7,-4]
arr = [1, -2, 3, 4]

function largestSumOfSubArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log("value of i",arr[i])
        let currSum = 0;
        for (let j = i; j < arr.length; j++) {
             console.log(arr[j])
            currSum += arr[j];
            sum = Math.max(sum, currSum)
        }
    }
    return sum
}

console.log(largestSumOfSubArray(arr))


// what is the differnce between dense and sparse array if we try to loop which will take more time to execute 

// dense array =>  Every index from 0 to length - 1 has a value.  let arr = [10, 20, 30];
// sparse array => Some indexes are empty (holes exist). let arr = [10, , 30];

//Dense arrays are faster because sparse arrays require extra hole-checking at each index during iteration.


function createDenseArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i;   // every index filled
    }
    return arr;
}

function createSparse(n) {
    let arr = [];
    for (let i = 0; i < n; i += 2) {
        arr[i] = i;   // skipping every second index
    }
    return arr;
}

let N = 10000000;

let dense = createDense(N);
let sparse = createSparse(N);

function testIteration(arr, label) {
    console.time(label);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ;
    }
    console.timeEnd(label);
}
testIteration(dense, "Dense");
testIteration(sparse, "Sparse");


