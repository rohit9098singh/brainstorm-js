// 4️⃣ Check if an object is empty (has no keys)

function isEmptyObject(obj){
    return Object.keys(obj).length === 0
}
console.log(isEmptyObject({})); // true
console.log(isEmptyObject({ name: "Rohit" }));