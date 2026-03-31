let obj = {
  key: "val",
  key2: undefined,
  child: {
    key: "val",
    method: () => console.log("hi"),
    inner: {
      key: "val",
      date: new Date()
    }
  }
};

let obj3 = JSON.parse(JSON.stringify(obj));
console.log(obj3);


let obj2 = {
  key: "val",
  key2: undefined,
  child: {
    key: "val",
    inner: {
      key: "val",
      date: new Date()
    }
  }
};
let structClone = structuredClone(obj2);  // methods ke liye nhi kam karta hai 
console.log(structClone)


// one more we can aslo use assign method