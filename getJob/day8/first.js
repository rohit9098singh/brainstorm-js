let x = {}, y = { name: "zakya" }, z = { name: "rani" }

x[y] = { name: "ram" }
x[z] = { name: "kapil" }

console.log(x[y])

// second question at here 
const a = { name: "ram", age: 21, city: "oddisha" }
let b = { ...a, name: "rahul" }
const { name, ...xyz } = a;
console.log(xyz, b)


let name2 = "rohit"
console.log(`this is the name at here ${name2}`)

// why do we prefer fucntiona based component over class based 
// 👉 No this
// 👉 No constructor
// 👉 No binding
// 👉 Cleaner and easier to read


// dev-deppendecy are thoes dependecy that are needed during the production that is =>express ,mongoose
// dependecny are thoes that are needed during the development time => nodemon typescript jest webpake


// Dynamic routing means:
// Routes whose path contains dynamic parameters, and the content rendered depends on those parameters.

// Attribute selector kisi element ko uske HTML attribute ke base par select karta hai.


function mergeTwoString(str1, str2) {
    let newStr = "";
    let newStr1 = str1.toString();
    let newStr2 = str2.toString();

    let i = 0;

    while (i < newStr1.length || i < newStr2.length) {
        if (i < newStr1.length) {
            newStr += newStr1[i];
        }
        if (i < newStr2.length) {
            newStr += newStr2[i];
        }
        i++;
    }

    return newStr;
}

console.log(mergeTwoString("rohit", 123456778));


function test(...abc){
   console.log(abc,typeof abc)
}
test("shubham")


// What Is Event Loop Latency?
// Event loop latency is the delay between when a task is scheduled to run and when it actually starts executing.

// What is Reflow? (Also Called Layout)
// Reflow is when the browser recalculates the layout — i.e., size and position of elements.

// what is Repaints ?
// Repaint happens when visual appearance changes but layout stays same.

//utf-8=>  It is a character encoding standard used to represent text in computers.

// which one is the best to use localStorage , cookies , sessionStorage
// There is no “best” universally.
// It depends on use case, security requirement, and data flow.

// Cookies=> Authentication (especially session tokens)
// localStorage=>Theme preference,Cached UI state
// sessionStorage=>Multi-step flow  , Temporary form data


const res=Promise.resolve("hello")
res.then((val)=>console.log(val))


console.log("check this intresting string ",1 + + "2" + "2") //32
console.log(+ "1" + "1" +"2") // 112
console.log("A"-"B" + "2") // nan2
console.log("A"- "B" + 2) // Nan


console.log("this is even nan",[1,2,3]+[4,5,6]) // 1,2,36,5,6
console.log("this case gives nah",["hello"]- [123])


const unique = [...new Set([1,1,1,1,1])];


const arr = [1, 2, [3, 4]];

console.log(arr.flat());

console.log([1, 2, [3, [4]]].flat(2));

const arr12 = [1, [2, [3, [4, [5]]]]];

console.log(arr12.flat(Infinity));
