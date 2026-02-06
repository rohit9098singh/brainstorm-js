// jab bhi == dikhe:
// ✅ STEP 1: Kya koi Object / Array hai?
// 👉 Haan → usko string bana do

// example
// []   → ""
// [1]  → "1"
// {}   → "[object Object]"


// STEP 2: Kya koi Boolean hai?
// 👉 Haan → usko number bana do

// true  → 1
// false → 0


// ✅ STEP 3: Kya String vs Number hai?
// 👉 Haan → string ko number bana do

// EXAMPLE 1
false==[]  // first the [] gets converted into ""
           // then " " gets convetred to 0
          // false tends to 0 
          // now both are number so 0==0 true
// Example 2
// []=="" // again the array first get converted to ""
         // then that " " gets convetred to 0
        // right side "" also convets to 0 
       // now 0 == 0 true

// EXAMPLE 3
// "5" == true //  "5" gets converted to number =5
              // true gets converted to number =1
             // therfore 5==1 false

// EXAMPLE 4
// {}== true    // {} gets converted again to string   "[object Object]"
               // "[object Object]" → NaN (because it cannot be converted to number)
              //   true  gets converted to 1 
             // Nan==1 false
           




