const arr= [100,"Rohit",10,8,"c"];

let number=[];
let str=[];
let char=[];

arr.forEach((item,index)=>{
    if(typeof item === "number"){
        number.push(item);
    }
    else if(typeof item === "string"){
          if(item.length===1){
            char.push(item)
          }else{
            str.push(item)
          }
    }
})

console.log("Numbers:", number);
console.log("Strings:", str);
console.log("Chars:", char);

