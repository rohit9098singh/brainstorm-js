function mostFrequent(arr) {
    let freq = {};
    let maxCount = 0;
    let result;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;

        if (freq[num] > maxCount) {
            maxCount = freq[num];
            console.log(num)
            result = num;
        }
    }

    return result;
}


console.log(mostFrequent([1, 1, 1, 1, 2, 33, 3, 4, 4, 5]))

// yaha par maxcount or result ka zarurat is liye hai qke hme maxcount nhi chhaye balki uska value chahye
