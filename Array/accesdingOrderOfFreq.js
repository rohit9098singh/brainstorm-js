const arr = [1, 2, 3, 3, 4, 3, 3, 1, 1, 2]

function sortInAssendingOrderOfFrq(arr) {
    let obj = {};
    for (let item of arr) {
        obj[item] = obj[item] + 1 || 1
    }


    let entries = Object.entries(obj)
    let sorted = entries.sort((a, b) => {
        return a[1] - b[1]
    })

    console.log(sorted)

    console.log(sorted.map((e) => +e[0]))

}

sortInAssendingOrderOfFrq(arr)