function loopDelay(ms){
    let start=Date.now();
    while(Date.now()-start<ms){

    }

}
console.log("Start");
loopDelay(2000);  // 2 sec delay
console.log("End after 2 sec");


console.log("start");

setTimeout(() => {
  console.log("hello world");
}, 3000);

const startTime = Date.now();
let endTime = startTime;

while (endTime < startTime + 10000) { // 10 seconds block
  endTime = Date.now();
}

console.log("end");