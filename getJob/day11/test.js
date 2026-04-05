// because data.length ===0 and right part gets 
// renderd during && when the left part is correct
const data=[]
console.log(data.length)
let check=data.length && 4
console.log(check)

//===================================== second question ================================

const arr=new Array(20);
console.log(arr.length);
arr.forEach((item,index)=>{
    console.log(item)
})

//reson that the foreach not work is foreach ko chalne ke liye use index ke zarurt hote hai 
// but upper walle ke case me vo nhi banta hai isliye forrach nhi chalta [prove below]
// how to fix it new Array(20).fill("data")

const test=[1,2,3]
console.log({...test})
console.log("the method walla array",...arr) // undefined , undefined mila dekh

//===================================== Third question ================================

function App(){
    return (
        <div>
             {
                if(true){
                     console.log("inside if")
                }
             }
        </div>
    )
}
export default App
// JSX ke {} ke andar sirf expressions allowed 
// hote hain,statements (like if) allowed nahi hote.