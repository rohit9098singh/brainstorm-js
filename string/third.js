function countVowelsAndConsonantsNoBuiltIn(str) {
    if (str.length === 0) {
        return "string must have some length";
    }

    let vCount = 0;
    let cCount = 0;

    for (let char of str) {
        const ch = char.toLowerCase();

        // check if alphabet
        if (ch >= 'a' && ch <= 'z') {

            if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
                vCount++;
            } else {
                cCount++;
            }
        }
    }

    return { vowel: vCount, consonant: cCount };
}

console.log(countVowelsAndConsonantsNoBuiltIn("Hello World!"));



