var a = 10;
console.log(a);

function a() {
    console.log(20)
}

console.log(a)



const arr = [1, 2, 0, 4, 5, 0];

function moveZeroToEnd(arr) {
    let pos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[pos];
            arr[pos] = arr[i];
            arr[i] = temp;
            pos++;
        }
    }

    return arr;
}

console.log(moveZeroToEnd(arr));
