// function growingName(name){
//     for(let i=1;i<=name.length;i++){
//         console.log(name.slice(0,i));
//     }
// }
// growingName("rohit")

// function rightAngledname(str){
//     for(let i=str.length;i>0;i--){
//        console.log(str.slice(0,i))
//     }
// }

// console.log(rightAngledname("rojit"))

// Left-Aligned Triangle
// function rightTriangle(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("* ".repeat(i));
//   }
// }
// rightTriangle(5);

// right alligned traingle 
// function rightAlignedTriangle(n) {
//   for (let row = 1; row <= n; row++) {
//     console.log(" ".repeat(n - row) + "*".repeat(row));
//   }
// }

// console.log("Right Aligned Triangle");
// rightAlignedTriangle(5);

//Pyramid (Centered)
// function pyrimid(n){
//   for(let row=0;row<n;row++){
//        console.log(" ".repeat(n-row-1) + "*".repeat(2*row+1))
//   }
// }
// pyrimid(5)


// Inverted Pyramid

function invertedPyramid(n){
  for(let row=n-1;row>=0;row--){
      console.log(" ".repeat(n-row-1)+ "*".repeat(2*row+1))
  }
}

invertedPyramid(5)

//Full Diamond

function fullDimand(n){
  for(let row=0;row<n;row++){
     console.log(" ".repeat(n-row-1) + "*".repeat(2*row+1))
  }
  for(let row=n-1;row>=0;row--){
      console.log(" ".repeat(n-row-1)+ "*".repeat(2*row+1))
  }
}


fullDimand(5);





