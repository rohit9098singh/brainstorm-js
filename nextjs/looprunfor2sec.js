function customLoop(){
    const start=Date.now();

    while(Date.now()- start <2000){
        // paued for  2 sec 
    }
}

console.log("Loop start");
customLoop();
console.log("Loop end");



// destructuring trick 

const [,,, forty] = [10, 20, 30, 40, 50];

console.log(forty); // 40


//======

const {3:a}=[10,20,30,40,50]
console.log("what",a)

// ===================

function abc(){
    return  console.log("hii")
}

const value=new abc();
console.log("value 1",value)

// ===================
function Person(name) {
  this.name = name;
}
Person.prototype.age = 20;

const p1 = new Person("Rohit");
console.log(p1.age); // 20 ✅ (linked to prototype)

//==================== one more to create a object without new keyword
function makePerson(name) {
  return { name };
}
makePerson.prototype.age = 20;

const p2 = makePerson("Rohit");
console.log(p2.age); // ❌ undefined (not linked)

