function mergeIntervals(intervals) {
     let result=[];
     intervals.sort((a,b)=>a[0]-b[0]);
     let currentInterval=intervals[0]
     for(let i=0;i<intervals.length;i++){
         let nextInterval=intervals[i]
         if(currentInterval[1]>=nextInterval[0]){
            currentInterval[1]=Math.max(currentInterval[1],nextInterval[1]);
         }
         else{
            result.push(currentInterval)
            currentInterval=nextInterval
         }
     }
     result.push(currentInterval)
     return result
}

console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));