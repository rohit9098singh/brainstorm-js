
function capitalizeWords(str){
    let words=str.split(" ");
    for(let i=0;i<words.length;i++){
            words[i]=words[i][0].toUpperCase() + words[i].slice(1)
    }

    return words.join(" ")
    //  return words.join("\n");
}

console.log(capitalizeWords("my name is rohit singh"))

