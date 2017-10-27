// destructuring allows extract values from arrays and objects

// arrays
var [first, second, third] = ["Colin", "Daniel", "Robert"];


// objects

var person = {
  firstName: "Colin",
  lastName: "But"
}

var {firstName, secondName} = person;
console.log(firstName);
console.log(secondName);

var {firstName: first, secondName: second} = person;

console.log(first);
console.log(second);
