function binarySearch(arr, target) {
  // Step 1: Sort array
  arr.sort((a, b) => a - b);

  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    let mid = Math.floor((i + j) / 2);

    if (arr[mid] === target) {
      return mid; // return index
    } 
    else if (arr[mid] < target) {
      i = mid + 1; // search right side
    } 
    else {
      j = mid - 1; // search left side
    }
  }

  return -1; // not found
}

// Example
const arr = [1, 2, 5, 3, 6];
console.log(binarySearch(arr, 5));


// bahoot mast question hai ye 

let original ="reactjs"
let toRotate="jsreact"

let res=toRotate + toRotate;

console.log(res.includes(original))


// parseint question 

const arr2=["1","2"]

console.log(arr.map((parseInt)))

// to check even odd without using any loop and all

const obj={
    true:"yes",
    false:"no"
}
function check(num){
    return obj[num % 3===0]
}
console.log("am i getting a odd result at here ",check(4))


// agar ek side bar hai uske andar ek input box to jab vo sidebar button ke toggle appear or disappear hoga to kya hoga ke 
// sttae preserve nhi hoga then we can use <Activity  mode={isSidebar ? "visible " :"hidden"}><Sidebar/><Activity/>


// palindrom

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false



// refernce data type ka addition pe .toString() method call hota hai

console.log([] + []) // " " + " "= ""
console.log([] + {}) // " "+ [object,object]= [object,object]
console.log({} + []) // [object,object]+ ""=   [object,object]


// write a infinte loop without breaking the code at here 

function* infinteLoop(){
    let count =0;
    while(true){
        yield count++
    }
}
let gen=infinteLoop();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
