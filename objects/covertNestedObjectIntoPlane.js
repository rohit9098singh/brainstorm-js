function convertToNestedObjectIterative(flatObj) {
    const result = {};

    for (const key in flatObj) {
        const keys = key.split("_")
        let current = result;

        keys.forEach((k, i) => {
            if (i === keys.length - 1) {
                current[k] = flatObj[key];
            } else {
                current[k] = current[k] || {};
                current = current[k];
            }
        });
    }
   return result
}

const flatObject = {
    user_name: "Rohit",
    user_age: 22,
    user_address_city: "Mumbai",
    user_address_pin: 400001,
    company_name: "TechCorp"
};

const nestedObject = convertToNestedObjectIterative(flatObject);
console.log(nestedObject);


// {
//   user: {
//     name: "Rohit",
//     age: 22,
//     address: {
//       city: "Mumbai",
//       pin: 400001
//     }
//   },
//   company: {
//     name: "TechCorp"
//   }
// }
