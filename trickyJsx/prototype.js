// Constructor function
function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Example usage
const p1 = new Person("Rohit");
p1.sayHello(); // Output: Hello, my name is Rohit

const p2 = new Person("Singh");
p2.sayHello(); // Output: Hello, my name is Singh



