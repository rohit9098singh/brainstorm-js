const r=[1,2,3,4,5][1,2,3,4];  
console.log(r); // 5


// iska concept chalta hai kise jab hm clg ke andar fucntion call karte hai console.log(a(),b());
// what happens is expression gets evealuated left to right and last result gets captured 
// similar way the second array all the values gets e,eminated only last value is considered that is [4]

// so result becomes [1,2,3,4,5][4] thats means we are trying to extract 4 index of first array