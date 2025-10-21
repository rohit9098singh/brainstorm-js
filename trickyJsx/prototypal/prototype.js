let company2 = {
  name: "A",
  pay: function () {
    console.log("Paying");
  },
}; //company object
let worker = {
  id: 1,
  work: function () {
    console.log("Working");
  },
}; //worker object
worker.__proto__ = company2; //worker object inherits company object
console.log(worker);
worker.pay();




let company = {
  name: "ABC",
  pay: function () {
    console.log("Paying");
  },
};
let intern = Object.create(company, {
  experience: { value: 2 },
}); //creating intern object from company object
console.log(intern);