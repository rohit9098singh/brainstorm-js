function count(){
    console.log(this.length)
}

let arr=[count,1,2,3]

arr[0]("hi")  // 4 

// Since the function is invoked as a method of the array (arr[0]()), 
// this refers to the array. Therefore, this.length returns the array length, which is 4