// function productOfNextTwo(arr1) {
//     let res = [];
//     let n = arr1.length;

//     for (let i = 0; i < n; i++) {
//         // use modulo (%) to wrap around
//         let next1 = arr1[(i + 1) % n];
//         let next2 = arr1[(i + 2) % n];
//         res.push(next1 * next2);
//     }

//     return res;
// }
console.log("product of next two will be right here ", productOfNextTwo([3,4,5]));

function productOfNextTwo(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        let firstVal= arr[(i+1)%arr.length];
        let nextValue=arr[(i+2)%arr.length];
        console.log(firstVal,"=>",nextValue)
        res.push(firstVal*nextValue);
    }
    return res
}

