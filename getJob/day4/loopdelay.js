function loopDelay(ms){
    let start=Date.now();
    while(Date.now()-start<ms){

    }

}

console.log("Start");
loopDelay(2000);  // 2 sec delay
console.log("End after 2 sec");