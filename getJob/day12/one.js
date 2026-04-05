console.log(0.1 + 0.2 === 0.3);
console.log(typeof NaN);  // number
console.log(NaN === NaN);

console.log("==================================")

const a = {};
const b = {};
console.log(a == b);
console.log(a === b);

const c = a;
console.log(a === c);

console.log("==================================")

function multiply(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

const res=multiply(2)(3)(4)
console.log(res)

console.log("==================================")

async function fetchData() {
  try {
    const result = await Promise.reject("error!");
    console.log(result);
  } catch (e) {
    console.log("caught:", e);
  } finally {
    console.log("finally runs");
  }
}
fetchData();