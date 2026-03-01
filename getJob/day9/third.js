fetch("https://dummyjson.com/kokdokd/products")
.then((res)=>{
    return res
})
.then((data)=>{
    console.log("================then called================");
    console.log("is this response",data)
})
.catch((err)=>{
    console.log("what is the eror",err)
})

// above works fine but when we convert the URL into a wrong endpoint,
// sometimes catch works.

// but catch is not coming because we hit the wrong endpoint,
// catch is coming because from there we got an empty or invalid response
// and we tried to convert it into JSON using res.json().

// res.json() was not able to parse the response properly,
// so it threw an error and that error went into catch.

// to prove this, if we replace res.json() with just res,
// then the below .then will execute even if status is 404,
// and catch will not run.

// learning:
// in case of 404, fetch does NOT automatically throw an error.
// fetch only throws error when there is a network failure.

// so if we want to handle 404 or 500 as error,
// we must manually check:

// if (!res.ok) {
//     throw new Error("Not a successful response");
// }

// axios automatically throws error for non-2xx status,
// but fetch does not, we must handle it manually.