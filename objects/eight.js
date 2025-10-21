// 6️⃣ Invert an object (keys become values & values become keys)

function invertObject(obj){
    let inverted={};
    for(let key in obj){
        inverted[obj[key]]=key;
    }
    return inverted
}

let obj = { name: "Rohit", role: "student" };
console.log(invertObject(obj));

