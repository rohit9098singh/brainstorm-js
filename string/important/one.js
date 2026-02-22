function SplitFunction(str){
    let res="";
    for(let char of str){
       if(char === char.toUpperCase() && res.length>0){
           res+=" ";
       }
       res+=char
    }
    return res
}
console.log("splitted value:", SplitFunction("MyNameIsRohitSingh"));