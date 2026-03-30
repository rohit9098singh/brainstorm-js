// you have to put validation in the object 
// 1st => age should not go below 0 
// 2nd => isSequired false pe age ke value accesable na ho 
// for this scean proxy comes into the picture that is kind of
// middleware for objects
// 🔹 Object
let obj = {
    name: "tcm",
    age: 29,
    isSequired: false,
};

// 🔹 Proxy (middleware for object)
const proxy = new Proxy(obj, {

    // 🔸 GET → value read karte waqt
    get(target, prop) {
        console.log("GET:", prop);

        // ❌ agar secured hai to age access nahi milegi
        if (prop === "age" && target.isSequired === false) {
            throw new Error("Age is not accessible");
        }

        return target[prop]; // ✅ correct return
    },

    // 🔸 SET → value update karte waqt
    set(target, prop, value) {
        console.log("SET:", prop, value);

        // ❌ age negative nahi ho sakti
        if (prop === "age" && value < 0) {
            throw new Error("Age cannot be negative");
        }

        target[prop] = value;
        return true;
    }
});

console.log(proxy.name);  
// OUTPUT: "tcm"

console.log(proxy.age);  
// ❌ Error: Age is not accessible

proxy.isSequired = true;

console.log(proxy.age);  
// ✅ OUTPUT: 29

proxy.age = -5;  
// ❌ Error: Age cannot be negative