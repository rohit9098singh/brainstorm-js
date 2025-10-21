function printKeysAndValues(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

let person = { name: "Rohit", age: 20, city: "Delhi" };
printKeysAndValues(person);

