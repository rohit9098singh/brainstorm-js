// const parentObj={
//     name:"rohit",
//     greet:function (){
//          console.log("hello my name is ",this.name)
//     }
// }

// let student=Object.create(parentObj,{ rollno: { value: 101 } })

// student.age=32

// student.greet();
// console.log(student.age)


let parentObj={
    greet:function (){
         console.log("hello my name is ",this.name)
    }
}
let student=Object.create(parentObj,{rollNo:{value:21}})

student.greet({name:"Rohit"})

