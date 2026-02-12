// how will you make your html acessable to screen readers if you have any custom elements

// Use semantic HTML whenever possible.  insted of creating button with div use noraml button tag and use role=button
// use alt attributes while working with images
// even add aria-attributes 
// Make It Keyboard Accessible
//Provide Proper Labels  like <label for="email">Email</label>


// If backend sends 10,000 <li> items and there is no pagination support, rendering everything directly in frontend will cause:
    // 1)  Virtualization: This is called windowing or virtual scrolling. Use libraries like:React Window,React Virtualized
    // 2) Client-Side Pagination
    // 3) Infinite Scroll
    // 4) Debounce Expensive Operations If list has: Search ,Filter ,Sort

 const obj={
    a:10,
    b:20,
    sum(){
        return this.a + this.b
    }
 } 
 
 console.log(obj.sum()) // is casse me 30 aayega

 // but neeche walla case me nan is liye kyu ke hmne rerfence ko call kiya hai jiske vaja se vo standalone ban gya hai

const res=obj.sum
console.log(res())

// check for the question at here

const abc={
    name:"Vishal",
    age:22,
    address:"India"
}

let xyz={
    ...abc,
    name:"Ankit"
}

const {name,...pqr}=abc;

console.log(name,pqr)

console.log(pqr,xyz)

// CDN = Content Delivery Network

// Ye ek globally distributed servers ka network hota hai jo content ko users ke nearest server se serve karta hai.


// Decimal numbers exactly binary me represent nahi hote
// 0.1 aur 0.2 exact store nahi ho paate
console.log(0.1+0.2 === 0.3) //0.30000000000000004 === 0.3 ==> false



const obj2={
    name:"rohit",
    age:24
}

console.log(obj2.toString())


const arrs=[1,2,3,4,5,6];

function returnSum(arr){
    const res= arr.reduce((acc,curr)=>{
        acc+curr
    },0)
    console.log(res)
    return res
}
console.log("check the value at here ",returnSum(arrs))