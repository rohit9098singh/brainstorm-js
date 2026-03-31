function count(){
    console.log(this.length)
}

let arr=[count,1,2,3]

arr[0]("hi")  // 4 