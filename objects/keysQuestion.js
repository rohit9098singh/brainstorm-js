let payload = {
    name: "rohit",
    obj2: {
        language: "js",
        obj: {
            framework: "nextjs"
        }
    }
}

function getKeys(obj) {
    for (let key in obj) {
        // if (typeof obj[key] === "object") {
        //     getKeys(obj[key])
        // }
        // console.log(key)
        // for only string walla keys
        if(typeof obj[key] === "object"){
            getKeys(obj[key])
        }else{
            console.log(key)
        }
    }
}


getKeys(payload)