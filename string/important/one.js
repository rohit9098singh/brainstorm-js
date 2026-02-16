function SplitFunction(str) {
    let res = "";
    for (let char of str) {
        if (char === char.toUpperCase() && res.length > 0) {
            res += " ";  // add space before uppercase
        }
        res += char; // always add the char
    }
    return res;
}

console.log("splitted value:", SplitFunction("MyNameIsRohitSingh"));