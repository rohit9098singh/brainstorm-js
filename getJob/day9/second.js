// we just have to find ke object ke andar jitne keys hai sabko nikalna hai 

// note object ke against 2 he value exist kar sakte hai ya to vo ek string hoge ya fir vo ek  object hoga 
let payload = {
    name: "rohit",
    obj2: {
        language: "js",
        obj: {
            framework: "nextjs"
        }
    }
}

function getKeys(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            getKeys(obj[key])
        }
        console.log(key)
        // for only string walla keys
        // if(typeof obj[key] === "object"){
        //     getKeys(obj[key])
        // }else{
        //     console.log(key)
        // }
    }
}

getKeys(payload)


// Q) let suppose u have an application of 100k user 
// Ans=> you want all of them to logout at once how will u do it they use tokens to login 
//       just change the jwt_secret becaue every jwt is created against that only right


// Q)     below are the two ways to create an object which one is better and why
// Ans=>  pehla wala kam time lega kyu ke creation time pe he usko pata he object ke andar kya value hai but neeeche 
//        wale case me usko nhi pata hai ke usme value kya create honge to pehel vo empty banata hai fir usme vlaue datlta hai 
//        so time consuming
let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {}
obj2.a = 20;
obj2.b = 30;


function iterate(obj) {
    console.time("first");
    for (let key in obj) {
        console.log(key, obj[key])
    }
    console.timeEnd("first")
}
iterate(obj1)

function iterate2(obj) {
    console.time("first");
    for (let key in obj) {
        console.log(key, obj[key])
    }
    console.timeEnd("first")
}
iterate2(obj2)


// simple log question

console.log(~~4.99999999999) // gives output as 4 onlt works same as floor()


// finally return question at here
function doSomething(){
    try {
        throw new Error("errr")
    } catch (error) {
        return "catch"
    }finally{
        return "finnaly"
    }
}
console.log(doSomething())

function test(){
    try {
        throw new Error("err")
    } catch {
        return "catch"
    } finally {
        console.log("finally ran")
    }
}
console.log( test())

